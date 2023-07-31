import { NextResponse } from 'next/server';
import DBConnect from "@/DBConnect/DBConnect";
import { parse } from 'url';
import { ObjectId } from 'mongodb';


// If there are query parameter then blogs are fetching by their category name. otherwise all blogs will be fetched
export async function GET(request) {
    try {
        const { query } = parse(request.url, true);
        const { category } = query;

        // console.log(request.url.query, true);

        let filter = {};
        if (category === '') {
            filter = {}
        }
        else if (category) {
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
        return NextResponse.json({ error: error.message })
    }
};


// Individual blog is adding to the DB.
// export async function POST(request) {
//     const blog = await request.json();
//     const database = await DBConnect();
//     const blogCollection = database.collection('blogs');
//     const newBlog = await blogCollection.insertOne(blog);
//     return NextResponse.json(newBlog);
// }



// To do................... #PATCH

// increasing blog views.
export async function PATCH(request) {
    try {
        const id = await request.json();
        const filter = { _id: new ObjectId(id) };

        const updateUserRole = {
            $inc: {
                views: 1,
            },
        };
        const database = await DBConnect();
        const blogCollection = database.collection('blogs');
        const userRole = await blogCollection.updateOne(filter, updateUserRole);
        return NextResponse.json(userRole);
    }
    catch (error) {
        console.log(error.name, error.message);
        return NextResponse.json({ error: error.message })
    }
}