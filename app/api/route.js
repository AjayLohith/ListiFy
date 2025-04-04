
import { NextResponse } from "next/server";
import { ConnectDB } from '../../lib/config/db';
import ToDoModel from '../../models/todo';

// Connect to database
const LoadDB = async () => {
    await ConnectDB();
    
}
LoadDB();

export async function GET(request) {
    const todos = await ToDoModel.find({});
   return NextResponse.json({todos:todos});
}


export async function POST(request) {

    const { title, description } = await request.json();

     await ToDoModel.create({
        title,
        description
    });


    return NextResponse.json({ message: "ToDo Created" });
}

export async function DELETE(request) {
   const mongoId=await request.nextUrl.searchParams.get('mongoId');
   await ToDoModel.findByIdAndDelete(mongoId);
   return NextResponse.json({message:"ToDo Deleted" });
}

export async function PUT(request) {
    const mongoId=await request.nextUrl.searchParams.get('mongoId');
    await ToDoModel.findByIdAndUpdate(mongoId,{
         $set:{
        isCompleted:true
    }
        
    });
       

    return NextResponse.json({message:"ToDo Completed" });
 }