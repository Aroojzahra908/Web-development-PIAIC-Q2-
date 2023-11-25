// import Image from "next/image"
// import Link from "next/link"
import React from 'react'
import Link
 from 'next/link'
export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

<div>


<section className="Sub-header">
        <nav>
            <a href="index.html" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
            <div className="nav-links" id="navLinks">
                {/* reposnive bar open and close  */}
                <i className="fa fa-times"></i>
                <ul>
                <li><a href="index.html"><Link href={"/"}>Home</Link></a></li>
                    <li><a href="course.html"><Link href={"/course"}>Course</Link></a></li>
                    <li><a href="blog.html"><Link href={"/blog"}>Blog</Link></a></li>
                    <li><a href="about.html"><Link href={"/about"}>About</Link></a></li>
                    <li><a href="contact.html"><Link href={"/contact"}>Contact</Link></a></li>
                </ul>
            </div>
            <i className="fa fa-bars"></i>
            {/* reposnive bar open and close  */}
        </nav>
        <h1>About Us</h1>
    </section>

    {/* About Us Section Start  */}

    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <a href="#" className="hero_btn btn">EXPLORE NOW</a>
            </div>
            <div className="about-col">
                <img src="img/about.png" alt=""></img>
            </div>
        </div>
    </section>

    {/* About Us Section end */}

     {/* Footer Section start  */}
    <section className="footer">
        <hr></hr>
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            <br/> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
            dolorem.
        </p>

        <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
        </div>
        <p>Made with <i className="fas fa-heart"></i> by <a href="#">Sagar Developer</a></p>
        <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
    </section>
    {/* <!-- Footer Section end --> */}

    <script src="script.js"></script>

</div>
    </main>
  )
}