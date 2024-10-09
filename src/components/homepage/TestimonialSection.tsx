"use client"
import React, { useEffect, useState } from 'react';
import fetchTestimonials from '../../backend/api/fetchTestimonials';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<{ clientName: string; testimonial: string }[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    getTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setVisible(true);
      }, 1000); // Hide for 1 second
    }, 8000); // Show for 7 seconds + 1 second hide

    return () => clearInterval(interval);
  }, [testimonials]);

  if (testimonials.length === 0) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <section className="testimonial-section bg-neutral-900 flex flex-col items-center h-screen p-8">
        <h1 className="text-8xl sm:text-9xl font-bold text-neutral-100 drop-shadow-lg mt-16 mb-28">Testimonials</h1>
      <div
        className={`testimonial-card bg-neutral-100 justify-center w-[70vw] sm:max-w-[50%] p-8 rounded-lg shadow-lg transition-opacity duration-1000 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-lg text-center text-neutral-900 italic">&quot;{testimonials[currentTestimonial].testimonial}&quot;</p>
        <p className="text-sm text-center mt-4 text-neutral-800">- {testimonials[currentTestimonial].clientName}</p>
      </div>
    </section>
  );
};

export default TestimonialSection;