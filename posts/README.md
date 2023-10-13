# Posts
This folder is ment for adding posts to portfolio web-site, both projects and blog posts.

## Blog
Blog posts are added simply by adding a new markdown file in `/posts/blog`. If images are needed, these must be put both
in `/posts/blog/blog-images` and `/public/blog-images`. The latter is the folder used by NextJS application, while the
former is only used during development as well as for viewing in Github.

## Projects
Projects are added to the project page simply by adding a markdown file in `/posts/projects`. These files
should have the following content (with no exceptions and no additional content!).
```md
---
employer: "Name of company/employer"
division: "Name of division within company"
timespan: "MMM YYYY mmm yyyy"
title: "Project title"
role: "Project/deployment role"
description: "Project description."
---
```

The `timespan` format `"MMM YYYY mmm yyyy` should be filled with start-month (`MMM`), start-year(`YYYY`), 
end-month(`mmm`) and end-year(`yyyy`), only seperated by spacing, where the months should be represented with first 3 
letters, for instance `Jun 2021 Oct 2022`.

The markdown file should have a numbered naming convention since this is the baseline for ordering the project correctly
in web-site.

If one or more of the fields in markdown is not relevant for the project the field should be left blank with empty 
string.