"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <header>
          <nav className="container">
            <div className="logo">
              myTunes
            </div>
            <ul>
              <li><Link href={"/"}>Overview</Link></li>
              <li><Link href="#music">Music</Link></li>
              <li><Link href="#Vid">Video</Link></li>
              <li><Link href="#Gift">Gift Cards</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              {/* <li><Link href="/contact">Contact</Link></li> */}
            </ul>
          </nav>
    </header>
    <main>
        <section className="hero_section" id="hero">
            <div className="container">
                <h1>my Tunes</h1>
                <h3>Your music, movies and TV shows takes center stage.</h3>
                <p>myTunes is the best way to organize and enjoy the music, movies and TV shows you already have - and shop for the ones you want. Enjoy all the entertainment myTunes has to offer on your Mac and PC.</p>
            </div>
        </section>
        <section>
            <div className="music-section" id="music">
                <div className="container">
                    <h2>
                        <span>🎜</span>
                        Music
                    </h2>
                    <h4>Stream over 45 million songs, ad-free. Or download albums and tracks to listen to offline. All the music in your personal myTunes library - no matter where it come from - lives right alongside the Orange Music Catalog. Start Your free three month trial with no commitment, and cancel anytime. </h4>
                    <button className="btn">
                        Start your trial now
                    </button>
                    <p>Orange Music is available in myTunes, and for iOS and Android devices.</p>
                    <div className="ipad-iphone-img">
                        <img src="/images/ipad-iphone.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section className="about container">
            <h2>
                The movie and TV collection you always wished for. Granted.
            </h2>
            <p>
                With over 100,000 movies and TV shows to choose from, there’s always
                something great to watch on myTunes and if you watch on Orange TV 4K,
                you’ll be able to enjoy a tremendous selection of your favorite
                content in 4K HDR. So get ready to enjoy episodes of your favorite TV
                shows or hit movies you’ve been waiting to see — anytime, anywhere.
                Just tap to play, or even download if you’re going somewhere you won’t
                have Wi-Fi.
            </p>
            <button className="btnn">
                Read More
            </button>
            <div className="image">
                <img src="/images/mac.png" alt=""/>
            </div>
        </section>
        <section className="video" id="Vid">
            <div className="container">
                <h2> 
                    A world of entertainment. Available where you are.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ipsam in voluptates ratione repellat non magni sunt distinctio enim dignissimos neque sapiente asperiores debitis nemo velit totam vel, adipisci fugiat beatae tempore! Non aperiam aliquam aut nemo saepe sunt nisi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quasi vero, qui temporibus quia, laboriosam ducimus illum corrupti ea quaerat in doloremque debitis enim sequi!
                </p>
            </div>
        </section>
       <div className="container">
        <section className="gift" id="Gift">
            <div className="giftcard">
                {/* <img src="./Images/gift_card.png" alt=""/> */}
                <img src="/images/gift_card.png" alt=""/>
            </div>
            <div className="giftcontent">
                <h2>Gift Card</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio provident veritatis vel tenetur, facere impedit cupiditate maxime placeat aspernatur corrupti id voluptatum laborum, est, alias praesentium eum recusandae quas deleniti laudantium repudiandae hic aliquid possimus repellat optio. Iste distinctio rerum laudantium assumenda dicta. Optio porro fugiat, odio sunt cupiditate quidem.</p>
                <p>Already have an Orange myTunes Music Gift Card?</p>
                <hr/>
                <button className="btnn">
                    Redeem
                </button>
            </div>
        </section>
       </div>
    </main>
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
    </main>


  )
}
