import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div id="about" className="py-14 flex flex-col lg:flex-row items-center">
      <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
        About Me
      </h3>
      <div className="flex flex-col text-xl lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
        <p>
          I am a seasoned software developer expert with 10+ years of experience
          in{" "}
          <span className="text-secondary font-bold">
            building mobile applications
          </span>{" "}
          for
          <Link href="https://www.android.com/" className="no-underline">
            <span className="text-green-800 font-bold"> Android</span>
          </Link>{" "}
          and{" "}
          <Link href="https://flutter.dev/" className="no-underline">
            <span className="text-tertiary font-bold">Flutter</span>
          </Link>
          . I've built apps for various industries including healthcare,
          finance, and e-commerce and have helped multiple companies deliver
          their complex apps to market.
        </p>
      </div>
    </div>
  );
};

export default About;
