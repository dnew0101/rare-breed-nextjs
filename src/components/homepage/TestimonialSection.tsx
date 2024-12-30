"use client"
import React, { useEffect, useState, useRef } from 'react';
import fetchTestimonials from '../../backend/api/fetchTestimonials';
import Testimonial from './subcomponents/Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { FaChevronLeft, FaChevronRight, FaSpaghettiMonsterFlying } from 'react-icons/fa6';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Skeleton, Card, CardBody } from '@nextui-org/react';


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
      <section className="testimonial-section flex flex-col items-center">
        <Skeleton className='h-[100vh] w-[100vw]' />
      </section>
    );
  }

  return (
    <section className="testimonial-section flex flex-col justify-center 
    h-[80vh] min-h-[650px] mt-6 w-[80%] justify-self-center">
      <h1 className="flex text-6xl sm:text-7xl font-bold text-neutral-100
       drop-shadow-lg mb-14 justify-center">
        Reviews
      </h1>
      
    </section>
  );
};

export default TestimonialSection;