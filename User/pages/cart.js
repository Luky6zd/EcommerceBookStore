import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Input from "@/components/Input";
import Center from "@/components/Center";
import Table from "@/components/Table";

const ColumnsWrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 @media screen and (min-width: 768px) {
  grid-template-columns: 1.3fr 0.7fr;
 }
 gap: 40px;
 margin-top: 40px;
`;

const Box = styled.div`
 background-color: #fff;
 border-radius: 10px;
 padding: 30px;
`;

const BookInfoCell = styled.td`
 padding: 10px 0;
`;

const BookImageBox = styled.div`
 width: 70px;
 height: 90px;
 padding: 2px;
 border: 1px solid rgba(0, 0, 0, 0.1);
 border-radius: 10px;
 display: flex;
 align-items: center;
 justify-content: center;
 img {
  maw-width: 60px;
  max-height: 60px;
 }
 @media screen and (min-width: 768px) {
 width: 100px;
 height: 100px;
  padding: 10px;
  img {
  max-width: 80px;
  max-height: 80px;
  }
 }
`;

const QuantityLabel = styled.span`
 display: block;
 padding: 0 15px;
 @media screen and (min-width: 768px) {
  display: inline-block;
  padding: 0 10px;
 }
`;

const CityHolder = styled.div`
 display: flex;
 gap: 5px;
`;

// display cart
export default function CartPage() {
    const {cartBooks, addBook, removeBook, clearCart} = useContext(CartContext);
    const [books, setBooks] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [country, setCountry] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (cartBooks.length > 0) {
            axios.post('/api/cart', {ids: cartBooks})
            .then(response => {
                setBooks(response.data);
            })
        } else {
            setBooks([]);
        }
    }, [cartBooks]);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        if (window?.location.href.includes('success')) {
            setIsSuccess(true);
            clearCart();
        }
    }, []);

    function moreOfThisBook(id) {
        addBook(id);
    }

    function lessOfThisBook(id) {
        removeBook(id);
    }

    async function goToPayment() {
        const response = await axios.post('/api/checkout', {
            name, email, city, postalCode, streetAddress, country, cartBooks,
        });

        if (response.data.url) {
            window.location = response.data.url;
        }
    }

    let totalPrice = 0;
    
    for (const bookId of cartBooks) {
        const price = books.find(prod => prod._id === bookId)?.price || 0;
        totalPrice += price;
    }

    if (isSuccess) {

        return (
            <>
              <Header />
              <Center>
                <ColumnsWrapper>
                    <Box>
                        <h1>Successfull payment!</h1>
                        <h2>Thank you for your order!</h2>
                        <p>We will send you email for order details.</p>
                    </Box>
                </ColumnsWrapper>
              </Center>
            </>
        );
    }

    return (
        <>
        <Header />
            <Center>
                <ColumnsWrapper>
                    <Box>
                     <h2>Cart</h2>
                        {!cartBooks?.length && (
                            <div>Your cart is empty!</div>
                        )}

                        {books?.length > 0 && (
                        <Table>
                            <thead>
                                <tr>
                                    <th>Book</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map(book => (
                                    <tr>
                                        <BookInfoCell>
                                            <BookImageBox>
                                            <img src={book.images[0]} alt="" />
                                            </BookImageBox>
                                           
                                            {book.title}
                                        </BookInfoCell>
                                        <td>
                                            <Button onClick={() => moreOfThisBook(book._id)}>
                                                +
                                            </Button>
                                            <QuantityLabel>
                                            {cartBooks.filter(id => id === book._id).length}
                                            </QuantityLabel>
                                            
                                            <Button onClick={() => lessOfThisBook(book._id)}>
                                                -
                                            </Button>
                                        </td>

                                        <td>
                                            ${cartBooks.filter(id => id === book._id).length * book.price}
                                        </td>
                                    </tr>
                                ))}

                              <tr>
                                <td></td>
                                <td></td>
                                <td>${totalPrice}</td>
                              </tr>
                            </tbody>
                        </Table>
                    )} 
                        
                    </Box>
                    {!!cartBooks?.length && (
                        <Box>
                        <h2>Order information</h2>
                       
                        <Input type="text" 
                               placeholder="Name" 
                               value={name}
                               name="name" 
                               onChange={ev => setName(ev.target.value)} />
                        <Input type="text" 
                               placeholder="Email" 
                               value={email} 
                               name="email"
                               onChange={ev => setEmail(ev.target.value)}/>

                        <CityHolder>
                        <Input type="text" 
                               placeholder="City" 
                               value={city}
                               name="city" 
                               onChange={ev => setCity(ev.target.value)}/>
                        <Input type="text" 
                               placeholder="Postal Code" 
                               value={postalCode}
                               name="postalCode" 
                               onChange={ev => setPostalCode(ev.target.value)}/>
                        </CityHolder>
                        
                        <Input type="text" 
                               placeholder="Street Address" 
                               value={streetAddress}
                               name="streetAddress" 
                               onChange={ev => setStreetAddress(ev.target.value)}/>
                        <Input type="text" 
                               placeholder="Country" 
                               value={country}
                               name="country" 
                               onChange={ev => setCountry(ev.target.value)}/>

                        <Button onClick={goToPayment} 
                                black 
                                block>
                                    Continue to Payment
                        </Button>
                    </Box>
                    )}
                </ColumnsWrapper>
            </Center>
        </>
    );
}