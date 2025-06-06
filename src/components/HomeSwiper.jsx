import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

export default ({ Product }) => {

  const navigate = useNavigate();
  return (<>
    
    <div className=" px-5 md:px-20  bg-[#ededed89] py-10  mb-10 lg:mb-20">
    <h1 className='font-bold text-[#a7782b] md:text-3xl mb-5 text-lg text-center md:text-left '>Recent Launches!</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={45}
        navigation
        grabCursor
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="custom-swiper"
      >
        {Product.map(product => (

          <SwiperSlide key={product.id}>
            <div className=" px-5 ">
              <div className=" mb-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="flex items-center flex-col md:flex-row  bg-[#ffffff] justify-between p-5 w-full gap-3 rounded-lg">
                  <div className=" w-full md:w-1/3 ">
                    <img src={product.image} alt="" className='w-30 md:w-20 lg:w-28  ' />
                  </div>
                  <div className='w-full md:w-2/3'>
                    <img src={product.veg} alt="veg status" className='w-6 h-6' />
                    <h1 className='font-medium text-md lg:text-md truncate my-2'>{product.name}</h1>
                    <div className='flex justify-between  mt-5'>
                      <p className='font-normal text-md '>₹{product.price}</p>
                      <button className='py-1 px-2 md:px-4 text-sm font-semibold text-white bg-[#a3c544] rounded-full' onClick={() => { navigate("/menu") }}>View Item</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        ))}

      </Swiper>
    </div>

  </>
  );
};