import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex flex-row items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <Link href={"https://dmilicic.com"}>
        <div className="text-xl font-bold hover:underline">{name}</div>
      </Link>
      <Link href={"https://twitter.com/dmilicic2"}>
        <FaXTwitter className="ml-4 text-xl text-black hover:text-blue-700" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/dario-mili%C4%8Di%C4%87-2b863563/"}
      >
        <FaLinkedin className="ml-4 text-xl text-black hover:text-blue-700" />
      </Link>
      <Link href={"https://github.com/dmilicic"}>
        <FaGithub className="ml-4 text-xl text-black hover:text-blue-700" />
      </Link>
    </div>
  );
};

export default Avatar;
