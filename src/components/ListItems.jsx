import React from 'react'
import food from '../assets/all/Food.jpg'
import java from '../assets/all/java.jpg'
import readytoeat from '../assets/all/ReadyToEat.jpg'
import drinks from '../assets/all/Drinks.jpg'
import { useNavigate } from 'react-router-dom'
export const ListItems = () => {
    const navigate = useNavigate();


    return (
        <>
            <div className="px-10 md:px-20 lg:py-10">
                <h1 className='font-bold text-[#a7782b]  md:text-3xl mb-5 text-lg  my-10 text-center md:text-left'>Handcrafted Curations</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <img src={java} alt="" className='w-24 md:w-32 my-5 rounded-full ' onClick={() => { navigate('/menu') }} />
                        <h1 className='text-black font-medium'>BestSeller</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={food} alt="" className='w-24 md:w-32 my-5 rounded-full' onClick={() => { navigate('/menu') }} />
                        <h1 className='text-black font-medium'>Food</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={drinks} alt="" className='w-24 md:w-32 my-5 rounded-full' onClick={() => { navigate('/menu') }} />
                        <h1 className='text-black font-medium'>Drinks</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={readytoeat} alt="" className='w-24 md:w-32my-5 rounded-full' onClick={() => { navigate('/menu') }} />
                        <h1 className='text-black font-medium'>ReadyToEat</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
