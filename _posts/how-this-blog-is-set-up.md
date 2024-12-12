---
title: "How This Blog is Set Up"
excerpt: "In this post I will explain how this blog is set up, which technologies are used and where you can find the source code."
coverImage: "/assets/blog/about-blog/cover4.jpg"
date: "2024-11-27T05:35:07.322Z"
author:
  name: Dario Milicic
  picture: "/assets/blog/authors/profile.jpg"
ogImage:
  url: "/assets/blog/about-blog/cover4.jpg"
---

## Introduction

This will be a short technical writeup about how this blog is made and hosted along with its other elements. The reasons for starting a blog can be seen on my other [blog post](/posts/why-I-started-a-blog-as-a-freelance-software-engineer).

I decided to make my life a bit easier and go for the existing solutions rather than building everything from scratch. A blog is something that was solved a thousand times already so there was no need to reinvent the wheel. This blog post will get updated as I expand the website and add other functionality.

The website has multiple elements that are hosted separately which can be comprised into three main groups:

1. **Blog**
2. [**Portfolio Website**](https://dmilicic.com)
3. **Static Images & Files**

### **Blog**

The blog itself was built in **NextJS** using a modified [`template`](https://vercel.com/templates/next.js/blog-starter-kit) made for blogging. I modified the styling slightly to match my portfolio website and added a few elements like the subscribe form.

**Hosting on Vercel is a breeze** and the current free tier is more than enough for the amount of traffic that is expected for a long time. There was a concern of eating up the quotas using some of the heavier gifs that I am using for blogs, but that was mitigated by hosting these on other platforms, which I will get to shortly.

Even though **I am mostly a mobile developer**, working with NextJS was very easy as the paradigm of building UI is very similar to what is now the industry standard on mobile, which is mostly a declarative style of building UI. For example, widgets in Flutter and Jetpack Compose in Android is now very similar to how NextJS uses React/HTML and **Tailwind** to build components. I love this!

The content for the posts are written in Markdown and the files are accompanied in a hidden **\_posts** folder which NextJS will not expose. It's all very simple and easy and I like that.

To create the blog posts the template uses [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

The blog itself is open source and the code is available [`here`](https://github.com/dmilicic/personal-blog).

### **Portfolio Website**

![Portfolio website screenshot](/assets/blog/flutter-web/cover.png)

The portfolio website is a place where I showcase my work and where I try to add a twist to standard portfolio websites. It's built on a canvas using **Flutter Web** so it's not standard HTML. The website is **hosted on Firebase** so it's not tied to this blog website in any other way other than it's on the same domain.

It was not the ideal technology due to **performance and SEO issues** but I simply loved working on it! I wrote a whole blog post about the implementation details [`here`](/posts/writing-a-personal-website-in-flutter-web).

I am also working on making the website become a [**WASM**](https://en.wikipedia.org/wiki/WebAssembly) app which will significantly improve performance, however, there are still browser limitations.

### **Static Images & Files**

I will be hosting lots of images, gifs and some files which will eat up the Vercel hosting quota very soon. This is also why I decided to host some of the heavier elements, like gifs, to **Amazon S3**.

It's a paid solution rather than free one that Vercel offers but at this point it's more important for me that the whole website is accessible for more than a few thousand requests.

## Final Words

Today, there are probably hundreds or even thousands of possible ways to create a blog, but as a software engineer myself I wanted a **solution that is quick to do but where every piece is customizable**. I want to be able to tinker with everything because I always have that one little thing to add.

This is also why I am never fully satisfied with anything that I put online, but launching it sooner rather than later is what I believe more important. For me, it is also a psychological excercise to release something that I know is not perfect.

Hopefully, the blog will serve it's purpose well, and if not then I will have at least learned something. I am always open to feedback so feel free to shoot me an email if you have any questions or comments.

Thanks for reading!
