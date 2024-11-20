import Container from "@/app/_components/container";
import Tag from "./tag";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t-2 border-on-primary-container dark:bg-slate-800">
      <Container>
        <div
          id="about"
          className="py-14 flex flex-col lg:flex-row items-center"
        >
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            About Me
          </h3>
          <div className="flex flex-col text-xl lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <p>
              I am a seasoned software developer expert with 10+ years of
              experience in{" "}
              <span className="text-secondary font-bold">
                building mobile applications
              </span>{" "}
              for <span className="text-green-800 font-bold">Android</span> and{" "}
              <span className="text-tertiary font-bold">iOS</span>. I've built
              apps for various industries including healthcare, finance, and
              e-commerce and have helped multiple companies deliver their
              complex apps to market.
            </p>
          </div>
        </div>

        <iframe
          src="https://embeds.beehiiv.com/aac05b6f-130f-4fdd-9cf7-6f50f0923957"
          data-test-id="beehiiv-embed"
          width="100%"
          height="320"
          frameBorder="0"
          scrolling="no"
          className="border-radius: 4px; border: 2px solid #e5e7eb; margin: 0; background-color: transparent;"
        ></iframe>
      </Container>

      <div className="h-8 w-full text-center border-on-primary-container items-center justify-center">
        Copyright © 2024. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
