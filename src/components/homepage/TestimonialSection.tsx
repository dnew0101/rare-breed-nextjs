"use client"
import React, {useState, useEffect} from 'react';
import fetchTestimonials from '../../backend/api/fetchTestimonials';
import Testimonial from './subcomponents/Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
// import client from '@/utils/contentful';
import { FaChevronLeft, FaChevronRight, FaSpaghettiMonsterFlying } from 'react-icons/fa6';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<{ clientName: string; testimonial: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    getTestimonials();
  }, []);

  // if (loading) {
  //   return (
  //     <section className="testimonial-section flex flex-col items-center">
  //       <Skeleton className='h-[100vh] w-[100vw]' />
  //     </section>
  //   );
  // }

  return (
    <section className="testimonial-section flex flex-col justify-evenly 
    h-[80vh] min-h-[650px] w-[80%] justify-self-center ">
        <h1 className="flex text-6xl sm:text-7xl font-thin text-neutral-100
        drop-shadow-lg mb-14 justify-center"
        style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Reviews
        </h1>
        <div className='content-container flex flex-col items-center justify-center gap-8'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[EffectCoverflow, Navigation, Pagination]}
            effect="coverflow"
            className='w-full relative shadow-none pt-4 pb-4'
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            coverflowEffect={{
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}
              className='flex flex-col shadow-none justify-center mt-2 mb-2'>
            <Testimonial testimonial={testimonial.testimonial} clientName={testimonial.clientName} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='relative flex justify-between w-[50%] z-10 h-10 self-center
          lg:w-[70%]'>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
    </section>
  );
};

export default TestimonialSection;