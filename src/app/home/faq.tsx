'use client'

import { useRef, useState } from "react"

interface FaqItem {
  q: string;
  a: string;
}

interface FaqsCardProps {
  faqsList: FaqItem;
  idx: number;
}

const FaqsCard = (props: FaqsCardProps) => {
  const answerElRef = useRef<HTMLDivElement>(null) // Ref type
  const [state, setState] = useState<boolean>(false) // Boolean state
  const [answerH, setAnswerH] = useState<string>('0px') // String state for height
  const { faqsList, idx } = props

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const answerElH = answerElRef.current.childNodes[0].nodeType === 1 ? (answerElRef.current.childNodes[0] as HTMLElement).offsetHeight : 0;
      setState(!state)
      setAnswerH(`${answerElH + 20}px`)
    }
  }

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium">
        {faqsList.q}
        {
          state ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )
        }
      </h4>
      <div
        ref={answerElRef} className="duration-300"
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div>
          <p className="text-white">
            {faqsList.a}
          </p>
        </div>
      </div>
    </div>
  )
}

const FAQSection = () => {
  const faqsList = [
    {
      q: "What tech stack I follow to build full-stack web application",
      a: "I specialize in Python-Django and the MERN stack. I have a solid understanding of both frontend and backend technologies, which allows me to build robust, scalable web applications."
    },
    {
      q: "What kind of projects I work on",
      a: "I work on a variety of full-stack projects, including social media platforms, e-commerce applications, and custom web solutions. My expertise in both frontend and the backend helps me build dynamic and efficient applications."
    },
    {
      q: "How do I approach solving problems while developing a software application",
      a: "I take a systematic approach to problem-solving by first understanding the requirements, breaking down the problem into smaller tasks, and then leveraging my knowledge of data structures, algorithms, and frameworks to implement efficient solutions."
    },
    {
      q: "Do I prefer working with any specific frameworks or tools",
      a: "Yes, I have a preference for using Python-Django for backend development and the MERN stack (MongoDB, Express, React, Node.js) for frontend and backend JavaScript development. I also like to stay up-to-date with modern tools and technologies to ensure high-quality and maintainable code."
    },

    {
      q: "How much time required me to complete a project",
      a: "Well, that varies from project to project. If it is a static site, then 3-5 days are required. For projects that involve demonstrating an API or building the backend, 10-30 days are required at least. I always try to deliver the project as soon as possible without compromising the quality of the project."
    },
  ]

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-white font-semibold">
          FAQs
        </h1>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {
          faqsList.map((item, idx) => (
            <FaqsCard
              idx={idx}
              faqsList={item}
              key={idx} // Add key here
            />
          ))
        }
      </div>
    </section>
  )
}

export default FAQSection;
