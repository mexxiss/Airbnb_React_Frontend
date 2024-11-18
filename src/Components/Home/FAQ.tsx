import { Accordion } from "flowbite-react";
import React from "react";

const FAQ = () => {
  return (
    <div className="py-16 md:py-20">
      <div className="container mx-auto">
        <div className="lg:flex">
          <div className="lg:w-2/5">
            <div className="text-center lg:text-left">
              <h4 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-text1 xl:leading-[50px]">
                Airbnb management dubai FAQs
              </h4>
              <p className="text-lg text-primary mt-2">
                Contact us for more info
              </p>
            </div>
          </div>
          <div className="lg:w-3/5 lg:pl-6 2xl:pl-10 mt-10 lg:mt-0">
            <div>
              <Accordion className="rounded-none last:border-b-0 border-t-0 border-x-0">
                <Accordion.Panel className="border-b-2">
                  <Accordion.Title className="text-xl font-medium text-text1 focus:ring-0 focus:bg-transparent bg-transparent px-0 border-b-0 lg:pl-6 lg:pr-6 hover:bg-transparent items-start">
                    <p className="flex">
                      <span className="text-primary inline-block mr-4">01</span>{" "}
                      How often will my home be occupied?
                    </p>
                  </Accordion.Title>
                  <Accordion.Content className="!border-t-0 pl-5 pr-4 lg:pl-16 lg:pr-16 pt-0">
                    Our property management services maximise income through
                    high occupancy and optimum pricing. Using various rental
                    platforms like Airbnb, we ensure that each listing is
                    consistently generating income. For those who also live in
                    the home on occasion, our holiday management system works
                    around your schedule to make sure that your home is always
                    clean and ready for you when required.
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel className="border-b-2">
                  <Accordion.Title className="text-xl font-medium text-text1 focus:ring-0 focus:bg-transparent bg-transparent px-0 border-b-0 lg:pl-6 lg:pr-6 hover:bg-transparent items-start">
                    <p className="flex">
                      <span className="text-primary inline-block mr-4">02</span>{" "}
                      Can I run a short term rental myself?
                    </p>
                  </Accordion.Title>
                  <Accordion.Content className="!border-t-0 pl-8 pr-4 lg:pl-16 lg:pr-16 pt-0">
                    Our property management services maximise income through
                    high occupancy and optimum pricing. Using various rental
                    platforms like Airbnb, we ensure that each listing is
                    consistently generating income. For those who also live in
                    the home on occasion, our holiday management system works
                    around your schedule to make sure that your home is always
                    clean and ready for you when required.
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel className="border-b-2">
                  <Accordion.Title className="text-xl font-medium text-text1 focus:ring-0 focus:bg-transparent bg-transparent px-0 border-b-0 lg:pl-6 lg:pr-6 hover:bg-transparent items-start">
                    <p className="flex">
                      <span className="text-primary inline-block mr-4">03</span>{" "}
                      How much money can my short term rental generate?
                    </p>
                  </Accordion.Title>
                  <Accordion.Content className="!border-t-0 pl-5 pr-4 lg:pl-16 lg:pr-16 pt-0">
                    Our property management services maximise income through
                    high occupancy and optimum pricing. Using various rental
                    platforms like Airbnb, we ensure that each listing is
                    consistently generating income. For those who also live in
                    the home on occasion, our holiday management system works
                    around your schedule to make sure that your home is always
                    clean and ready for you when required.
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
