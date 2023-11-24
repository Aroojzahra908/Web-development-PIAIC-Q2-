import Image from 'next/image';
import { CSSProperties } from 'react';

export default function Home() {
  const headingStyle: CSSProperties = {
    color: 'white',
    // fontSize: '24px',
    marginTop: '0',
    marginBottom: '0.1rem',
    fontSize: '3.5rem',
    lineHeight:'1.5',
  };

  const subheadingStyle: CSSProperties = {
    marginBottom: '2rem',
    fontWeight: 'normal',
    opacity: '0.7',
  };

  const headerStyle: CSSProperties = {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#159957',
    backgroundImage: 'linear-gradient(120deg, #155799, #159957)',
    padding: '84px', // Add padding for better visibility
  };

  const content: CSSProperties={
    color: '#159957',
    padding: '5rem 4rem',
    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '1.8rem',
    lineHeight:'1.5',
    marginTop: '-100px',
    margin:'-4px',
  };

  const contentgreen: CSSProperties = {
    color: '#159957',
    padding: '1rem 4rem',
    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '1.8rem',
    lineHeight: '1.5',
    marginTop: '20px', // Adjusted value for better visibility
    margin: '-6px',
  };
const image:CSSProperties={
  overflowClipMargin: 'content-box',
  overflow: 'clip',
};
const mainbody:CSSProperties={
  display:'block',
  boxSizing: 'border-box',
  width:'70%',
  margin:'auto',
  marginBottom: '0',

};
const a:CSSProperties={
  color: '#1e6bb8',
  margin:'60px',
  marginTop: '-31px',
  fontSize: '1.3rem',
  

}

const aa:CSSProperties={
  color: '#1e6bb8',
  margin:'60px',
  marginTop: '-15px',
  fontSize: '1.6rem',
  

};
const p:CSSProperties={
  color: '#1e6bb8',   
  fontSize: '1.5em',
  margin:'60px',
  marginTop:'-20px',
  
}
const text:CSSProperties={
  padding: '0',
  margin:'60PX',
  fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '1.5rem',
  lineHeight: 1.7,
  color: '#606c71',
  marginBottom: '5',
  // marginTop: '-24px',
  marginTop: '17px',
};

const h1tag:CSSProperties={
  color: '#159957',
};


const formstyle:CSSProperties={
  margin: '14px 0',
  padding: '5px 3px',
  width: '100%',
  fontSize: '19pX',
  border:' 2px solid black',
  borderRadius: '6px',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};


const form:CSSProperties={
  maxWidth: '62%',
  margin: '25px auto',
}
const button:CSSProperties={
  backgroundColor:'#159957',
  cursor: 'pointer',
  margin: '14px 0',
  padding: '5px 3px',
  width: '100%',
  fontSize: '19pX',
  border:' 2px solid black',
  borderRadius: '6px',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
}

  return (
    <div>
      <header style={headerStyle}>
        <h1 style={headingStyle}>Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</h1>
        <h2 style={subheadingStyle}>Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users</h2>
      </header>
      <div style={mainbody}>
<p style={content}>Certified Web 3.0 and Metaverse Developer: A<br></br> Nationwide Program in Karachi, Lahore,<br></br> Islamabad, and Peshawar</p>
<p style={image}><img src='/logo.png'></img></p>

<p style={content} >The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</p>

<p style={aa}><a href='https://www.piaic.org/'>Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar</a></p>

<p style={p}><a href='https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing'> This document on Google Docs</a></p>

<p style={text}>The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.<br></br></p>

<p style={text}>Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.</p>

<p style={contentgreen}>The Program in a Nutshell: Earn While You Learn</p>

<p style={text}>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.</p>

<p style={contentgreen} >Program of Studies</p>

<p style={text}>This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</p>

<p style={contentgreen} >Core Courses (Common in All Specializations)</p>

<p style={text}>Every participant of the program will start by completing the following two core courses:</p>

<p style={a} ><a href='https://github.com/panaverse/panaverse.github.io#quarter-i-core'>Quarter I (Core) CS-101: Object-Oriented Programming using TypeScript</a></p>

<p style={a} ><a href='https://github.com/panaverse/panaverse.github.io#quarter-ii-core'>Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</a></p>

<p style={contentgreen} >Specialized Tracks</p>

<p style={text}>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</p>

<p style={contentgreen} >Web 3.0 (Blockchain) and Metaverse Specialization</p>

<p  style={text}> This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</p>

<p style={a} ><a href='https://github.com/panaverse/panaverse.github.io#quarter-i-core'>Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</a></p>

<p  style={a}><a href='https://github.com/panaverse/panaverse.github.io#quarter-ii-core'> Quarter IV MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</a></p>

<p style={contentgreen}  >Artificial Intelligence (AI) and Deep Learning Specialization</p>

<p  style={text} >The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>

<p  style={a} ><a href="https://www.panaverse.co/">Quarter III AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</a></p>

<p  style={a} ><a href='https://www.panaverse.co/'>Quarter IV AI-361: Deep Learning and MLOps</a></p>

<p style={contentgreen} >Cloud-Native Computing Specialization</p>

<p  style={text} >The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</p>

<p  style={a} ><a href='https://www.panaverse.co/'>Quarter III CN-351: Certified Kubernetes Application Developer (CKAD)</a></p>

<p  style={a} ><a href='https://www.panaverse.co/'>Quarter IV CN-361: Developing Multi-Cloud APIs using CDK for Terraform</a></p>

<p style={contentgreen} >The Outcome for Participants of the Program</p>

<p  style={text} >The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</p>

<p  style={a} > <a href='https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms'>Top 5 ‘Metaverse’ jobs that will rule the future of tech industry</a></p>

<p  style={a} ><a href='https://web3.career/web3-salaries/blockchain-developer'>Blockchain Developer Salary - Jun 2022</a></p>

<p  style={a} ><a href='https://thedefiant.io/web3-soaring-salaries'>Web3 Salaries Soar to $750,000 for Rank-and-File Devs</a></p>

<p  style={a} ><a href='https://newzoo.com/resources/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022'>The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters</a></p>

<p  style={a}  ><a href='https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/'>How To Become Metaverse Developer: Scope, Skills, and Salary</a></p>

<p style={contentgreen} >Relevant Information Links</p>
<br></br>
<br></br>
<p  style={a} ><a href='https://www.piaic.org/'> Admission Website</a></p>

<p  style={a}><a href='https://www.facebook.com/groups/panaverse'> Facebook Group </a></p>

<p  style={a}><a href='https://www.youtube.com/@panaverse/streams' >YouTube Live Channel</a></p>

<p  style={a}><a href='https://twitter.com/Panaverse_edu' >Twitter</a></p>

<p  style={a} ><a href='https://github.com/panaverse' >Github Repos</a></p>

<p style={contentgreen}  >Detailed Course Syllabus</p>

<p style={contentgreen} > Quarter I (Core) </p>

<p style={contentgreen}  >CS-101: Object-Oriented Programming using TypeScript</p><br></br>

<p  style={text} >Duration: 13 Weeks</p>

<p  style={text} >Course Description:</p>

<p  style={text} >We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.</p>

<p  style={text}>Course Outline:</p>

<p  style={contentgreen} >HTML and CSS (Homework)</p> <br></br><br></br>

<p  style={a} ><a href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6 '>Learn HTML by Hira Khan (Watch Recorded Videos)</a></p>

<p  style={a} ><a href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob '>Learn CSS Intro by Hira Khan (Watch Recorded Videos)</a></p>

<p style={contentgreen} >Fundamentals of JavaScript (ECMAScript 2022 Language Specification)</p> 
<br></br><br></br>

<p style={a} >Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</p>

<p  style={a} >Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages</p>

<p  style={a} >JavaScript Book Code</p>

<p  style={a} >Getting Started Exercises with JavaScript and Node.js</p>

<p style={text} >Fundamentals of JavaScript and Node.js Quiz <br></br><br></br>

Topics Covered in the Quiz: <br></br><br></br>

Background of JavaScript and How to use JavaScript in Browser Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</p>

<ol style={text}>
  <li>
  Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm: https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs: https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.
  </li>

<li> Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)</li>

<li>Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</li>

<li>Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</li>

<li>Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function</li>

<li>Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</li>

<li>JavaScript promises, mastering the asynchronous</li>
</ol>

<p style={contentgreen} >Tokennomics</p>

<p  style={text} >Blockchain Project: Create a Token and Launch ICO/IEO/IDO</p>

<p  style={text} >As you probably know, the ICO (“Initial Coin Offering”) industry has been booming, and it’s completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia’s list of highest crowdfunding projects  https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects, and you’ll notice that blockchain projects absolutely dominate the list.</p>

<p  style={a} ><a href="https://phemex.com/blogs/what-is-a-dex-ido">Understand the difference between IDO vs. IEO vs. ICO</a></p>

<p style={text} >Also check these links for latest listings:

ICO list at ICO Drops https://icodrops.com <br></br>

<br></br> ICO List of Best New Initial Coin Offerings https://topicolist.com/

<br></br> Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs https://cryptototem.com/ico-list/

 <br></br><br></br> ICO List Online https://www.icolistingonline.com

 <br></br><br></br> Binance IEO List https://coincodex.com/ieo-list/binance/

<br></br><br></br> Binance Launchpad https://www.coinspeaker.com/ieo/platform/binance-launchpad/

<br></br><br></br> IEO List https://icomarks.com/ieo

<br></br><br></br>Polkastarter https://polkastarter.com

<br></br><br></br> Project Part 1: How to Launch a IEO on Binance Launchpad

<br></br><br></br> Read How to Launch an IEO https://appinventiv.com/blog/how-to-launch-an-ieo/

 <br></br><br></br> Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04

 <br></br><br></br> Note: Also document the alternatives to Binance Launchpad.
 <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/57RKSZv-KQI?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"   
    title="YouTube video player"
    allowFullScreen
  ></iframe>

<br></br><br></br> Project Part 2: How to Launch a IDO on Polkastarter

<br></br><br></br> Review the list of top fundraising platforms https://cryptorank.io/fundraising-platforms

<br></br><br></br> Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter https://polkastarter.com/

<br></br><br></br> Project Part 3: Create a Pako Token

<br></br><br></br> By creating a token and related contracts, you’ll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.

<br></br><br></br> Therefore, for the sake of this chapter, let’s imagine that our Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).

