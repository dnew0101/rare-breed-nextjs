import { useEffect, useRef } from 'react';
import { Image } from '@nextui-org/react';

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
  reverse?: boolean; // reverse carousel direction
}

const Carousel: React.FC<CarouselProps> = ({ items, reverse = false }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalWidth = carousel.scrollWidth / 2; // Adjust for duplicated items
    const animationDuration = totalWidth / 50; // Adjust speed here

    carousel.style.animationDuration = `${animationDuration}s`;

    return () => {
      carousel.style.animationDuration = '';
    };
  }, [items, reverse]);

  return (
    <div className="overflow-hidden h-[95vh] relative" style={{ whiteSpace: 'nowrap' }}>
      <div
        ref={carouselRef}
        className={`flex h-full ${reverse ? 'reverse-scroll' : 'normal-scroll'}`}
        style={{ width: `${items.length * 1000}px` }}
      >
        {items.concat(items).map((photo, index) => (
          <Image
            key={`${photo.sys.id}-${index}`}
            src={photo.url}
            alt={`Photo ${index + 1}`}
            className="object-cover h-full"
            style={{ flex: '0 0 auto', borderRadius: '0', width: `${1000 * items.length}px` }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes normalScroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes reverseScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .flex {
          display: inline-flex;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .normal-scroll {
          animation-name: normalScroll;
        }
        .reverse-scroll {
          animation-name: reverseScroll;
        }
      `}</style>
    </div>
  );
};

export default Carousel;