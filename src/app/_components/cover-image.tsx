import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  coverImageAttribution?: string;
};

const CoverImage = ({ title, src, slug, coverImageAttribution }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
      {coverImageAttribution && (
        <div className="text-xs bg-center text-gray-500 text-right">
          <a
            href={coverImageAttribution}
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy; {new Date().getFullYear()} Software Stock photos by Vecteezy
          </a>
        </div>
      )}
    </div>
  );
};

export default CoverImage;
