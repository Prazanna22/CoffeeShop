import React from 'react'
import HomeSwiper from './HomeSwiper'
import { Product } from '../Products/Product'
import { useState } from 'react';
import kk from '../assets/other/kk.jpg'
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import { ListItems } from './ListItems';


export const Home = () => {

  const [best, setBest] = useState("BestSeller");

  const filter = best === "BestSeller" ? Product.filter(product => product.isBestSeller) : Product;

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#daa859] px-20 py-7">
        <h1 className='font-semibold text-white text-xl'>Durzan Coffee</h1>
      </div>
    
      <div className=" my-10 ">
        <div className="grid grid-cols-1 md:flex justify-center gap-10 px-10 md:px-20">
          <div className="  md:w-1/3 flex justify-center ">
            <img src={kk} alt="" className='w-96  rounded-b-full' />
          </div>
          <div className=" md:w-2/3">
            <h1 className=' text-4xl lg:text-[55px] leading-[1.5] font-bold my-10 '>"<span className='text-[#b2cd67] uppercase'>coffee</span> is a language in itself."</h1>
            <p className='text-sm leading-[1.5] md:text-lg text-justify  font-normal my-10 md:leading-[3]'>"At Durzan, "Indulge in the comforting warmth of each cup, where every sip tells a story. From the rich aroma that awakens your senses to the perfect blend of flavors, coffee is more than just a drink – it’s a daily ritual, a moment of pause, and a celebration of simple joys. Whether you're seeking a quiet morning reflection or an afternoon pick-me-up, let your cup be the companion that fuels your passion and sparks your creativity."</p>
            <button className='px-5 py-2 bg-[#daa859] text-white rounded-full ' onClick={() => { navigate('/promotion') }}>Know More</button>
          </div>

        </div>
      </div>
      <HomeSwiper Product={filter} />
      <ListItems />
      <Footer />
    </>
  )
}
