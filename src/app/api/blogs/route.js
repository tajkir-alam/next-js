import { NextResponse } from 'next/server';
import DBConnect from "@/DBConnect/DBConnect";
import { parse } from 'url';


// If there are query parameter then blogs are fetching by their category name. otherwise all blogs will be fetched
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


// Individual blog is adding to the DB.
export async function POST(request) {
    const blog = await request.json();
    const database = await DBConnect();
    const blogCollection = database.collection('blogs');
    const newBlog = await blogCollection.insertOne(blog);
    return NextResponse.json(newBlog);
}



// increasing blog views.
export async function PATCH(request) {
    const previousRole = await request.json();
    const { query } = parse(request.url, true);
    const { email } = query;

    let filter = {};
    if (email) {
        filter = {
            email: email,
        }
    };
    const updateUserRole = {
        $inc: {
            views: 1,
        },
    };
    const database = await DBConnect();
    const userCollection = database.collection('users');
    const userRole = await userCollection.updateOne(filter, updateUserRole);
    return NextResponse.json(userRole);
}