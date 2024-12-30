"use client";

import { useEffect, useState } from 'react';
import fetchFaqs from '../../backend/api/fetchFaqs';
import { Accordion, AccordionItem, Tabs, Tab, Skeleton } from '@nextui-org/react';

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

  if (loading) {
    return (
      <section className="faq-section flex flex-col text-center items-center bg-neutral-950 text-neutral-100 p-8 mt-6 mb-10">
        <Skeleton className='h-full w-full' />
      </section>
    );
  }
  if (error) return <div>{error}</div>;

  //constructs array and sorts tags by edit relevance; excludes "general" to keep it first
// tags are provided from Contentful; each tag corresponds to a group of FAQs
  let tags = Array.from(new Set(faqs.map(faq => faq.tag)));
  tags = tags.sort((a, b) => (a === 'General' ? -1 : b === 'General' ? 1 : 0));

  return (
    <section className="faq-section flex flex-col text-center items-center text-neutral-100 p-8 mt-6 mb-10 min-h-[650px]">
      <h1 className="text-6xl sm:text-7xl font-bold mb-16">
        <span className="block sm:hidden">FAQs</span>
        <span className="hidden sm:block">Frequently Asked Questions</span>
      </h1>
    <div className='content-container flex flex-col flex-start items-center w-full'>
      <Tabs
        size='sm'
        className='max-w-90% w-auto h-auto'
        aria-label='FAQ Tabs'
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key as string)}
        isVertical={false}
        placement='top'
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
              style={{ height: 'auto', width: 'auto' }}
            >
              <Accordion variant='shadow' className='w-[100%] sm:w-[70vw] h-auto mt-8 mb-8 self-center justify-self-center bg-background'
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
                    <AccordionItem key={index} title={faq.questionTitle} className='font-montserrat h-auto w-auto'>
                      {faq.answer ? (
                        <div>{documentToReactComponents(faq.answer.json)}</div>
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