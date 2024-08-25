import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { getServerSession } from "next-auth";
import { authOptions, isAdminRequest } from "./auth/[...nextauth]";

// API Handlers
export default async function handle(req, res) {
    const {method} = req;
    
    await mongooseConnect();
    //const session = await getServerSession(req, res, authOptions);
    //console.log(session);
    await isAdminRequest(req, res);

    // getting 
    if(method === 'GET') {
        res.json(await Category.find().populate('parent'));
    }

    // creating
    if (method === 'POST') {
        const {name, parentCategory, properties} = req.body;
        const categoryDoc = await Category.create({
            name,
            parent: parentCategory || undefined,
            properties,
        });
        res.json(categoryDoc);
    }

    // update
    if (method === 'PUT') {
        const {name, parentCategory, properties, _id} = req.body;
        const categoryDoc = await Category.updateOne({_id}, {
            name,
            parent: parentCategory || undefined,
            properties,
        });
        res.json(categoryDoc);
    }

    // delete
    if(method === 'DELETE') {
        const {_id} = req.query;
        await Category.deleteOne({_id});
        res.json('OK');
    }
}