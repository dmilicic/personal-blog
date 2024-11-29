import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-3xl md:text-6xl">404 | Not Found</h2>
      <p className="text-m md:text-xl m-4">Could not find requested resource</p>
      <Link href="/">
        Return <span className="font-bold underline">Home</span>
      </Link>
    </div>
  );
}
