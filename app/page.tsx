"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/carousel";
import ServiceComponent from "./components/service";
import CourseComponent from "./components/Course";

const Page: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<
    { url: string; width: number; height: number; caption?: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  const ServiceData = [
    {
      id: 1,
      imageUrl: "/images/carousel_1.jpg",
      title: "Programming & Tech",
      description:
        "Elevate your digital presence with our expert programming and tech solutions. From web development to software engineering, we've got you covered.Elevate your digital presence with our expert programming and tech solutions. From web development to software engineering, we've got you covered.",
    },
    {
      id: 2,
      imageUrl: "/images/carousel_2.jpg",
      title: "Digital Marketing",
      description:
        "Maximize your online reach and engagement with our tailored digital marketing strategies. Let us boost your brand's visibility and drive results.",
    },
    {
      id: 3,
      imageUrl: "/images/carousel_3.jpg",
      title: "Graphics Design",
      description:
        "Maximize your online reach and engagement with our tailored digital marketing strategies. Let us boost your brand's visibility and drive results.",
    },
    {
      id: 4,
      imageUrl: "/images/carousel_4.jpg",
      title: "Video & Animation",
      description:
        "Maximize your online reach and engagement with our tailored digital marketing strategies. Let us boost your brand's visibility and drive results.",
    },
  ];
  const courseData = [
    {
      id: 1,
      imageUrl: "/images/carousel_5.jpg",
      title: "Mastering Software Development",
      description:
        "Dive deep into the world of software development with our comprehensive course. From learning the fundamentals of coding to advanced software engineering principles, this course equips you with the skills needed to thrive in the tech industry. Whether you're a beginner or an experienced developer looking to expand your knowledge, our expert instructors will guide you every step of the way. Get ready to elevate your digital presence and unleash your full potential in the world of technology.",
      price: 10000,
    },
    {
      id: 2,
      imageUrl: "/images/carousel_6.jpg",
      title: "Amplify Your Brand Online",
      description:
        "In today's digital age, a strong online presence is essential for business success. Our digital marketing course empowers you to maximize your brand's reach and engagement across various digital platforms. From social media marketing to search engine optimization (SEO), learn the latest strategies and techniques to boost your brand's visibility and drive tangible results. Whether you're a marketing professional or a business owner, this course will equip you with the tools and knowledge needed to succeed in the competitive digital landscape.",
      price: 10000,
    },
    {
      id: 3,
      imageUrl: "/images/carousel_2.jpg",
      title: "Unleash Your Creativity",
      description:
        "Transform your ideas into stunning visual masterpieces with our graphics design course. Whether you're passionate about creating captivating illustrations, eye-catching logos, or engaging multimedia presentations, this course provides you with the skills and techniques needed to bring your creative visions to life. From mastering industry-standard design software to understanding design principles and best practices, our experienced instructors will help you hone your craft and unleash your full creative potential. Get ready to make a lasting impact with your designs and stand out in the world of visual communication.",
      price: 10000,
    },
    {
      id: 4,
      imageUrl: "/images/carousel_3.jpg",
      title: "Bring Your Ideas to Life",
      description:
        "Elevate your storytelling with our video and animation course. From creating compelling promotional videos to producing captivating animations, this course equips you with the tools and techniques needed to bring your ideas to life in dynamic and engaging ways. Whether you're a content creator, marketer, or aspiring filmmaker, our expert instructors will guide you through the entire production process, from scripting and storyboarding to editing and post-production. Get ready to unleash your creativity, captivate your audience, and make a lasting impression with your visual creations.",
      price: 10000,
    },
  ];

  useEffect(() => {
    const imageUrls = [
      "/images/carousel_1.jpg",
      "/images/carousel_2.jpg",
      "/images/carousel_3.jpg",
    ];

    const preloadImages = async () => {
      const preloadedImages = await Promise.all(
        imageUrls.map(async (url) => {
          const img = new Image();
          img.src = url;
          await img.decode();
          return { url, width: img.width, height: img.height };
        })
      );
      // Update with captions
      const imagesWithCaptions = preloadedImages.map((image, index) => ({
        ...image,
        caption: `Image ${index + 1}`,
      }));
      setLoadedImages(imagesWithCaptions);
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  return (
    <div>
      <Header activeLink="home" />
      <div className="mt-14"></div>
      <div className="">
        <Carousel />
      </div>
      <div className=" mt-10 mb-3">
        <h2 className="text-center text-3xl font-bold mb-5">
          Our Popular Service
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 px-4 gap-2">
          {ServiceData.map((card) => (
            <ServiceComponent
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div className=" mt-10 mb-3">
        <h2 className="text-center text-3xl font-bold mb-5">
          Our Popular Course
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 px-4 gap-2">
          {courseData.map((course) => (
            <CourseComponent
              key={course.id}
              imageUrl={course.imageUrl}
              title={course.title}
              description={course.description}
              price={course.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
