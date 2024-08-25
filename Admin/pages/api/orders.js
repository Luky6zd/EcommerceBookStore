import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

// api handler
export default async function handle(req, res) {
    await mongooseConnect();

    // descending order
    res.json(await Order.find().sort({createdAt: -1}));
}