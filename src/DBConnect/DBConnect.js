import { MongoClient } from 'mongodb';


const DBConnect = async () => {
    try {
        const uri = process.env.MONGO_URI;        
        const client = new MongoClient(uri);
        const database = client.db("uniechBlog");
        return database;
    }
    catch (error) {
        console.log(error.name, error.message);
    }
};

export default DBConnect;