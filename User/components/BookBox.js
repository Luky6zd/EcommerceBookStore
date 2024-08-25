import CartIcon from "@/icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import Button from "./Button";

const BookWrapper = styled.div``;

const WhiteBox = styled(Link)`
 background-color: #fff;
 padding: 20px;
 height: 120px;
 text-align: center;
 align-items: center;
 justify-content: center;
 display: flex;
 border-radius: 10px;
 img {
  max-width: 100%;
  max-height: 80px;
 }
`;

const Title = styled(Link)`
 font-weight: normal;
 font-size: 0.9rem;
 margin: 0;
 color: inherit;
 text-decoration: none;
`;

const BookInfoBox = styled.div`
 margin-top: 5px;
`;

const PriceRow = styled.div`
 display: block;
 @media screen and (min-width: 768px) {
    display: flex;
    gap: 10px;
}
 align-items: center;
 justify-content: space-between;
 margin-top: 5px;
`;

const Price = styled.div`
 font-size: 1rem;
 font-weight: 500;
 text-align: right;
 @media screen and (min-width: 768px) {
 font-size: 1.2rem;
 font-weight: 500;
 text-align: left;
 }
`;

export default function BookBox({_id, title, description, price, images}) {
    const {addBook} = useContext(CartContext);
    const url = '/book/'+ _id;

    return (
        <BookWrapper>
            <WhiteBox href={url}>
                <div>
                    <img src={images?.[0]} alt="" />
                </div>
            </WhiteBox>

            <BookInfoBox>
                <Title href={url}>{title}</Title>
                
                <PriceRow>
                    <Price>
                        ${price}
                    </Price>

                    <Button block onClick={() => addBook(_id)} primary outline>
                        Add to cart
                    </Button>

                </PriceRow>
            </BookInfoBox>
        </BookWrapper> 
    );
}