"use client";
import React, { useState, useEffect } from "react";
import ToDo from "@/Components/ToDo";
// import About from "@/Components/About";
import axios from "axios";
import { toast } from 'react-toastify';
import NavBar from "@/Components/NavBar";

export default function Home() {
  const [formData, setformData] = useState({ title: "", description: "" });
  const [todoData, settodoData] = useState([]);

  const fetchTOdos = async () => {
    try {
      const response = await axios("/api");
      const updatedTodos = response.data.todos.map((newTodo) => {
        const existingTodo = todoData.find((todo) => todo._id === newTodo._id);
        return existingTodo ? { ...newTodo, complete: existingTodo.complete } : newTodo;
      });
      settodoData(updatedTodos);
    } catch (err) {
      toast.error("Failed to fetch tasks");
      console.error(err);
    }
  };

  const deleteTodo = async (mongoId) => {
    try {
      const response = await axios.delete("/api", {
        params: { mongoId },
      });
      toast.success(response.data.message);
      fetchTOdos();
    } catch (err) {
      toast.error("Error deleting task");
      console.error(err);
    }
  };

  const completeTodo = async (mongoId) => {
    try {
      const response = await axios.put("/api", { complete: true }, { params: { mongoId } });
      toast.success(response.data.message);
      settodoData(prev =>
        prev.map(todo => (todo._id === mongoId ? { ...todo, complete: true } : todo))
      );
    } catch (err) {
      toast.error("Failed to update task status");
      console.error(err);
    }
  };

  const undoComplete = async (mongoId) => {
    try {
      const response = await axios.put("/api", { complete: false }, { params: { mongoId } });
      toast.success("Task status reverted");
      settodoData(prev =>
        prev.map(todo => (todo._id === mongoId ? { ...todo, complete: false } : todo))
      );
    } catch (err) {
      toast.error("Failed to revert task status");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTOdos();
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api", formData);
      toast.success(response.data.message);
      setformData({ title: "", description: "" });
      await fetchTOdos();
    } catch (err) {
      toast.error("Error adding task");
      console.error(err);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-[#EBF5DF] pt-16">
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-2 w-[95%] md:w-[80%] max-w-[600px] mt-5 sm:mt-10 px-2 mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2C3639] mb-1">ToDo Lists</h1>
          <input 
            name="title"
            value={formData.title} 
            onChange={onChangeHandler} 
            type="text" 
            placeholder="Enter your task here" 
            className="px-3 py-2 border-2 border-[#BAD4AA] w-full shadow-md rounded-lg mt-5 sm:mt-10 focus:outline-none focus:border-[#2C3639] bg-white text-[#2C3639] placeholder-[#3F4E4F]"
          />
          <textarea 
            name="description"
            value={formData.description} 
            onChange={onChangeHandler} 
            placeholder="Enter your task description here" 
            className="px-3 py-2 border-2 border-[#BAD4AA] w-full shadow-md rounded-lg focus:outline-none focus:border-[#2C3639] bg-white text-[#2C3639] placeholder-[#3F4E4F]"
          />
          <button className="w-full sm:w-auto bg-[#BAD4AA] hover:bg-[#EBF5DF] text-[#2C3639] px-8 sm:px-11 py-2 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg font-semibold border border-[#2C3639]">
            Add Task
          </button>
        </form>

        <div className="relative overflow-x-auto shadow-md rounded-lg mt-5 sm:mt-10 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
          <table className="w-full text-xs sm:text-sm text-left sm:min-w-0 min-w-[600px]">
            <thead className="text-xs uppercase bg-[#6D7A60]">
              <tr>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-[#DCDCDC] font-bold">Id</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-[#DCDCDC] font-bold">Title</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-[#DCDCDC] font-bold">Description</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-[#DCDCDC] font-bold">Status</th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-[#DCDCDC] font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {todoData.map((item, index) => (
                <ToDo 
                  key={item._id} 
                  id={index} 
                  title={item.title} 
                  description={item.description} 
                  complete={item.complete} 
                  mongoId={item._id} 
                  deleteTodo={deleteTodo} 
                  completeTodo={completeTodo}
                  undoComplete={undoComplete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
