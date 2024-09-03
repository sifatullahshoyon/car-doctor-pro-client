import { connectDB } from "@/src/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    const newUser = await request.json();
    console.log(newUser);
    try {
        const db = await connectDB();
        const userCollection = db.collection('users');
        const exist = await userCollection.findOne({ email: newUser.email });
        console.log('exist :-', exist);
        if (exist) {
            return new Response(JSON.stringify({ message: "User Exists" }), { status: 304 });
        }
        // const saltRounds = 10; // Define salt rounds
        const hashPassword = bcrypt.hashSync(newUser.password, 14); // Use salt rounds instead of undefined 'salt'
        newUser.password = hashPassword; // Ensure you store the hashed password
        const resp = await userCollection.insertOne({...newUser, hashPassword});
        console.log("🚀 ~ POST ~ resp:", resp);

        return new Response(JSON.stringify({ message: "User Created" }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: "Something went wrong", error: error.message }), { status: 500 });
    }
};
