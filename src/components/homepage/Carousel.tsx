import { ChevronLeft, ChevronRight } from 'react-feather';
import { useState, useEffect } from 'react';
import { div } from 'framer-motion/client';

interface Photo {
    sys: {
      id: string;
    };
    url: string;
    title: string | null;
    description: string | null;
}

interface CarouselProps {
    items: Photo[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
    items,
    autoSlide = false,
    autoSlideInterval = 3000,
}) => {
    const [currentPhoto, setCurrentPhoto] = useState(0);

    // Function to go to the previous photo
    const prev = () => 
        setCurrentPhoto((currentPhoto) => (currentPhoto === 0 ? items.length - 1 : currentPhoto - 1));
    
    // Function to go to the next photo
    const next = () => 
        setCurrentPhoto((currentPhoto) => (currentPhoto === items.length - 1 ? 0 : currentPhoto + 1));

    useEffect(() => {
        if (!autoSlide) return
        const itemsInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(itemsInterval);
}, [])
    return (
        <div className="overflow-hidden relative">

            {/* Photo container */}
            <div className="flex transition-transform ease-in-out duration-3000" style={{ transform: `translateX(-${currentPhoto * 100}%)` }}>
                {items.map((photo, index) => (
                    <img key={photo.sys.id} src={photo.url} alt={`Photo ${index + 1}`} />
                ))}
            </div>

            {/* Navigation System */}
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight size={40} />
                </button>
            </div>

            {/* Pagination */}
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {items.map((_, i) => (
                        <div
                            key={i} 
                            className= {`
                            transtion-all w-3 h-3 bg-white rounded-full
                            ${currentPhoto === i ? "p-2" : "bg-opacity-50"}`
                        } />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;