import { connectDB } from "@/lib/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const { complete } = await request.json();
    
    await connectDB();
    
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { complete },
      { new: true }
    );

    if (!updatedTodo) {
      return NextResponse.json(
        { message: "Todo not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating todo" },
      { status: 500 }
    );
  }
}