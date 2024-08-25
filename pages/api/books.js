import { mongooseConnect } from "@/lib/mongoose";
import { Book } from "@/models/Book";
import { isAdminRequest } from "./auth/[...nextauth]";

// API Handlers
export default async function handle(req, res) {
    const {method} = req;

    //mongoose.Promise = clientPromise;
    await mongooseConnect();
    await isAdminRequest(req, res);

    // getting book
    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Book.findOne({_id: req.query.id}));
        } else {
            // ako nema id-a
            res.json(await Book.find());
        }
    }

    // creating book
    if (method === 'POST') {
        const {title, description, price, images, category, properties} = req.body;

        const bookDoc = await Book.create({
            title,
            description,
            price,
            images,
            category,
            properties,
        });
        res.json(bookDoc);
    }

    // update book
    if (method === 'PUT') {
        const {title, description, price, images, category, properties, _id} = req.body;
        //console.log({images});
        await Book.updateOne({_id}, {title, description, price, images, category, properties});
        res.json(true);
    }

    // deleting book
    if (method === 'DELETE') {
        if (req.query?.id) {
            await Book.deleteOne({_id: req.query?.id});
            res.json(true);
        }
    }
}