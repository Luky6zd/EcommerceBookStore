import mongoose, { model, Schema, models } from "mongoose";

// book model
const BookSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    price: {type: Number, required: true},
    images: [{type: String}],
    category: {type: mongoose.Types.ObjectId, ref:'Category'},
    properties: {type: Object},
}, {
    timestamps: true,
});

export const Book = models.Book || model('Book', BookSchema);