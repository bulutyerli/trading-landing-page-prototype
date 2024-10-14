'use client';

import { questions } from '../data/faq';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function FAQ() {
  return (
    <section className="px-6 pb-[500px] -mb-[500px] bg-[url('/pricebg.png')] bg-[length:150%_100%] bg-no-repeat bg-center">
      <div className="space-y-8">
        <h2 className="text-4xl lg:text-7xl font-bold text-center">
          Frequent Questions
        </h2>
        <div className="max-w-prose px-6 mx-auto space-y-3">
          {questions.map((question) => {
            return (
              <Disclosure
                defaultOpen={false}
                as="div"
                key={question.title}
                className="rounded-lg overflow-hidden bg-slate-800"
              >
                {({ open }) => (
                  <>
                    <DisclosureButton className="w-full flex justify-between items-center rounded-lg p-4 lg:px-6 text-base lg:text-lg text-white text-start">
                      {question.title}
                      {open ? (
                        <FaMinus className="w-3 h-3 text-white" />
                      ) : (
                        <FaPlus className="w-3 h-3 text-white" />
                      )}
                    </DisclosureButton>
                    <DisclosurePanel className="text-origin-top transition duration-75 ease-in px-4 lg:px-6 pb-4 text-white">
                      {question.content.map((item, index) => (
                        <p key={index}>{item.p}</p>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
