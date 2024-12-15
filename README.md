# A personal statically generated blog using Next.js, Markdown, and TypeScript

The blog is available here: https://blog.dmilicic.com

This is built on top of the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter).

The purpose of this blog is to statically generate blog posts using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## How to use

Clone the project and execute **npm run dev** with [npm](https://docs.npmjs.com/cli/init):

```bash
npm run dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)!

## Licence

MIT
