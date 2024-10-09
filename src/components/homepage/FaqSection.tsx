"use client";

import { useEffect, useState } from 'react';
import fetchFaqs from '../../backend/api/fetchFaqs';
import { Accordion, AccordionItem, Tabs, Tab } from '@nextui-org/react';

interface Faq {
  questionTitle: string;
  tag: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);

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

  const tags = Array.from(new Set(faqs.map(faq => faq.tag)));

  return (
    <section className="flex flex-col text-center items-center faq-section bg-neutral-900 text-neutral-100 p-8 mb-10">
      <h1 className="text-8xl font-bold mt-12 mb-28">
        <span className="block sm:hidden">F.A.Q.s</span>
        <span className="hidden sm:block">Frequently Asked Questions</span>
      </h1>

      <Tabs className='mb-8' onChange={(e) => setActiveTab(tags[(e as any).index])}>
        {tags.map((tag, index) => (
          <Tab key={index} title={tag}>
            <Accordion variant='bordered' className='w-[90vw] sm:w-[70vw]'
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
              {faqs
                .filter(faq => faq.tag === tag)
                .map((faq, index) => (
                  <AccordionItem key={index} title={faq.questionTitle} className='font-serif'>
                    <p>{faq.answer}</p>
                  </AccordionItem>
                ))}
            </Accordion>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
};

export default FaqSection;