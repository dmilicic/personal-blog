import Container from "@/app/_components/container";
import About from "./about";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t-2 border-on-primary-container dark:bg-slate-800">
      <Container>
        <About />

        <iframe
          id="subscribe-form"
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
        Copyright © 2026. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