<br></br><br></br> Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.

<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/N974BbT-cWc?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo" 
    title="YouTube video player"
    allowFullScreen
  ></iframe>



<br></br><br></br>Project Part 4: Develop Crowd Sale Contract

<br></br><br></br>This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)

<br></br><br></br>Implement a payable buyToken() function.

<br></br><br></br> Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought

<br></br><br></br> Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal “owner” account.

<br></br><br></br> Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.

<br></br><br></br> You can use the openzeppelin crowd sale contracts https://docs.openzeppelin.com/contracts/4.x/crowdsales however you will have to update the code to the latest solidity version.

<br></br><br></br> Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract’s balance should have been reduced.

<br></br><br></br> Note: Before you get started writing the token contract we suggest you review access control https://docs.openzeppelin.com/contracts/4.x/access-control

<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/57RKSZv-KQI?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"   
    title="YouTube video player"
    allowFullScreen
  ></iframe> 

<br></br><br></br> Project Part 5: Trying it with MetaMask

<br></br><br></br> While it’s always good to test your code, it’s often more satisfying to see the results of your work wrapped in a nice UI. Let’s see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!

<br></br><br></br> We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.

<br></br><br></br> When it’s done, take note of what addresses the contracts were uploaded to and copy it!

<br></br><br></br> Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn’t have any ethers, remember that you can use any faucet.

