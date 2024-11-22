import Link from "next/link";
import HomeButton from "./home-button";
import Container from "./container";

const HeaderMenu = () => {
  return (
    <div className="flex flex-row sticky top-0 max-w-full h-[56px] bg-on-surface-container items-center space-x-4">
      <Container>
        <div className="flex flex-row max-w-full h-[56px] items-center space-x-4">
          <HomeButton />
          <button className="p-2 hover:bg-secondary-container hover:rounded-full">
            <Link href={"https://dmilicic.com"}>Portfolio</Link>
          </button>
          <button className="p-2 hover:bg-secondary-container hover:rounded-full">
            <Link href={"#about"}>About</Link>
          </button>
          <button className="p-2 text-primary hover:bg-secondary-container hover:rounded-full">
            <Link href={"mailto:dario.milicic@gmail.com"}>Contact</Link>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default HeaderMenu;
