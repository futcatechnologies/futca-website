import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/carousel_1.jpg",
    alt: "Graphic Design",
    title: "Graphic Design",
    description:
      "We specialize in graphic design, leveraging creative visuals to transform ideas into compelling brand narratives and drive impactful communication strategies.",
  },
  {
    src: "/images/carousel_2.jpg",
    alt: "Web Design & Development",
    title: "Web Design & Development",
    description:
      "We excel in web design and development, crafting tailored digital experiences that seamlessly blend aesthetics with functionality to elevate brand presence and user engagement.",
  },
  {
    src: "/images/VIDEO-EDITING.png",
    alt: "Video Editing",
    title: "Video Editing",
    description:
      "With expertise in video editing, we transform raw footage into captivating visual narratives, ensuring messages resonate with precision and impact, captivating audiences.",
  },
  {
    src: "/images/carousel_4.jpg",
    alt: "Game Development",
    title: "Game Development",
    description:
      "Futca's game development expertise transforms innovative concepts into immersive gaming experiences, pushing boundaries and delighting players worldwide with cutting-edge technology and creativity.",
  },
  {
    src: "/images/carousel_5.jpg",
    alt: "Java Programming",
    title: "Java Programming",
    description:
      "At Futca, Java programming thrives as our skilled team harnesses its power to craft robust, scalable solutions, driving efficiency and innovation in the digital realm.",
  },
  {
    src: "/images/carousel_6.jpg",
    alt: "Cybersecurity",
    title: "Cybersecurity",
    description:
      "At Futca, cybersecurity is more than protection—it's proactive defense. Our expert team fortifies digital landscapes, safeguarding against threats and ensuring peace of mind in an ever-evolving online world.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative mt-12">
      <div className="overflow-hidden relative h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ height: "450px", background: "black" }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
              <h5 className="text-2xl font-bold">{slide.title}</h5>
              <p className="text-center mt-2 max-w-2xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg"
      >
        <span className="sr-only">Previous</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg"
      >
        <span className="sr-only">Next</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
