"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import quote from "../assets/review/quote-mark.png";
import reviewer1 from "../assets/review/reviewer1.jpg";
import reviewer2 from "../assets/review/reviewer2.jpg";
// import reviewer3 from "../assets/review/reviewer3.jpg";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Data Analyst",
    image: reviewer1,
    review:
      "This product exceeded my expectations! The quality is outstanding, and it has made my daily routine so much easier.",
  },
  {
    id: 2,
    name: "Bob Smith",
    designation: "Software Engineer",
    image: reviewer2,
    review:
      "I was skeptical at first, but after using it for a week, I'm completely sold. It's a game-changer!",
  },
  {
    id: 3,
    name: "Carol Davis",
    designation: "Product Manager",
    image: reviewer2,
    review:
      "The customer service is top-notch, and the product itself is fantastic. I highly recommend it to everyone.",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
      );
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const handleTransitionEnd = () => setIsAnimating(false);
      slider.addEventListener("transitionend", handleTransitionEnd);
      return () =>
        slider.removeEventListener("transitionend", handleTransitionEnd);
    }
  }, []);

  return (
    <div className="mt-16 relative w-full max-w-3xl mx-auto overflow-hidden">
      <div className="flex justify-center mb-20">
        <h2 className="text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text mx-auto text-center h-12">
          What Clients Say
        </h2>
      </div>

      <div
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {reviews.map((review) => (
          <div key={review.id} className="w-full flex-shrink-0 p-6">
            <div className="bg-[#171f38] border border-solid border-green-500 rounded-lg shadow-lg p-6">
              <div className="mb-8">
                <Image
                  src={quote}
                  alt="quote"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <p className="text-white">{review.review}</p>
              </div>
              <div className="flex items-center mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {review.name}
                  </h3>
                  <p className="text-sm">{review.designation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-2 top-2/3 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        onClick={prevSlide}
        disabled={isAnimating}
        aria-label="Previous review"
      >
        <FaChevronLeft className="h-4 w-4" />
      </button>
      <button
        className="absolute right-2 top-2/3 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        onClick={nextSlide}
        disabled={isAnimating}
        aria-label="Next review"
      >
        <FaChevronRight className="h-4 w-4" />
      </button>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to review ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}
