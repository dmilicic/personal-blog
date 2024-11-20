import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AvatarIntro from "./avatar-intro";

export function IntroHero() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex flex-row w-[950px] h-[410px] text-center border-secondary border-2 rounded-md p-4 bg-cyan">
        <AvatarIntro
          name="Profile picture"
          picture="/assets/blog/authors/profile.jpg"
        />
        <div className="ml-8"></div>
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl font-bold">Hi, I'm Dario</h1>
          <h3 className="text-2xl text-body mt-8">
            I'm an <span className="text-secondary">AI powered</span> one-man
            agency that specializes in{" "}
            <span className="text-tertiary">mobile app development.</span>
          </h3>
          <div className="flex flex-row justify-center mt-8">
            <Link
              href={
                "https://www.linkedin.com/in/dario-mili%C4%8Di%C4%87-2b863563/"
              }
            >
              <FaLinkedin color="#0077b5" fontSize="1.5em" />
            </Link>
            <Link href={"https://github.com/dmilicic"}>
              <FaGithub className="ml-4" fontSize="1.5em" />
            </Link>
            <Link href={"mailto:dario.milicic@gmail.com"}>
              <MdEmail className="ml-4" color="secondary" fontSize="1.6em" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
