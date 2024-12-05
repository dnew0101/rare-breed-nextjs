"use client"
import React, { useEffect, useState } from 'react';
import fetchTestimonials from '../../backend/api/fetchTestimonials';
import Testimonial from './subcomponents/Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Skeleton } from '@nextui-org/react';


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

  if (loading) {
    return (
      <section className="testimonial-section bg-neutral-950 flex flex-col items-center">
        <Skeleton className='h-[100vh] w-[100vw]' />
      </section>
    );
  }

  return (
    <section className="testimonial-section bg-neutral-950 flex flex-col items-center p-8 h-[80vh] mt-6">
      <h1 className="text-6xl sm:text-7xl font-bold text-neutral-100 drop-shadow-lg mb-14">Reviews</h1>
      <Swiper
        effect= { 'coverflow' }
        grabCursor= { true }
        centeredSlides= { true }
        loop= { true }
        coverflowEffect= { 
          { 
            rotate: 0, 
            stretch: 0, 
            depth: 100, 
            modifier: 4,
            slideShadows: false,
          } 
        }
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="swiper-slide-container"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <Testimonial
              testimonial={testimonial.testimonial}
              clientName={testimonial.clientName}
              visible={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;