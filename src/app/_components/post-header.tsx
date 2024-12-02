import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="flex flex-col sm:flex-row max-w-2xl mx-auto items-center">
        <div className="block md:hidden">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="m-6 text-lg">
          <DateFormatter dateString={date} />
        </div>

        <iframe
          src="https://embeds.beehiiv.com/aac05b6f-130f-4fdd-9cf7-6f50f0923957?slim=true"
          data-test-id="beehiiv-embed"
          height="52"
          frameBorder="0"
          scrolling="no"
          className="m-4 border-radius: 0px !important; background-color: transparent;"
        ></iframe>
      </div>
    </>
  );
}