<br></br><br></br> After the transaction has been confirmed, you might be confused about why you can’t see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to “register” it – after all, there are so many tokens out there, there’s no way MetaMask could list them all by default!

<br></br><br></br> To do this, open the side menu and click on the “Add token” button to get started:

<br></br><br></br> Once you’re on the token page, click on “Add custom token” and paste in the token contract’s address in the address field.

<br></br><br></br> After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!

<br></br><br></br> Project Part 6: Trying it with Multisignature Wallets

<br></br><br></br> Read https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/

<br></br><br></br> Now use Gnosis Safe
<br></br>


<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/57RKSZv-KQI?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"   
    title="YouTube video player"
    allowFullScreen
  ></iframe>


<br></br><br></br> Project Part 7: Sending Tokens using Ethers.js

<br></br><br></br> Write a Typescript program to send Pako Token to some friend’s address using Ethers.js.

<br></br><br></br> You may follow this tutorial https://ethereum.org/en/developers/tutorials/send-token-etherjs/

<br></br><br></br> Project Part 8 Advance: Create, Deploy, Mint, and Sell a NFT

<br></br><br></br> Read this NFT tutorial series https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/

<br></br><br></br> Create a NFT contract using the OpenZepplen ERC721 NFT Standard https://docs.openzeppelin.com/contracts/4.x/erc721

