export function IntroBlog() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Dario's Blog.
      </h1>

      <h4 className="text-center md:text-left text-xl mt-5 mr-4 md:pl-8 p-0 bg-surface-container">
        Writing about mobile app development, startups and other tech related
        topics.
      </h4>

      <iframe
        src="https://embeds.beehiiv.com/aac05b6f-130f-4fdd-9cf7-6f50f0923957?slim=true"
        data-test-id="beehiiv-embed"
        height="52"
        frameBorder="0"
        scrolling="no"
        className="margin: 0; border-radius: 0px !important; background-color: transparent;"
      ></iframe>
    </section>
  );
}
