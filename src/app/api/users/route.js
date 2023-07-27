import DBConnect from "@/DBConnect/DBConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
    const user = await request.json();
    const query = {
        email: user.email,
    };
    const database = await DBConnect();
    const userCollection = database.collection('users');
    const existingUser = await userCollection.findOne(query);
    if (existingUser) {
        return NextResponse.json({message: 'user already exist'});
    }
    const newUser = await userCollection.insertOne(user);
    return NextResponse.json(newUser);
}