import React from 'react'
import HomeSwiper from './HomeSwiper'
import { Product } from '../Products/Product'
import { useState } from 'react';
import kk from '../assets/other/kk.jpg'
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import { ListItems } from './ListItems';
import learnmore from '../assets/other/learnmore.jpg'

export const Home = () => {

  const [best, setBest] = useState("BestSeller");

  const filter = best === "BestSeller" ? Product.filter(product => product.isBestSeller) : Product;

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#daa859] px-10 md:px-20 py-7">
        <h1 className='lg:font-bold text-xl font-semibold text-white lg:text-3xl'>Durzan Coffee</h1>
      </div>

      <div className="discover">
        <div className='px-10 md:px-20 py-10 text-[29px] text-center sm:text-[64px] md:text-[64px] lg:text-[96px] xl:text-[135px]'>
          <h1>discover the real</h1>
        </div>
      </div>
      <HomeSwiper Product={filter} />
      <div className="  py-20 ">
        <div className="grid grid-cols-1 md:flex justify-center gap-10 px-10 md:px-20">
          <div className="  md:w-1/3 flex justify-center ">
            <img src={kk} alt="" className='w-96  rounded-t-full md:rounded-t-none md:rounded-b-full' />
          </div>
          <div className=" md:w-2/3 ">
            <h1 className='lg:text-3xl leading-[1.5] font-bold text-[#a7782b] text-3xl  my-3  '>Our Story</h1>
            <p className=' text-sm leading-[2] lg:text-lg text-justify  font-normal my-5 lg:leading-[2.5]'>Since 1987, we have been serving our customers with a simple motto: <br /><span className='lg:text-3xl font-bold text-[#b2cd67] text-xl'>"You deserve more than the average café." </span> <br />Whether you're enjoying breakfast or happy hour, we always guarantee a cozy and friendly ambiance, excellent customer service, quality food, and beverages all day. We encourage breakfast for dinner and mimosas all weekend long.
              We've quickly become a local favorite with our fantastic coffee, juices, smoothies, salads, sandwiches, pasta, wine, beers, and more! We are open seven days a week and have become the it place for your weekend brunch. We focus on finding gourmet ingredients, carefully curated and fresh. These ingredients make every item on our menu taste fresh and flavorful.  </p>
            <button className='px-5 py-2 bg-[#daa859] text-white rounded-full ' onClick={() => { navigate('/promotion') }}>Know More</button>
          </div>

        </div>
      </div>
      <ListItems />
      <Footer />
    </>
  )
}
