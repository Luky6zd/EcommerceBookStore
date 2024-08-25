import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

// save products to local storage
export function CartContextProvider({children}) {
    const locStorage = typeof window !== "undefined" ? window.localStorage : null;
    //const defaultBooks = locStorage ? JSON.parse(locStorage.getItem('cart')) : [];
    const [cartBooks, setCartBooks] = useState([]);

    useEffect(() => {
        if (cartBooks?.length > 0) {
            locStorage?.setItem('cart', JSON.stringify(cartBooks));
        }
    }, [cartBooks]);

    useEffect(() => {
        if (locStorage && locStorage.getItem('cart')) {
            setCartBooks(JSON.parse(locStorage.getItem('cart')));
        }
    }, []);

    function addBook(bookId) {
        setCartBooks(prev => [...prev, bookId]);
    }

    function removeBook(bookId) {
        setCartBooks(prev => {
            const positionId = prev.indexOf(bookId);

            if (positionId !== -1) {
                return prev.filter((value, index) => index !== positionId);
            }
            return prev;
        });
    }

    function clearCart() {
        setCartBooks([]);
    }

    return (
        <CartContext.Provider value={{cartBooks, setCartBooks, addBook, removeBook, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}
