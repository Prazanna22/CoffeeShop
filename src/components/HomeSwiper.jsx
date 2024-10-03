import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

export default ({ Product }) => {

  const navigate = useNavigate();
  return (
    <div className=" px-10 md:px-20 py-10 bg-[#ededed] my-10">
      <h1 className=' font-bold text-[#daa859] text-3xl  my-10'>Best Seller</h1>
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          breakpoints={ {
            640:{slidesPerView:2},
            768:{slidesPerView:2},
            1024:{slidesPerView:3},
          }}
          spaceBetween={45}
          
          grabCursor
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
           className="custom-swiper"
      >
        {Product.map(product => (
          <SwiperSlide key={product.id}>
           <div className=" mb-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
           <div className="flex items-center bg-[#ffffff] justify-between p-5 w-full gap-3 rounded-lg">
              <div className="w-1/3 ">
                <img src={product.image} alt="" className='w-20 lg:w-28  ' />
              </div>
              <div className='w-2/3'>
                <img src={product.veg} alt="veg status" className='w-6 h-6' />
                <h1 className='font-semibold text-lg truncate my-2'>{product.name}</h1>
                <div className='flex justify-between  mt-5'>
                  <p className='font-medium text-md '>₹{product.price}</p>
                  <button className='py-1 px-2 md:px-4 text-sm font-semibold text-white bg-[#b2cd67] rounded-full' onClick={()=>{navigate("/menu")}}>View Item</button>
                </div>
              </div>
            </div>
           </div>

          </SwiperSlide>
        ))}

      </Swiper>
      </div>
  
  );
};