import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Photo {
  sys: { id: string };
  url: string;
}

interface CarouselProps {
  items: Photo[];
}

const CardCarousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="relative h-full m-0">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {items.map((photo) => (
          <SwiperSlide key={photo.sys.id}>
            <div className="carousel-item relative w-auto h-[500px]">
              <Image
                src={photo.url}
                alt={`Photo ${photo.sys.id}`}
                width={500}
                height={500}
                className='object-cover'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;