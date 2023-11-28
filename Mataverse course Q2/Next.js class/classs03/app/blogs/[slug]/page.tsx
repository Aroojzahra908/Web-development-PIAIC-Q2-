
import React from 'react';

interface BlogData {
  title: string;
  slug: string;
  content: string;
}

const blogData2: BlogData[] = [
  {
    title: "First Blog ",
    slug: "first-blog",
    content: "This is the content of the first blog post."
  },
  {
    title: "Second Blog",
    slug: "second-blog",
    content: "This is the content of the second blog post."
  },
  {
    title: "Third Blog ",
    slug: "third-blog",
    content: "This is the content of the third blog post."
  },
  {
    title: "Fourth Blog ",
    slug: "fourth-blog",
    content: "This is the content of the fourth blog post."
  },
  {
    title: "Fifth Blog ",
    slug: "fifth-blog",
    content: "This is the content of the fifth blog post."
  },
  {
    title: "Sixth Blog ",
    slug: "sixth-blog",
    content: "This is the content of the sixth blog post."
  }
];

export default function Blogs({ params }: { params: { slug: string } }) {
  const selectedBlog = blogData2.filter((blog) => blog.slug === params.slug);

  return (
    <div>
      {selectedBlog[0]?.content}
    </div>
  );
}










