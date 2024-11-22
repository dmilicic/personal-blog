"use client";
import Link from "next/link";
import { MdHome } from "react-icons/md";

const HomeButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link href={"/"}>
      <MdHome className="ml-4" color="secondary" fontSize="1.6em" />
    </Link>
  );
};

export default HomeButton;
