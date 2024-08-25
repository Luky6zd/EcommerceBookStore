import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "@/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    display: block;
    max-width: 100%;
    max-height: 200px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    img {
     max-width: 100%;
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({book}) {
    const {addBook} = useContext(CartContext);

    function addFeaturedToCart() {
        addBook(book._id);
    }

    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{book.title}</Title>
                            <Desc>{book.description}</Desc>

                            <ButtonsWrapper>
                                <ButtonLink href={'/product/'+ book._id} outline={1} white={1}>Read more</ButtonLink>
                                <Button white onClick={addFeaturedToCart}>
                                    <CartIcon />
                                    Add to cart
                                </Button>
                            </ButtonsWrapper> 
                        </div>
                    </Column>

                    <Column>
                        <img src="C:\Users\User\Desktop\ecommerce-user\mali_princ.jpg" alt=""></img>
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}