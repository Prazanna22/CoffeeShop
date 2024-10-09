import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';



export const Order = ({ Product,category }) => {
    const { addToCart } = useCart();
    const [addedItems, setAddedItems] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedItems(prev => ({ ...prev, [product.id]: true }));

    };
    const handleViewCart = () => {
        navigate('/cart');
    }

    const handleClickProduct = (product) => {
        setSelectedProduct(product);
        
    }

    const closeProduct = () => {
        setSelectedProduct(null);
    }


    return (
        <>
        <div className="px-10 lg:px-20 font-normal  text-sm text-left  py-10">{`Order > ${category}`}</div>
            <div className={`px-10  lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center bg-[#ffffff]  ${selectedProduct ? "blur-sm" : ""}`} >
                
                {Product.map(product => (
                    <div className="bg-[#f2f2f287] rounded-lg hover:bg-white hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] transition-all duration-300 ease-in-out"
                        key={product.id}  >
                            
                        <div className="flex p-5 h-full  flex-col" >
                            <div className=" flex ">
                                <div className="w-1/3">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        onClick={() => { handleClickProduct(product) }}
                                        className='w-20 h-20 md:w-28 md:h-28 object-cover cursor-pointer'

                                    />
                                </div>
                                <div className="mx-5 flex flex-col  w-2/3">

                                    <img src={product.veg} alt="veg status" className='w-6 h-6 mb-1' />
                                    <h1 className='font-semibold text-md truncate'>{product.name}</h1>
                                    <p className='font-normal text-xs my-2'>{product.kcal}</p>

                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-3">
                                <p className='font-semibold text-md'>₹{product.price}.00</p>
                                <button
                                    className='py-1 px-2 md:px-4 text-sm font-medium text-white bg-[#a3c544] rounded-full'
                                    onClick={() => addedItems[product.id] ? handleViewCart() : handleAddToCart(product)}
                                >
                                    {addedItems[product.id] ? 'View Item' : 'Add Item'}
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>


            {selectedProduct &&
                <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-10">
                    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg relative">
                        <button className="absolute top-4 right-4 text-2xl text-white md:text-black bg-black md:bg-transparent px-2  rounded-full" onClick={() => setSelectedProduct(null)}>&times;</button>
                        <div className="flex gap-10 flex-col md:flex-row p-5">
                            <div className=" w-full md:w-1/3">
                                <img src={selectedProduct.image} alt={selectedProduct.name} className='w-[400px]' />
                            </div>
                            <div className="w-full md:-2/3">
                                <img src={selectedProduct.veg} className='w-7' />
                                <h5 className='font-bold text-xl md:text-4xl my-3'>{selectedProduct.name}</h5>
                                <span className='font-normal text-sm md:text-sm '>{selectedProduct.kcal}</span>
                                <p className='font-normal text-sm md:text-md my-3'>{selectedProduct.discription}</p>
                                <div className="">
                                    <h6 className='font-semibold text-md md:text-xl my-5'>₹ {selectedProduct.price}.00 </h6>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
