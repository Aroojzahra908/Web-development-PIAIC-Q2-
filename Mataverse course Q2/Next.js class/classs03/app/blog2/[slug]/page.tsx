import Link from 'next/link';
import React from 'react';
import FirstBlogPost from './first-blog';
import SecondBlogPost from './second-blog';

interface BlogData {
  title: string;
  slug: string;
  content: string;
}

const blogData2: BlogData[] = [
  {
    title: "First Blog ",
    slug: "first-blog",
    content:`This is my first blog page`

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


// simple sir method 
// export default function Blogs({ params }: { params: { slug: string } }) {
//   const selectedBlog = blogData2.filter((blog) => blog.slug === params.slug);

//   return (
//     <div>
      
//       {selectedBlog[0]?.content}
//     </div>



export default function Blogs({ params }: { params: { slug: string } }) {
  const selectedBlog = blogData2.find((blog) => blog.slug === params.slug);

  if (!selectedBlog) {
    return <div>Blog not found</div>;
  }
  return (
    <div>
    <h1>{selectedBlog.title}</h1>
    {params.slug === 'first-blog' && <FirstBlogPost/>}
    {params.slug === 'second-blog' && <SecondBlogPost/>}
    {/* Add similar conditions for other blogs */}
  </div>
  );
}

