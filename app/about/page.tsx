"use client";
import Image from "next/image";
import { FaCss3Alt } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";

export default function About() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="bg-bg min-h-screen">
      <div>
        <h1 className="flex justify-center pt-8 pb-16 text-5xl font-bold tracking-widest bg-gradient-to-r from-black to-cyan-100 bg-clip-text text-transparent">
          About Me
        </h1>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row justify-center gap-3">
          <div
            className="h-[355px] w-full md:w-[755px] border-neutral-600 text-bg bg-text rounded-3xl"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <p className="flex items-center pt-16 px-14 text-lg">
              I am Naimal.
              <br />
              <br />
              I am a dedicated and passionate web developer with a knack for
              creating intuitive and dynamic user interfaces. My journey in web
              development has been fueled by a love for coding and a desire to
              constantly learn and improve.
            </p>
          </div>
          <div
            className="h-[355px] w-full md:w-[455px] border-neutral-600 bg-text rounded-3xl"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <div className="flex justify-center pt-20">
              <Image
                src={"/./profile.jpg"}
                width={200}
                height={0}
                alt=""
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-3">
          <div
            className="h-[200px] w-full md:w-[480px] border-neutral-600 bg-text rounded-3xl hover:animate-pulse hover:bg-gradient-to-r from-cyan-100 to-teal-600"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <div className="flex justify-center pt-16 hover:animate-pulse rounded-3xl hover:bg-gradient-to-r from-cyan-100 to-teal-600">
              <button className="bg-stone-950 border-neutral-200 border-y-1 rounded-l-full rounded-r-full text-lg flex items-center justify-center font-bold text-neutral-300 py-4 px-14">
                <p>Develop</p>
              </button>
            </div>
          </div>
          <div
            className="h-[200px] w-full md:w-[480px] border-neutral-600 bg-text rounded-3xl"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <p className="flex justify-center text-bg pt-5 text-lg">
              My Tech Stack
            </p>
            <div className="flex  sm:flex-row space-x-9  text-5xl pt-14 p-1 text-neutral-500">
              <p className="text-blue-600 ">
                <FaCss3Alt />
              </p>
              <p className="text-orange-400 ">
                <FaHtml5 />
              </p>
              <p className="text-yellow-500 ">
                <IoLogoJavascript />
              </p>
              <p className="text-black ">
                <RiNextjsFill />
              </p>
              <p className="text-blue-800 ">
                <FaPython />
              </p>
              <p className="text-blue-500 ">
                <RiTailwindCssFill />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
