import { NextResponse } from 'next/server';
import DBConnect from "@/DBConnect/DBConnect";
import { parse } from 'url';
import { ObjectId } from "mongodb";

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




// To do................... #PATCH

// increasing blog views.
// export async function PATCH(request) {
//     const { pathname } = parse(request.url, true);

//     const id = pathname.split('/').pop();
//     console.log(id);

//     const updateUserRole = {
//         $inc: {
//             views: 1,
//         },
//     };
//     const database = await DBConnect();
//     const blogCollection = database.collection('blogs');
//     const userRole = await blogCollection.updateOne(id, updateUserRole);
//     return NextResponse.json(userRole);
// }