---
title: "Writing documentation"
subtitle: "Why is it that so many developers delay or neglect to write documentation for their systems when this is
extremely important for future maintenance?"
date: "2023-10-19"
author: "Åsmund Danielsen Kvitvang"
image: "writing-documentation/writing2.jpg"
---

When talking to co-developers about the importance of regularly writing and updating the documentation during a development process (and not just afterwards) there is a consensus on the topic. However, shockingly many simultaneously have strenuous thoughts when it comes writing the documentation themselves! Why? I think much of the reason behind this lies in the fact that software developers became developers mainly for one simple reason; writing code and getting it to run properly.

![Documentation writing](/blog-images/writing-documentation/writing.jpg)

Writing documentation for future maintenance and development is important. However, there is a fine balance between documentation and implementation. If you focus too much on writing good documentation when developing a new system, the result is often an inefficient process. On the other hand, if you focus too much on getting the system done as quickly as possible it is very easy to fall into the trap of getting an undocumented system, where it is difficult for both you and other developers to continue with maintenance and development on a later stage.

So, how do you write documentation in the best and most efficient way possible, without it ruining your development flow? My experience is that it is useful to write a small piece of documentation every time I implement a new piece of logic to my system. For instance, let's say I have written a new method within a class inside my Java application. Then, I usually add a docstring to the method with a two-sentence remark explaining the main purpose of the functionality. After this has been added I keep on developing other parts of my application. I mainly do this for my own sake, as I probably will have to read the code in the near or distant future and I really appreciate that my younger self thought of me during the development process. Whenever the entire application is finished I turn to my documentation (often being a *README.md* file) and try to write a concise and structure summary of the entire project, where I am able to turn to my docstrings for guidance.

Another useful aspect of writing documentation during (and not after) development is that it may be extremely valuable to write documentation with a fresh *this is new to me* mindset. More often than not I wind up working on projects where I have to learn at least one new concept that I have never been exposed to before. Then I find it really useful to write a small piece of documentation whenever I read up on the topic. When writing this documentation as a newbie it is easy to put myself in a position of being a person not knowing the topic (since I am that person), and it is therefore easy to write a documentation on the correct level of knowledge.

Moreover, my development process consists of another piece of helpful documentation which I frequently use from start to finish, namely a todo list containing a descriptive explanation of what I need to do to bring home the entire project at hand. I try to keep it as efficient as possible, so this is usually written inside a *README.md* file at the root folder of my project and consists of two lists, namely *TODOs* and *DONEs*. Whenever I have fresh thoughts on what the application needs for it to be completed I add a new entry in the todo list, and when a todo is done I move it into the done section. This helps me to perform a structured workflow, as well as not forgetting important parts of the project development. 

Furthermore, I believe that there is one last piece of documentation we have not yet discussed. Whenever having my last day of work before a vacation, or sometimes the last hour on fridays, I find it useful to write down where I left off. I also write down exactly what I should start working on when I return. By integrating this process into my daily life I spare myself of the struggle of getting back to work after some time off, where I often sit for an hour or two just searching for the place where I left off.
