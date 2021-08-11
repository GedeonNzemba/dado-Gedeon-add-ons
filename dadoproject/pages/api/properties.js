import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    const data = await db.collection("products").find({}).limit(10).toArray();

    res.json(data);
}