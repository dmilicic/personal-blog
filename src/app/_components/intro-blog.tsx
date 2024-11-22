export function IntroBlog() {
  return (
    <section className="flex-col lg:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl lg:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Dario's Blog.
      </h1>

      <h4 className="text-center md:text-left text-xl mt-5 mr-4 md:pl-8 p-0 m-4 bg-surface-container">
        Writing about{" "}
        <span className="text-primary font-bold">mobile app development</span>{" "}
        in <span className="text-green-800 font-bold">Android</span> and{" "}
        <span className="text-tertiary font-bold">Flutter</span>, and taking
        tech to the extreme. Subscribe to be notified when I post new crazy
        implementations of these technologies.
      </h4>

      <iframe
        src="https://embeds.beehiiv.com/aac05b6f-130f-4fdd-9cf7-6f50f0923957?slim=true"
        data-test-id="beehiiv-embed"
        height="52"
        frameBorder="0"
        scrolling="no"
        className="m-4 border-radius: 0px !important; background-color: transparent;"
      ></iframe>
    </section>
  );
}
