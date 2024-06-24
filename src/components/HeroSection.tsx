"use client";
import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Sector Gallery 
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          "Master the Art of Music" is an all-encompassing course designed to
          guide you through every aspect of music mastery. Whether you're a
          complete beginner or an advanced musician looking to refine your
          skills, this course offers something for everyone. Join us on a
          journey through the world of music, led by renowned instructor Ludwig
          van Beethoven.
        </p>
        <div className="mt-4">
          <Link href="/explore" passHref>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Gallery
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
