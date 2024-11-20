import Link from "next/link";
import HomeButton from "./home-button";

const HeaderMenu = () => {
  return (
    <div className="flex flex-row sticky top-0 max-w-full h-[56px] bg-on-surface-container items-center space-x-4">
      <h1 className="text-2xl text-on-secondary-container ml-8">Welcome!</h1>
      <HomeButton />
      <button className="p-2 hover:bg-secondary-container hover:rounded-full">
        <Link href={"#about"}>About</Link>
      </button>
      <button className="p-2 hover:bg-secondary-container hover:rounded-full">
        <Link href={"/work"}>Work</Link>
      </button>
      <button className="p-2 text-primary hover:bg-secondary-container hover:rounded-full">
        <Link href={"mailto:dario.milicic@gmail.com"}>Contact</Link>
      </button>
      <button className="p-2 text-tertiary hover:bg-secondary-container hover:rounded-full">
        <Link href={"https://dmilicic.com"}>Canvas Mode</Link>
      </button>
    </div>
  );
};

export default HeaderMenu;
