import "server-only";
import { NextResponse } from 'next/server';
import DBConnect from "@/DBConnect/DBConnect";

export async function GET() {
    try {
        const database = await DBConnect();
        const blogs = database.collection('blogs');
        const blog = await blogs.find().toArray();
        return NextResponse.json(blog)
    }
    catch (error) {
        console.log(error.name, error.message);
    }
};