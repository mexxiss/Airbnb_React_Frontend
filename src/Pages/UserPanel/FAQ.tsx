import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import AccordionComp from "../../Components/Accordion/AccordionComp";
import { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track the expanded section

    const data = [
        {
            title: "Finacials / Statements",
            faq: [
                {
                    que: "When will I see the monthly statements on my app?",
                    ans: "The monthly statement is 'live' on the app or dashboard by the 10th of each month.",
                },
                {
                    que: "How often will my home be occupied?",
                    ans: "Our property management services maximise income through high occupancy and optimum pricing. Using various rental platforms like Airbnb, we ensure that each listing is consistently generating income. For those who also live in the home on occasion, our holiday management system works around your schedule to make sure that your home is always clean and ready for you when required.",
                },
                {
                    que: "What are the benefits of using our holiday management system?",
                    ans: "Our holiday management system ensures that your home is always clean and ready for you when required, and maximises your income through high occupancy and optimum pricing. This system also allows you to book your holidays and vacations in advance, reducing the chances of your home being occupied or rented out. In addition, our holiday management system also provides you with the option to book your holidays and vacations with a friend or family member, reducing the time and effort required to book your own holidays.",
                },
            ]
        },
        {
            title: "Owner Stay",
            faq: [
                {
                    que: "When will I see the monthly statements on my app?",
                    ans: "The monthly statement is 'live' on the app or dashboard by the 10th of each month.",
                },
                {
                    que: "How often will my home be occupied?",
                    ans: "Our property management services maximise income through high occupancy and optimum pricing. Using various rental platforms like Airbnb, we ensure that each listing is consistently generating income. For those who also live in the home on occasion, our holiday management system works around your schedule to make sure that your home is always clean and ready for you when required.",
                },
                {
                    que: "What are the benefits of using our holiday management system?",
                    ans: "Our holiday management system ensures that your home is always clean and ready for you when required, and maximises your income through high occupancy and optimum pricing. This system also allows you to book your holidays and vacations in advance, reducing the chances of your home being occupied or rented out. In addition, our holiday management system also provides you with the option to book your holidays and vacations with a friend or family member, reducing the time and effort required to book your own holidays.",
                },
            ]
        },
        {
            title: "General Information",
            faq: [
                {
                    que: "When will I see the monthly statements on my app?",
                    ans: "The monthly statement is 'live' on the app or dashboard by the 10th of each month.",
                },
                {
                    que: "How often will my home be occupied?",
                    ans: "Our property management services maximise income through high occupancy and optimum pricing. Using various rental platforms like Airbnb, we ensure that each listing is consistently generating income. For those who also live in the home on occasion, our holiday management system works around your schedule to make sure that your home is always clean and ready for you when required.",
                },
                {
                    que: "What are the benefits of using our holiday management system?",
                    ans: "Our holiday management system ensures that your home is always clean and ready for you when required, and maximises your income through high occupancy and optimum pricing. This system also allows you to book your holidays and vacations in advance, reducing the chances of your home being occupied or rented out. In addition, our holiday management system also provides you with the option to book your holidays and vacations with a friend or family member, reducing the time and effort required to book your own holidays.",
                },
            ]
        },
    ];

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the expanded section
    };

    return (
        <div>
            {/* Breadcrumb */}
            <div>
                <ul className="text-sm text-gray-500 flex items-center gap-1">
                    <li>
                        <Link to="/user-panel/help" className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
                            Help
                        </Link>
                    </li>
                    <li>
                        <KeyboardArrowRightOutlined className="!text-xl" />
                    </li>
                    <li>
                        <span className="text-gray-800 inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">FAQs</span>
                    </li>
                </ul>
            </div>

            <div className="mt-8">
                {data.map((section, index) => (
                    <div key={index}>
                        {/* Main Title */}
                        <div
                            className="mainTitle py-2 border border-primary px-3 flex items-center justify-between gap-6 cursor-pointer"
                            onClick={() => handleToggle(index)}
                        >
                            <h4 className="text-lg sm:text-xl text-gray-700 uppercase">{section.title}</h4>
                            <span
                                className={`text-primary transform transition-transform duration-300 ${activeIndex === index ? "rotate-90" : ""
                                    }`}
                            >
                                <KeyboardArrowRightOutlined />
                            </span>
                        </div>

                        {/* Accordion Content */}
                        <div
                            className={`AccDiv mt-3 overflow-hidden ease-in-out duration-300 px-3 ${activeIndex === index ? "max-h-screen" : "max-h-0"
                                }`}
                        >
                            <AccordionComp data={section.faq} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
