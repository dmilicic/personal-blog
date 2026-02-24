import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import Script from "next/script";
import Avatar from "@/app/_components/avatar";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            coverImageAttribution={post.coverImageAttribution}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
          <div className="mx-auto max-w-2xl pl-8 pt-8">
            <Avatar
              name={"Dario Milicic"}
              picture={"/assets/blog/authors/profile.jpg"}
            />
          </div>
        </article>
      </Container>

      <Script id="highlight-code" strategy="lazyOnload">
        {`
            
            setTimeout(() => {
              hljs.highlightAll();
            }, 250); // Delay in milliseconds
          `}
      </Script>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Blog by Dario Milicic`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
