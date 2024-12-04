"use client";

import { useEffect, useState } from 'react';
import fetchFaqs from '../../backend/api/fetchFaqs';
import { Accordion, AccordionItem, Tabs, Tab } from '@nextui-org/react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

interface Faq {
  questionTitle: string;
  tag: string;
  answer: { json: Document } | null;
}

const FaqSection: React.FC = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isVertical, setIsVertical] = useState<boolean>(false);

  //resize event listener; when on a "sm" device, isVertical is set to true
  //used to set Tabs to the vertical state; https://nextui.org/docs/components/tabs
  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //async function to fetch FAQs data from Contentful
  useEffect(() => {
    const getFaqs = async () => {
      try {
        const data = await fetchFaqs();
        setFaqs(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching FAQs');
        setLoading(false);
      }
    };

    getFaqs();
  }, []);

  

  if (loading) return <div>Loading FAQs...</div>;
  if (error) return <div>{error}</div>;

  //constructs array and sorts tags alphabetically; excludes "general" to keep it first
// tags are provided from Contentful; each tag corresponds to a group of FAQs
  let tags = Array.from(new Set(faqs.map(faq => faq.tag)));
  tags = tags.sort((a, b) => (a === 'General' ? -1 : b === 'General' ? 1 : 0));

  return (
    <section className="flex flex-col text-center items-center faq-section bg-neutral-900 text-neutral-100 p-8 mb-10">
      <h1 className="text-7xl font-bold mt-12 mb-16">
        <span className="block sm:hidden">FAQs</span>
        <span className="hidden sm:block">Frequently Asked Questions</span>
      </h1>
    <div className='content-container flex flex-col flex-start items-center w-full'>
      <Tabs
        size='md'
        className='w-full'
        aria-label='FAQ Tabs'
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key as string)}
        isVertical={isVertical}
        placement='top'
        style={{ height: '200px' }}
      >
        {/*
        Sources:
        Tabs: https://nextui.org/docs/components/tabs
        Accordion: https://nextui.org/docs/components/accordion
        
        Styles were mostly adopted from default NextJS with minor stylistic tweaks
        */}
        {tags.map((tag, index) => (
            <Tab 
              key={index} 
              title={tag}
              className={activeTab === tag ? 'active-tab-class' : ''}
            >
              <Accordion variant='bordered' className='w-[100%] sm:w-[70vw] mt-8 mb-8 self-center justify-self-center'
                  motionProps={{
                      variants: {
                      enter: {
                          y: 0,
                          opacity: 1,
                          height: "auto",
                          transition: {
                          height: {
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                              duration: 1,
                          },
                          opacity: {
                              easings: "ease",
                              duration: 1,
                          },
                          },
                      },
                      exit: {
                          y: -10,
                          opacity: 0,
                          height: 0,
                          transition: {
                          height: {
                              easings: "ease",
                              duration: 0.25,
                          },
                          opacity: {
                              easings: "ease",
                              duration: 0.3,
                          },
                          },
                      },
                      },
                  }}
              >
            {/*If no text is provided in the FAQ answer section, it defaults
            to "No answer available at this time" for accessibility purposes. */}
                {faqs
                  .filter(faq => faq.tag === tag)
                  .map((faq, index) => (
                    <AccordionItem key={index} title={faq.questionTitle} className='font-montserrat'>
                      {faq.answer ? (
                        <p>{documentToReactComponents(faq.answer.json)}</p>
                      ) : (
                        <p>No answer available at this time.</p>
                      )}
                    </AccordionItem>
                  ))}
              </Accordion>
            </Tab>
        ))}
      </Tabs>
      </div>
    </section>
  );
};

export default FaqSection;