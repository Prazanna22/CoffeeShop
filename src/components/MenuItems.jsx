import React, { useState } from 'react';
import { Product } from '../Products/Product';
import { Order } from './Order';

export const MenuItems = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
  
    const filteredProducts = selectedCategory === 'all'
        ? Product
        : Product.filter(product => product.slug === selectedCategory);
    
    return (
      <div className=" ">
          <div className=" bg-[#daa859] px-20 py-7 text-white">
             <ul className='flex items-center justify-center  cursor-pointer font-medium text-sm md:text-[16px]'>
             <li onClick={() => handleCategoryChange('all')} className='mx-3 md:mx-9' >All</li>
             <li >|</li>
              <li onClick={() => handleCategoryChange('BestSeller')} className='mx-3 md:mx-9'>Bestseller</li>
              <li >|</li>
              <li onClick={() => handleCategoryChange('Drink')} className='mx-3 md:mx-9'>Drinks</li>
              <li >|</li>
              <li onClick={() => handleCategoryChange('Food')} className='mx-3 md:mx-9'>Food</li>
              <li >|</li>
              <li onClick={() => handleCategoryChange('ReadyToEat')}className='mx-3 md:mx-9'>Ready to Eat</li>
             </ul>
          </div>
          
          <Order Product={filteredProducts} />
      </div>
    );
}