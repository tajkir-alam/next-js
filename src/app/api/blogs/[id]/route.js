import { NextResponse } from 'next/server';
import DBConnect from "@/DBConnect/DBConnect";
import { parse } from 'url';
import { ObjectId } from "mongodb";

// Blogs are fetching by their id. this API is for individual blog display.
export async function GET(request) {
    try {
        const { pathname } = parse(request.url, true);

        const id = pathname.split('/').pop();

        const filter = {
            _id: new ObjectId(id)
        }

        const database = await DBConnect();
        const blogs = database.collection('blogs');
        const blog = await blogs.findOne(filter);
        return NextResponse.json(blog)
    }
    catch (error) {
        console.log(error.name, error.message);
        return NextResponse.json({ error: error.message })
    }
};



