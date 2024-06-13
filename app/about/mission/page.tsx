"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
// import Carousel from "../components/carousel";
import Image from "next/image";

export default function About() {
  const [loadedImages, setLoadedImages] = useState<
    { url: string; width: number; height: number; caption?: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imageUrls = [
      "/images/carousel_1.jpg",
      "/images/carousel_2.jpg",
      "/images/carousel_3.jpg",
    ];
  }, []);
  return (
    <div>
      <Header activeLink="about" />
      <div className="mt-14"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto bg-white  my-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2  lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4 my-10">
              <div className="lg:max-w-lg my-10 ">
                <p className="text-base font-semibold leading-7 text-[blue] px-5">
                  OUR MISSION
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-[blue] sm:text-4xl px-5">
                  Pioneering Futures at Zion Reborn University
                </h1>
                <p className=" text-justify leading-8  mt-6 text-lg  px-5">
                  At <strong className="text-[red]">FUTCA</strong>, our mission
                  is to empower businesses with innovative technology solutions
                  that drive growth, efficiency, and success. We strive to be a
                  trusted partner for our clients, delivering exceptional value
                  through our expertise, dedication, and commitment to
                  excellence.
                </p>
                <p className=" text-justify leading-8 text-gray-600 mt-6 text-lg  px-5"></p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-2 pt-16 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex justify-center">
            <Image
              src={"/images/IMAGES-1.png"}
              alt="Military Image"
              width={1200}
              height={200}
              className=" mx-auto rounded-xl bg-white shadow-xl ring-1 ring-green-500/100 "
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
