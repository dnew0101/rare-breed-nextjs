import React from 'react'
import { Card, CardHeader, CardFooter, Button } from '@nextui-org/react';
import Image from 'next/image';

type HeroCardsProps = {
    className?: string;
    title: string;
    backgroundImage: string;
    backgroundAlt: string;
    buttonText: string;
    route: string;
}

export const HeroCards = ({ className, title, buttonText, route }: HeroCardsProps) => {
  return (
    <Card className={`w-[80vw] h-[35vh] opacity-70 bg-black
        hover:opacity-75 hover:scale-105 hover:text-white transition-transform duration-400
        sm:w-[38vw] sm:h-[43vh] 
        lg:w-[27vw] 
        xl:w-[25vw] 
        ${className}`}>
        <CardHeader className='mt-1 pb-1'>
            <h1 className='text-2xl sm:text-4xl font-extralight text-center' style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {title}
            </h1>
        </CardHeader>

        {/* <Image 
                src={backgroundImage} 
                alt={backgroundAlt} 
            /> */}

        <CardFooter className='flex justify-center h-full'>
            <Button
                className="bg-background w-[70%] rounded-lg pt-6 pb-6 pl-2 pr-2 mb-1 text-medium
                    sm:self-end
                    md:rounded-full"
                variant='ghost'>
                    <a href={route}>
                        {buttonText}
                    </a>
            </Button>
      </CardFooter>
    </Card>
    )
}
