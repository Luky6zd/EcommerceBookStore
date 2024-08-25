import BookImages from "@/components/BookImages";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import CartIcon from "@/icons/CartIcon";
import { mongooseConnect } from "@/lib/mongoose";
import { Book } from "@/models/Book";
import { useContext } from "react";
import styled from "styled-components";

const ColWrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 @media screen and (min-width: 768px) {
  grid-template-columns: 0.8fr 1.2fr;
 }
 gap: 40px;
 margin: 40px 0;
`;

const PriceRow = styled.div`
 display: flex;
 gap: 20px;
 align-items: center;
`;

const Price = styled.span`
 font-size: 1.3rem;
`;

export default function BookPage({book}) {
    const {addBook} = useContext(CartContext);

    return (
        <>
            <Header />
            <Center>
                <ColWrapper>
                    <WhiteBox>
                        <BookImages images={book.images} />
                    </WhiteBox>

                    <div>
                        <Title>{book.title}</Title>
                        <p>{book.description}</p>

                        <PriceRow>
                            <div>
                                <Price>${book.price}</Price>
                            </div>

                            <div>
                                <Button primary onClick={() => addBook(book._id)}>
                                    <CartIcon />Add to cart
                                </Button>
                            </div>   
                        </PriceRow>  
                    </div>
                </ColWrapper>
            </Center>
        </>
    );
}

// get context
export async function getServerSideProps(context) {
    await mongooseConnect();

    //console.log({query: context.query});

    const {id} = context.query;
    const book = await Book.findById(id);

    // return object with props
    return {
        props: {
            book: book.JSON.parse(JSON.stringify(book)),
        }
    };
}