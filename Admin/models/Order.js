import { model, models, Schema } from "mongoose";

// payment model
const OrderSchema = new Schema({
    stripe_lineItems: Object,
    name: String,
    email: String,
    city: String,
    postalCode: String,
    streetAddress: String,
    country: String,
    paid: Boolean,
}, {
    timestamps: true,
});

export const Order = models?.Order || model('Order', OrderSchema);