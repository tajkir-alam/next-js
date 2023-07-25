import "server-only";
import { NextResponse } from 'next/server';
import DBConnect from "@/DBConnect/DBConnect";
import { parse } from 'url';

export async function GET(request) {
    try {
        const { query } = parse(request.url, true);
        const { category } = query;

        let filter = {};
        if (category) {
            filter = {
                category: category,
            }
        }

        const database = await DBConnect();
        const blogs = database.collection('blogs');
        const blog = await blogs.find(filter).toArray();
        return NextResponse.json(blog)
    }
    catch (error) {
        console.log(error.name, error.message);
    }
};