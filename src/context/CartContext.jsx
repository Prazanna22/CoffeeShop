import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
   
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    
    const addToCart = (product) => {
        setCart(prevCart => {
            const existProduct = prevCart.find(item => item.id === product.id);

            if (existProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    
    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(product => product.id !== id));
    };

  
    const increase = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

   
    const decrease = (id) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            
            return updatedCart.filter(item => item.quantity > 0);
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increase, decrease }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    return useContext(CartContext);
};
