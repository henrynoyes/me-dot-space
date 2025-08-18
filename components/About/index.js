/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const About = ({}) => {
  const { theme } = useTheme();

  return (
    <>
      <div className="laptop:flex flex-row justify-center gap-4">
        <div
            className="flex justify-center items-center rounded-lg overflow-hidden laptop:basis-1/4"
            style={{ height: "400px" }}
        >
        <img
            alt="profile picture"
            className="flex rounded-lg"
            src="/images/profile_pic.jpeg"
            width="400px"
            height="400px"
          />
        </div>
        <div className="relative basis-1/2">
          <h1 className="m-4 mt-4 text-4xl">About Me</h1>
          <p className="m-4 text-md laptop:text-xl">
            Hello, I&apos;m Henry. I like to spend my time solving hard problems and making things, two activities often intertwined. Below is a showcase of some of my projects.
          </p>
          <p className="m-4 text-md laptop:text-xl"> 
            I also conduct robotics research as a graduate student at Northeastern University. For a more academic introduction, please visit
            {" "}
            <Link href="https://henrynoyes.info">
            <a className={theme === "dark" ? "text-link-red" : "text-link-blue"} target="_blank" rel="noopener noreferrer">henrynoyes.info</a>
            </Link>
            .
          </p>

        </div>
      </div>
    </>
  );
};

export default About;