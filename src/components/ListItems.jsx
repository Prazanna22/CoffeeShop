import React from 'react'
import food from '../assets/all/Food.jpg'
import bestseller from '../assets/all/BestSeller.jpg'
import readytoeat from '../assets/all/ReadyToEat.jpg'
import drinks from '../assets/all/Drinks.jpg'
import { useNavigate } from 'react-router-dom'
export const ListItems = () => {
    const navigate = useNavigate();


    return (
        <>
            <div className="px-10 md:px-20">
                <h1 className='font-bold text-[#a7782b] text-3xl text-center my-10'>Handcrafted Curations</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <img src={bestseller} alt="" className='w-32 my-5 rounded-full ' onClick={() => { navigate('/menu') }} />
                        <h1 className='text-black font-medium'>BestSeller</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={food} alt="" className='w-32 my-5 rounded-full' onClick={() => { navigate('/menu') }} />
                        <h1 className='text-black font-medium'>Food</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={drinks} alt="" className='w-32 my-5 rounded-full' onClick={() => { navigate('/menu') }} />
                        <h1 className='text-black font-medium'>Drinks</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={readytoeat} alt="" className='w-32 my-5 rounded-full' onClick={() => { navigate('/menu') }} />
                        <h1 className='text-black font-medium'>ReadyToEat</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
