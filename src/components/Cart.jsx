import React from 'react';
import { useCart } from '../context/CartContext';

export const Cart = () => {
    const { cart, removeFromCart, increase, decrease } = useCart();

    
    const totalPrice = cart.reduce((acc, item) => {
      
        const price = parseFloat(item.price);
        const quantity = item.quantity; 
        console.log(`Price: ${price}, Quantity: ${quantity}`); 
        return acc + (price * quantity);
    }, 0);

    return (
        <div className="max-h-screenh-96">
            <div className="px-10 md:px-20 py-10 ">
                <h1 className="text-2xl font-semibold mb-5">Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div>
                        {cart.map(item => (
                            <div key={item.id} className="flex justify-between  items-center  rounded-xl mb-4 bg-[#f9f9f9] flex-col sm:flex-row">
                                <div className="flex md:items-center gap-5 p-5">
                                    <img src={item.image} alt={item.name} className="w-16" />
                                    <div className="md:ml-4">
                                        <h2 className="text-sm md:text-lg font-semibold">{item.name}</h2>
                                        <p className="text-sm font-normal my-1">Price : ₹{item.price}</p>
                                        <p className="text-sm my-1">Quantity : {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 p-5  ">
                                    <button onClick={() => increase(item.id)} className='font-bold text-2xl mx-1 '>+</button>
                                    <button onClick={() => decrease(item.id)} className='font-bold text-2xl mx-1'>-</button>
                                    <button onClick={() => removeFromCart(item.id)} className='font-bold text-xl  text-red-600 ml-6'>X</button>
                                </div>
                            </div>
                        ))}

                        
                        <div className=" flex justify-between items-center text-right mt-5 sticky bottom-0 py-5 bg-white">
                            <h2 className="text-md md:text-lg font-semibold">Total: ₹{totalPrice.toFixed(2)}</h2>
                            <button className='px-6 py-1 bg-[#b2cd67] text-white rounded-full'>Order</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
