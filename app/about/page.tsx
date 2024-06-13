"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Carousel from "../components/carousel";
import Image from "next/image";

export default function About() {
  const [loadedImages, setLoadedImages] = useState<
    { url: string; width: number; height: number; caption?: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  const carouselData = [
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

  useEffect(() => {
    const imageUrls = [
      "/images/carousel_1.jpg",
      "/images/carousel_2.jpg",
      "/images/carousel_3.jpg",
    ];

    // const preloadImages = async () => {
    //   const preloadedImages = await Promise.all(
    //     imageUrls.map(async (url) => {
    //       const img = new Image();
    //       img.src = url;
    //       await img.decode();
    //       return { url, width: img.width, height: img.height };
    //     })
    //   );
    //   // Update with captions
    //   const imagesWithCaptions = preloadedImages.map((image, index) => ({
    //     ...image,
    //     caption: `Image ${index + 1}`,
    //   }));
    //   setLoadedImages(imagesWithCaptions);
    //   setIsLoading(false);
    // };

    // preloadImages();
  }, []);
  return (
    <div>
      <Header activeLink="about" />
      <div className="mt-14"></div>
      <div className="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32">
        {/* <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          width={1080}
          height={600}
        /> */}
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0096A5] to-[#4AB263] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0096A5] to-[#4AB263] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-[#0096A5]/50   text-white p-2 rounded-xl">
          <div className="mx-auto max-w-2xl lg:mx-0  ">
            <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl text-[#fff]  [text-shadow:_0_4px_0_#0096A590]">
              About us
            </h2>
            <p className="mt-6 text-lg leading-8  text-white">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a>
                Application <span aria-hidden="true">&rarr;</span>
              </a>
              <a>
                Admission <span aria-hidden="true">&rarr;</span>
              </a>
              <a>
                Studentship <span aria-hidden="true">&rarr;</span>
              </a>
              <a>
                Certification <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Offices worldwide
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  1
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Full-time programs
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  14
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Hours per week
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  40
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">Support</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  24/7
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <section className="">
        <h1 className="text-center text-[blue] text-3xl font-bold py-7">
          Our Core Values
        </h1>
        <div className="grid grid-cols-1 sm:mx-10 mx-2 lg:mx-10 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm bg-blacks border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <div className=" group-hover:opacity-75 transition-opacity duration-300"></div>
            </a>
            <div className="p-5 mb-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Innovation
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We strive to innovate and embrace new technologies to stay ahead
                in the ever-evolving IT landscape.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Quality
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We are committed to delivering high-quality solutions that meet
                and exceed the expectations of our clients.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Integrity
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We conduct our business with honesty, transparency, and
                integrity, fostering trust with our clients and partners.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Collaboration
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We believe in the power of collaboration and teamwork to achieve
                our goals and deliver exceptional results.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Customer Satisfaction
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We are dedicated to providing excellent service and ensuring the
                utmost satisfaction of our clients.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Continuous Improvement
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We are constantly learning, growing, and evolving to adapt to
                changes and improve our processes and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <h1 className="text-center text-[blue] text-3xl font-bold py-7">
          Our Expertise and Services
        </h1>
        <div className="grid grid-cols-1 sm:mx-10 mx-2 lg:mx-10 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm bg-blacks border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <div className=" group-hover:opacity-75 transition-opacity duration-300">
                <Image
                  className="rounded-t-lg rounded-t-lg hover:scale-105 transition-transform duration-300"
                  src="/images/DEVELOPMENT.png"
                  alt=""
                  height={500}
                  width={400}
                />
              </div>
            </a>
            <div className="p-5 mb-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Web Design & Development
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Crafting stunning and responsive websites tailored to your
                needs.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg rounded-t-lg hover:scale-105 transition-transform duration-300"
                src="/images/GRAPHICS.png"
                alt=""
                height={500}
                width={400}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Graphic Design
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Creating captivating visuals for branding, marketing materials,
                and user interfaces
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg rounded-t-lg hover:scale-105 transition-transform duration-300"
                src="/images/VIDEO-EDITING.png"
                alt=""
                height={500}
                width={400}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Video Editing
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Providing professional editing services for corporate videos,
                advertisements, and social media content.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg rounded-t-lg hover:scale-105 transition-transform duration-300"
                src="/images/WELCOME-TO-FUTCA.png"
                alt=""
                height={500}
                width={400}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Game Development
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Developing captivating and immersive games for various
                platforms.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg rounded-t-lg hover:scale-105 transition-transform duration-300"
                src="/images/IMAGES-2.png"
                alt=""
                height={500}
                width={400}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Java Programming
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Mastering Java fundamentals and advanced concepts to develop
                robust applications.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg rounded-t-lg hover:scale-105 transition-transform duration-300"
                src="/images/IMAGES-1.png"
                alt=""
                height={500}
                width={400}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Cybersecurity
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Implementing comprehensive strategies to safeguard data,
                networks, and systems from cyber threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="technology-stack" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-center mb-12 text-3xl font-semibold">
            Technology Stack
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg h-full">
                <div className="p-6">
                  <h5 className="text-xl font-medium mb-4">Frontend</h5>
                  <ul className="list-none space-y-2">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Angular</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg h-full">
                <div className="p-6">
                  <h5 className="text-xl font-medium mb-4">Backend</h5>
                  <ul className="list-none space-y-2">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Python</li>
                    <li>PHP</li>
                    <li>Ruby on Rails</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg h-full">
                <div className="p-6">
                  <h5 className="text-xl font-medium mb-4">Database</h5>
                  <ul className="list-none space-y-2">
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>SQLite</li>
                    <li>Oracle</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg h-full">
                <div className="p-6">
                  <h5 className="text-xl font-medium mb-4">Others</h5>
                  <ul className="list-none space-y-2">
                    <li>Git</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Azure</li>
                    <li>Google Cloud Platform</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
