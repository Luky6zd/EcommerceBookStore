import { mongooseConnect } from "@/lib/mongoose";
import { Book } from "@/models/Book";
import { Order } from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SK);

// API Handler
export default async function handle(req, res) {

   if (req.method !== 'POST') {
        res.json('Request not POST method.');
        return;
   }

   const {name, email, city, postalCode, streetAddress, country, cartBooks} = req.body;
   await mongooseConnect();

   const booksIds = cartBooks;
   const uniqueIds = [...new Set(booksIds)];
   const booksInfos = await Book.find({_id: uniqueIds});

   let stripe_lineItems = [];

   for (const bookId of uniqueIds) {
        const bookInfo = booksInfos.find(prod => prod._id.toString() === bookId);
        const quantity = booksIds.filter(id => id === bookId)?.length || 0;

        if (quantity > 0 && bookInfo) {
            stripe_lineItems.push({
                quantity,
                price_data: {
                    currency: 'EUR',
                    book_data: {name: bookInfo.title},
                    amount_unit: quantity * bookInfo.price * 100,
                },
            });
        }
    }
    //res.json({stripe_lineItems});

    const orderDocument = await Order.create({
        stripe_lineItems, name, email, city, postalCode, streetAddress, country, paid: false,
    });

    const session = await stripe.checkout.sessions.create({
        stripe_lineItems,
        mode: 'payment',
        customer_email: email,
        success_url: process.env.PUBLIC_URL + '/cart?success=true',
        cancel_url: process.env.PUBLIC_URL + '/cart?canceled=true',
        metadata: {orderId: orderDocument._id.toString(), test: 'OK'},
    });

    // console
    res.json({
        url: session.url,
    });
}



