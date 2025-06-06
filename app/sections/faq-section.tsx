"use client"

import { useState } from "react"

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const faqs = [
    {
      id: "item-1",
      question: "Who can participate in the competition?",
      answer:
        "The competition is open to students, professionals, and entrepreneurs from all backgrounds. Whether you're a beginner or an experienced participant, everyone is welcome to join and showcase their innovative ideas.",
    },
    {
      id: "item-2",
      question: "What is the main criteria for idea selection?",
      answer:
        "Ideas are evaluated based on innovation, feasibility, market potential, and social impact. We look for solutions that address real-world problems and demonstrate clear value proposition with a viable implementation plan.",
    },
    {
      id: "item-3",
      question: "Can we participate as a group of only girls?",
      answer:
        "We encourage diverse participation and welcome all-female teams. In fact, we actively support and celebrate diversity in our competition, including gender-diverse teams and individual participants.",
    },
    {
      id: "item-4",
      question: "Are there any resources or templates provided for the pitch deck?",
      answer:
        "Yes, we provide comprehensive resources including pitch deck templates, presentation guidelines, sample decks from previous winners, and access to mentorship sessions to help you create compelling presentations.",
    },
  ]

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to know about our services</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-none">
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full bg-red-900 hover:bg-red-800 text-white px-6 py-4 rounded-lg text-left font-medium text-lg transition-colors duration-200 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
              aria-expanded={openItem === faq.id}
              aria-controls={`content-${faq.id}`}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${openItem === faq.id ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`content-${faq.id}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItem === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-red-50 px-6 py-4 rounded-b-lg border-t border-red-200">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
