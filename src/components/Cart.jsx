import React from 'react';
import { useCart } from '../context/CartContext';

export const Cart = () => {
    const { cart, removeFromCart, increase, decrease } = useCart();

    const totalPrice = cart.reduce((acc, item) => {
        const price = parseFloat(item.price);
        const quantity = item.quantity; 
        return acc + (price * quantity);
    }, 0);

    const message=(cart)=>{
        if(cart.length===0){
            alert(" Your Cart is Empty ");
            
            
        }
        else{
            alert(" Your Order is Placed ")
            
        }
        
    }
    return (
        <div className="flex flex-col min-h-screen px-10 md:px-20">
          
            <div className=" py-10 flex-grow overflow-y-auto">
                <h1 className="text-2xl font-semibold mb-5">Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div>
                        {cart.map(item => (
                            <div key={item.id} className="flex justify-between items-center rounded-xl mb-4 bg-[#f9f9f9] flex-col sm:flex-row">
                                <div className="flex md:items-center gap-5 p-5">
                                    <img src={item.image} alt={item.name} className="w-16" />
                                    <div className="md:ml-4">
                                        <h2 className="text-sm md:text-[15px] my-1 font-medium">{item.name}</h2>
                                        <div className="flex items-center">
                                            <label htmlFor="" className='text-sm'>Price : </label>
                                            <p className="text-sm font-semibold my-1 mx-1"> ₹ {item.price}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <label htmlFor="" className='text-sm'>Quantity : </label>
                                            <p className="text-sm font-semibold my-1 mx-1"> {item.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 p-5">
                                    <button onClick={() => increase(item.id)} className='font-medium text-3xl mx-3'>+</button>
                                    <button onClick={() => decrease(item.id)} className='font-medium text-3xl mx-3'>-</button>
                                    <button onClick={() => removeFromCart(item.id)} className='font-medium bg-[#d02626] px-4 rounded-full text-sm text-white ml-6'>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

           
            <div className="sticky bottom-0 w-full py-5 bg-white flex justify-between items-center border-t border-gray-300">
                <h2 className="text-md md:text-lg font-semibold">Total: ₹{totalPrice.toFixed(2)}</h2>
                <button className="px-6 py-1 bg-[#a3c544] text-white rounded-full" onClick={()=>message(cart)}>Order</button>
            </div>
        </div>
    );
};
