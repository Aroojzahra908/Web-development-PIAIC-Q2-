
"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Head from 'next/head';

const blogpage = () => {
  return ( 
    <div>
      <header>
        <nav className="container">
          <div className="logo">myTunes</div>
          <ul>
            <li>
              <Link href={"/"}>Overview</Link>
            </li>
            <li>
              <Link href="#music">Music</Link>
            </li>
            <li>
              <Link href="#Vid">Video</Link>
            </li>
            <li>
              <Link href="#Gift">Gift Cards</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            {/* <li><Link href="/contact">Contact</Link></li> */}
          </ul>
        </nav>
      </header>

      <section className="video" id="Vid">
        <div className="container">
          <h2>A world of entertainment. Available where you are.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ipsam
            in voluptates ratione repellat non magni sunt distinctio enim
            dignissimos neque sapiente asperiores debitis nemo velit totam vel,
            adipisci fugiat beatae tempore! Non aperiam aliquam aut nemo saepe
            sunt nisi?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sed quasi vero, qui temporibus quia, laboriosam ducimus illum
            corrupti ea quaerat in doloremque debitis enim sequi!
          </p>
        </div>
      </section>
<div className="blogs">
  <h1>Come Dig in the World of Blogging</h1>
</div>


<div className="blogs_body">
  {/* First Div */}
  <div className="blog_box">
    <div className="blog_image">
    <img src="/images/pic1.avif" alt="" />
    </div>
    {/* Content for the First Div */}
    <div className="content">
     
    <Link href="/blog2/[slug]/first-blog" as="/blog2/first-blog">
  <div style={{ cursor: 'pointer' }}>
    <h1 style={{ color: 'black' }}>first-blog</h1>
  </div>
</Link>
      <p> This is the content of the first blog post. </p>
    </div>
  </div>

{/* Blog 2 */}
<div className="blog_box">
  <div className="blog_image">
    <img src="/images/pic.jpeg" alt="Blog Image 2" />
  </div>
  <div className="content">
    <Link href="/blog2/[slug]" as="/blog2/second-blog">
      <div style={{ cursor: 'pointer' }}>
        <h1 style={{ color: 'black' }}>Second Blog</h1>
      </div>
    </Link>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>

{/* Blog 3 */}
<div className="blog_box">
  <div className="blog_image">
    <img src="/images/gift_card.png" alt="Blog Image 3" />
  </div>
  <div className="content">
    <Link href="/blog2/[slug]" as="/blog2/third-blog">
      <div style={{ cursor: 'pointer' }}>
        <h1 style={{ color: 'black' }}>Third Blog</h1>
      </div>
    </Link>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>

{/* Blog 4 */}
<div className="blog_box">
  <div className="blog_image">
    <img src="/images/pic.jpeg" alt="Blog Image 4" />
  </div>
  <div className="content">
    <Link href="/blog2/[slug]" as="/blog2/fourth-blog">
      <div style={{ cursor: 'pointer' }}>
        <h1 style={{ color: 'black' }}>Fourth Blog</h1>
      </div>
    </Link>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>

{/* Blog 5 */}
<div className="blog_box">
  <div className="blog_image">
    <img src="/images/pic2.avif" alt="Blog Image 5" />
  </div>
  <div className="content">
    <Link href="/blog2/[slug]" as="/blog2/fifth-blog">
      <div style={{ cursor: 'pointer' }}>
        <h1 style={{ color: 'black' }}>Fifth Blog</h1>
      </div>
    </Link>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>

{/* Blog 6 */}
<div className="blog_box">
  <div className="blog_image">
    <img src="/images/pic1.avif" alt="Blog Image 6" />
  </div>
  <div className="content">
    <Link href="/blog2/[slug]" as="/blog2/sixth-blog">
      <div style={{ cursor: 'pointer' }}>
        <h1 style={{ color: 'black' }}>Sixth Blog</h1>
      </div>
    </Link>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>


</div>




<footer>
        <section className="upper">
            <div className="container">
                <div className="foot">
                    <h4>Shop & Learn</h4>
                    <ul>
                        <li>Music</li>
                        <li>Movies</li>
                        <li>Shows</li>
                        <li>Apps</li>
                        <li>Gift Cards</li>
                      </ul>
                </div>
                <div className="foot">
                    <h4>Orange Store</h4>
                    <ul>
                      <li>Find a Store</li>
                      <li>Today at Orange</li>
                      <li>Financing</li>
                      <li>Orange Camp</li>
                      <li>Order Status</li>
                    </ul>
                </div>
                <div className="foot">
                    <h4>Education & Business</h4>
                    <ul>
                      <li>Orange & Education</li>
                      <li>Shop for Collage</li>
                      <li>Orange & Business</li>
                      <li>Shop for Business</li>
                      <li>Jobs</li>
                    </ul>
                </div>
                <div className="foot">
                    <h4>About Orange</h4>
                    <ul>
                      <li>Newsroom</li>
                      <li>Orange Leadership</li>
                      <li>Investors</li>
                      <li>Envents</li>
                      <li>Contact Orange</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="lower">
            <p>Copyright &#169; 2023 Do Some Coding</p>
        </section>
    </footer>
    </div>
  );
}
export default blogpage;