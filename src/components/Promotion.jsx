import React from 'react'
import promotion from '/assets/other/promotion.jpg'
export const Promotion = () => {
  return (
    <>
    <div className="">
        <img src={promotion} alt={promotion} />
        
        <div className="mx-10 md:mx-20 my-10">
        <h2 className='font-bold text-2xl'>Coffee Is At Our Heart</h2>
        <ul className='text-justify'>
            <li className='my-5 font-normal'>Coffee is at our heart, 
                inspiring our craft and driving innovation. 
                our espresso is made from the highest-quality top 3% Arabica beans, 
                which are the finest quality beans in the world.</li>
            <li className='my-5 font-normal'>Our coffee buyers taste more than 250,000 cups of coffee yearly and only 3% of the coffee 
                grown around the world is good enough to make it into a bag of our coffee.
            </li>
            <li className='my-5 font-normal'>
            We are proud to offer both single-origin coffees that reflect the uniqueness of their origins,
             as well as blends with distinct complexities, aromas and depth.
            </li>
            <li className='my-5 font-normal'>
            A heritage of roasting expertise also 
            allows us to craft a variety of roast intensities to match any taste. All this culminates in
             getting you your perfect cup of coffee - which we serve to you with all our heart.
            </li>
        </ul>
        </div>
       
    </div>
    

    </>
  )
}
