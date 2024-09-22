// components/DesignCard.tsx
import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, Image, Button, Divider, Chip, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';

interface DesignCardProps {
  image: string;
  designName: string;
  artistName: string;
  price: string;
  size: string;
  notes?: string;
}

const DesignCard: React.FC<DesignCardProps> = ({ image, designName, artistName, price, size, notes }) => {

  return (
    <Card className='p-4'>
      <CardHeader className="flex pb-0 pt-2 px-4 flex-col text-center self-center sm:h-16">
        <h4 className="font-medium text-large">"{designName}"</h4>
        <h3 className="font-extralight text-default-400">by {artistName}</h3>
      </CardHeader>
      <CardBody className='flex'>
          <div className='flex image-container w-full h-full overflow-hidden justify-center items-center'>
            <Image 
              src={image} 
              alt={designName} 
              className='w-[250px] h-[250px]'/>
          </div>
      </CardBody>
      <CardFooter className='flex flex-col'>
        <div className='flex justify-around w-[90%]'>
          <Chip color="success" variant="faded">${price}</Chip>
          <Chip color="success" variant="faded">{size}</Chip>
        </div>
        {notes ? (
          <Popover 
          showArrow
          backdrop="opaque"
          placement="top"
          classNames={{
            base: [  
              // arrow color
              "before:bg-default-200"
            ],
            content: [
              "py-3 px-4 border border-default-200",
              "bg-gradient-to-br from-white to-default-300",
              "dark:from-default-100 dark:to-default-50",
            ],
          }}
        >
            <PopoverTrigger>
              <Button radius="full" className='mt-4 font-thin text-default-600'>
                Read {artistName}'s notes
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <small className="text-xs text-default-500">
                "{notes}"
              </small>
            </PopoverContent>
          </Popover>
        ) : (
          <div className='text-center text-xs text-default-300 font-light mt-7 mb-3'>
            No notes available.
          </div>
        )}


      <Divider orientation='horizontal' className='mt-4'/>

      </CardFooter>
      <Button radius="full" className='max-w-[60%] self-center font-light p-4 m-1'>Contact Now</Button>
    </Card> 
  );
};

export default DesignCard;