"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can participate in the competition?",
      answer:
        "Any student from NSBM Green University — including students from the Faculty of Business (FOB), Faculty of Computing (FOC), Faculty of Engineering (FOE), and Faculty of Science (FOS).",
    },
    {
      question: "What is the main criteria for idea selection?",
      answer:
        "The main criteria is the business idea. It should be innovative, practical, and impactful.",
    },
    {
      question: "Can we participate as a group of only girls?",
      answer:
        "Yes, all-girl groups are welcome and encouraged to participate.",
    },
    {
      question: "Are there any resources or templates provided for the pitch deck?",
      answer:
        "Not officially. Participants are encouraged to design their own pitch decks creatively.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl mx-auto px-2">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#650E17]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#222] max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </div>

        <div className="space-y-8 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300 shadow-md"
              style={{ backgroundColor: "#650E17" }}
            >
              <button
                className={`flex items-center justify-between w-full p-6 text-left transition-colors duration-200 ${
                  activeIndex === index ? "bg-[#4a0a12]" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="font-semibold text-lg text-[#E6DBCE]">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#E6DBCE]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#E6DBCE]" />
                )}
              </button>

              <div
                className={`px-6 pb-6 pt-0 transition-all duration-300 text-[#E6DBCE] ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
