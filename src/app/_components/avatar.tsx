import Link from "next/link";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <Link href={"https://dmilicic.com"}>
        <div className="text-xl font-bold hover:underline">{name}</div>
      </Link>
    </div>
  );
};

export default Avatar;
