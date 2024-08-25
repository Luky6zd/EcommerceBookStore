import Header from "@/components/Header";
import styled from "styled-components";
import {mongooseConnect} from "@/lib/mongoose";
import { Book } from "@/models/Book";
import BooksGrid from "@/components/BooksGrid";
import Title from "@/components/Title";
import Center from "@/components/Center";


export default function BooksPage({books}) { //allBooks
    //console.log({allBooks});

    return (
        // react fragment
        <>
            <Header />
            <Center>
                <Title>All books</Title>
                <BooksGrid books={books} />
            </Center>
        </>
    );
}

export async function getServerSideProps() {
    await mongooseConnect();

    const books = await Book.find({}, null, {sort:{'_id': -1}});
    //console.log({books});

    // return all products
    return {
        props: {
            books: JSON.parse(JSON.stringify(books)),
        }};
}