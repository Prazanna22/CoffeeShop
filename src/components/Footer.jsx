import React from 'react'
import logo3 from '../assets/other/logo3.png'
export const Footer = () => {
    return (
        <>
            {/* career */}
            <div className=" px-10 md:px-20 bg-[#ebebeb] mt-10 text-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-sm font-normal text-center sm:text-left">
                    <div className="flex justify-center md:block "><img src={logo3} alt="" className='w-40 my-3' /></div>
                    <div className="py-5 ">
                        <p className='my-5 cursor-pointer text-lg font-bold '>About US</p>
                        <p className='my-5 cursor-pointer'>Our Heritage</p>
                        <p className='my-5 cursor-pointer'>Coffeehouse</p>
                        <p className='my-5 cursor-pointer'>Our Company</p>
                    </div>
                    <div className="py-5">
                        <h2 className='my-5 cursor-pointer text-lg font-bold '>Responsibility</h2>
                        <p className='my-5 cursor-pointer'>Diversity</p>
                        <p className='my-5 cursor-pointer'>Community</p>
                        <p className='my-5 cursor-pointer'>Ethical Sourcing</p>
                        <p className='my-5 cursor-pointer'>Environmental Stewardship</p>
                        <p className='my-5 cursor-pointer'>Learn More</p>
                    </div>
                    <div className="py-5">
                        <h2 className='my-5 cursor-pointer text-lg font-bold '>Quick Links</h2>
                        <p className='my-5 cursor-pointer'>FAQs</p>
                        <p className='my-5 cursor-pointer'>Terms and Conditions</p>
                        <p className='my-5 cursor-pointer'>Starbucks India Mobile App Terms of Use </p>
                        <p className='my-5 cursor-pointer'>Customer Service</p>
                        <p className='my-5 cursor-pointer'>Starbucks Rewards Day Offer</p>
                        <p className='my-5 cursor-pointer'>Delivery</p>
                        <p className='my-5 cursor-pointer'>Season's Gifting</p>
                        <p className='my-5 cursor-pointer'>Offer for Beverage Subscription at Starbucks.</p>
                        <p className='my-5 cursor-pointer'>Beverage Subscription</p>

                    </div>
                </div>
                <div className="bg-black p-[0.5px]"></div>
                <div className="flex justify-center  flex-col md:flex-row md:justify-between mt-5 ">
                    <div className=" flex cursor-pointer justify-center">
                        <p className='mx-1 lg:mx-5 text-xs'>Web Accessiblity</p>
                        <p className='mx-1  lg:mx-5 text-xs'>|</p>
                        <p className='mx-1 lg:mx-5 text-xs'>Privacy Statement</p>
                        <p className='mx-1 lg:mx-5 text-xs'>|</p>
                        <p className='mx-1 lg:mx-5 text-xs'>Terms of Use</p>
                        <p className='mx-1 lg:mx-5 text-xs'>|</p>
                        <p className='mx-1  lg:mx-5 text-xs'>Contact Us</p>
                    </div>
                    <div className='mx-3 md:mx-5 text-xs py-5 md:my-0 flex cursor-pointer justify-center'><p>© 2024 Starbucks Coffee Company. All rights reserved.</p></div>
                </div>
            </div>
        </>
    )
}
