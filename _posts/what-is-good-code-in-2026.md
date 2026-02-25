---
title: 'Should you care about "Good Code" in 2026'
excerpt: "As the age of agentic coding is upon us, this blog explores what it means to have good code in 2026, should you care and has the definition of good code changed from before"
coverImage: "/assets/blog/good-code-2026/cover.jpg"
coverImageAttribution: "https://www.vecteezy.com/free-photos/software"
date: "2026-02-24T08:00:00.000Z"
author:
  name: Dario Milicic
  picture: "/assets/blog/authors/profile.jpg"
ogImage:
  url: "/assets/blog/good-code-2026/cover.jpg"
---

## **Good code for whom?**

As the agentic coding age has begun, I want to explore what it means to have good code anymore. Does it really matter if the code produced by an AI agent is readable and maintainable? Who are we writing the code for anymore?

As a software engineer, I always tried to make my code as readable as possible, it was not written for a machine but for the next human who is going to maintain it. During PR reviews, I often commented: “Hey, I find this difficult to read, let’s rewrite it in a simpler way.” I strongly believe that writing code as close as possible to normal human language is the way to go, because you are still working with humans (or were, at least). The reason is simple, there’s so much context to understand on a project that any complicated logic would drain your mental ability more than necessary.

Now that we have agents that have no mental fatigue, unprecedented ability to build context at speed, and are always maximally motivated, is the extra effort to produce readable code necessary, or is it just a waste of tokens?

I would argue **YES**, it should be necessary. I believe it is equally valid for an AI agent and for a human to have readable/maintainable code. If you are not a software engineer, then it's likely that it will take much more time and/or tokens to get the same result, and you still might care about making the codebase robust.

Let me explain why and try to give you a glimpse of my vision for the foreseeable future.

## **How should we work on projects in 2026**

I strongly believe the next generation of projects will be written by AI at a rate of around 90%. So it should be heavily skewed towards generated code, as most of the code, anyway, is boilerplate around standard practices. You need the same general logic for authentication, using REST services, talking to databases, etc. We already know what logic is proven to be most secure and most efficient.

However, every new project has that little twist that you’ve probably never built before, which is what differentiates software and its companies. For example, my [portfolio website](https://dmilicic.com) uses a scrollable, zoomable canvas to display information in widgets.

This is an example of a non-standard UI, and AI will struggle if you do not know exactly what you are doing. Perhaps you have a proprietary algorithm that AI has never seen before, and therefore will not be able to write it without lots of prompting. I found that the more specific a thing is, the more detailed the prompt I needed to write, but then I found that I wasted more time prompting than writing the damn thing myself.

It’s that last 10% that will still always be written by the engineer (or assisted by AI), and then all the same rules for readability and maintainability apply.

## **When you should NOT care about “good code”**

There are instances where you probably should not care. If you are doing something quick and dirty, rushing an MVP to test an idea, or simply trying something out, then you probably don’t want to waste effort into this. The end user does not care how the sausage is made. However, you might… keep this in mind as I describe why below.

## **Why you should still care to write/generate “good code”**

There are many reasons you should still care, but I will list the three I find most important.

### **1. AI will train on it**

This is the long-term look, it won't affect you immediately but might in the future. The case for this is that “garbage in -> garbage out” still applies. The AI knows only what it’s trained on, and if it’s trained on a quality codebase, it will nudge it to generate similar code. Otherwise, we are creating a new layer of generational technical debt. Write good code now so that the AI of the future provides good code for you. This is why I put this as number one, it has the most impact on all of us.

Without decades of discussions about good code and without manually writing millions of lines, we wouldn’t have the AI of today. I would like to express my appreciation to the millions of engineers who have shared their knowledge with the world, it has turned out to be more important than we could have imagined.

### **2. The last 10% will still have to be written by an engineer**

The twist, the special sauce, the innovation, that is something that AI helps with, but does not write in the end. The devil was always in the details. I found that it simply takes more time and wasted tokens for an AI to make small changes. Most of the time, I will just use AI for inspiration and for an initial implementation, but it will be a person with skill who will do the final touches.

The best analogy that I have seen is an airline pilot. At this point, most of the flying is done by a computer except during takeoffs/landings, and if there’s something dangerous going on, it will likely be the pilot who takes over. On the not so extreme end, you probably do not want to prompt to change a variable name, similarly, you probably do not want to call an electrician to change your light bulb at home. You can do that but it's probably a waste of time and money.

You simply need someone who knows what they are doing to navigate around the obstacles that AI stumbles upon, and don't want to waste tokens for very small changes. I don’t think this will change for at least a few years, if ever.

### **3. Make it easy for AI (or yourself) to add changes**

Software is never done, and so AI-generated software will also never be done. There will always be a new feature to add, something to fix, and something to update. If you have carefully prompted and have generated a solid codebase with good separation of concerns, you will be even more productive than someone else with AI. You will waste fewer tokens, write smaller prompts, AI agents will finish working faster, and your code will still be readable by humans.

Another major benefit is the ability to generate high-quality tests. Having a strong separation of concerns makes it easier to write tests that test smaller parts of your project, and having solid test coverage helps prevent regressions in generated code in the future. Having a solid deterministic test suite seems to be the best way to protect yourself against the nature of AI-driven changes.

## **Final Words**

Although there is personal anxiety about things to come, I try not to be all doom-and-gloom about it. As with any industrial revolution, we need to adapt and develop new paradigms for thinking and doing. I might be completely wrong about caring about clean code anymore, but at least I will slightly advance the discussion and let the next generation of AI keep this article somewhere deep in their black box. Only the future will tell whether caring about good code is a wasted effort.

Thanks for reading!