<br></br><br></br> You may use the Preset ERC721 contract https://docs.openzeppelin.com/contracts/4.x/erc721#Presets

<br></br><br></br> Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace https://opensea.io/ for sale.

<br></br><br></br> Implement a ERC721 Market https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/</p>

<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/57RKSZv-KQI?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"   
    title="YouTube video player"
    allowFullScreen
  ></iframe> 


<p style={contentgreen} >Quarter IV Web3 and Metaverse <br></br> <br></br>
MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</p>

<p  style={text} >Duration: 13 Weeks 

<br></br> <br></br> Course Description:

<br></br> <br></br> The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It’s unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.

<br></br>  <br></br>Course Outline:

<br></br>  <br></br> Open Metaverse Web Development</p>

<p style={a}><a href='https://www.blender.org/download/'>Blender 3+ Download

<br></br><br></br>  Blender 3.0 Beginner Tutorial

<br></br><br></br>  Blender 3.0 Hotkey

<br></br> <br></br>   Blender Projects Textbook: Blender by Example 2nd Edition

<br></br><br></br>  Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain

<br></br><br></br> Best Hardware Performance for Blender Rendering</a></p>


<p style={text}  >
Assignment 1:
<br></br>

Build a 3D Donut using Blender 3 as shown in these video tutorials https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD


<br></br><br></br> Assignment 2:
<br></br> Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book [Blender by Example 2nd Edition https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561


<br></br><br></br> Assignment 3:
<br></br>

Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561


<br></br><br></br> Assignment 4:
<br></br>

Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561


<br></br><br></br> Assignment 5:
<br></br>

Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561


<br></br><br></br> Assignment 6:
<br></br>
Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials https://www.youtube.com/watch?v=bpvh-9H8S1g
</p>

<h1 style={h1tag}><strong>video from laptop</strong></h1>
<video controls width="560"><source src="/j.webm" type="video/webm" />
             </video>

             <h1 style={h1tag} >Image</h1>
        <Image src="/nature.jpg" alt="Your Image" width={500} height={300} />
             
<h1 style={h1tag} >Contact Form</h1>



<section className="contact">
      <div style={form} >
        <input style={formstyle} type="text" name="Name" id="Name" placeholder="Enter your name" />
        <input style={formstyle} type="text" name="Phone no" id="Phone" placeholder="Enter your phone no" />
        <input  style={formstyle}  type="text" name="Email" id="Email" placeholder="Enter your email" />
        <textarea  style={formstyle}  name="text" id="text" placeholder="Elaborate your concern"></textarea>
        <button style={button} >Submit Form</button>
      </div>
    </section>

<footer  style={text}  >
        <span >This page was generated by <a href="https://pages.github.com">GitHub Pages</a>.</span>
      </footer>

</div> 
    </div>
  );
}
