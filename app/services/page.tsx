"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Carousel from "../components/carousel";
import Image from "next/image";
import Carousel from "../components/carousel";

export default function Service() {
  //   const [loadedImages, setLoadedImages] = useState<
  //     { url: string; width: number; height: number; caption?: string }[]
  //   >([]);
  //   const [isLoading, setIsLoading] = useState(true);

  //   const carouselData = [
  //     {
  //       id: 1,
  //       imageUrl: "/images/carousel_1.jpg",
  //       title: "Programming & Tech",
  //       description:
  //         "Elevate your digital presence with our expert programming and tech solutions. From web development to software engineering, we've got you covered.Elevate your digital presence with our expert programming and tech solutions. From web development to software engineering, we've got you covered.",
  //     },
  //     {
  //       id: 2,
  //       imageUrl: "/images/carousel_2.jpg",
  //       title: "Digital Marketing",
  //       description:
  //         "Maximize your online reach and engagement with our tailored digital marketing strategies. Let us boost your brand's visibility and drive results.",
  //     },
  //     {
  //       id: 3,
  //       imageUrl: "/images/carousel_3.jpg",
  //       title: "Graphics Design",
  //       description:
  //         "Maximize your online reach and engagement with our tailored digital marketing strategies. Let us boost your brand's visibility and drive results.",
  //     },
  //     {
  //       id: 4,
  //       imageUrl: "/images/carousel_4.jpg",
  //       title: "Video & Animation",
  //       description:
  //         "Maximize your online reach and engagement with our tailored digital marketing strategies. Let us boost your brand's visibility and drive results.",
  //     },
  //   ];

  //   useEffect(() => {
  //     const imageUrls = [
  //       "/images/carousel_1.jpg",
  //       "/images/carousel_2.jpg",
  //       "/images/carousel_3.jpg",
  //     ];

  //   }, []);
  return (
    <div>
      <Header activeLink="services" />
      <div className="mt-14"></div>
      <div className=" bg-gray">
        <Carousel />
      </div>

      <section className="">
        <h1 className=" sm:mx-10 mx-2 lg:mx-10 text-[blue] text-3xl font-bold py-7">
          Programs Offered
        </h1>
        <div className="grid grid-cols-1 sm:mx-10 mx-2 lg:mx-10 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-2 transition-transform">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[red]">
                  Web Development Training
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Learn the fundamentals and advanced techniques of web
                development with our comprehensive training program..
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-2 transition-transform">
            {/* <Image
              className="rounded-t-lg rounded-t-lg hover:scale-105 transition-transform duration-300"
              src="/images/IMAGES-1.png"
              alt=""
              height={700}
              width={300}
            /> */}
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-[red]">
                  Graphic Design
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Unlock your creativity and learn graphic design skills to create
                stunning visuals for branding and marketing.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-2 transition-transform">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-[red]">
                  Cybersecurity Traning
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Protect your data and systems from cyber threats with our
                specialized cybersecurity training program.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-2 transition-transform">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-[red]">
                  Mobile App Development
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Master the skills needed to develop mobile applications for iOS
                and Android platforms with our hands-on training program..
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-2 transition-transform">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-[red]">
                  Full Stack Web Development
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Become proficient in both front-end and back-end web development
                technologies and build dynamic web applications.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-2 transition-transform">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-[red]">
                  Artificial Intelligence Course
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Explore the fundamentals of artificial intelligence and machine
                learning and develop AI-powered solutions.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-2 transition-transform">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-[red]">
                  Front-End
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We are constantly learning, growing, and evolving to adapt to
                changes and improve our processes and services.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-2 transition-transform">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-[red]">Back-End</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We are constantly learning, growing, and evolving to adapt to
                changes and improve our processes and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
