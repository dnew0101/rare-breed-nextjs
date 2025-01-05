import React from 'react';
import { Card, CardHeader, CardBody, Avatar } from '@nextui-org/react';

interface TestimonialProps {
  testimonial: string;
  clientName: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial, clientName }) => {
    return (
    <Card className="w-full justify-self-center bg-black bg-opacity-60 opacity-90 border-2 border-neutral-900
    sm:w-[70%] 
    md:w-[60%] 
    lg:w-full 
    xl:w-full">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <p className="text-small font-semibold leading-none text-default-600">{clientName}</p>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 pb-4 text-small text-default-400">
        <p className="font-extralight text-default-600">&quot;{testimonial}&quot;</p>
      </CardBody>
    </Card>
    );
};

export default Testimonial;