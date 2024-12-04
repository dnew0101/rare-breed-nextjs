import React from 'react';
import { Card, CardHeader, CardBody, Avatar } from '@nextui-org/react';

interface TestimonialProps {
  testimonial: string;
  clientName: string;
  visible: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial, clientName }) => {
    return (
        <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{clientName}</h4>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 pb-4 text-small text-default-400">
        <p className='font-extralight'>"{testimonial}"</p>
      </CardBody>
    </Card>
    );
};

export default Testimonial;