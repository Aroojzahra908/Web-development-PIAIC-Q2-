import Image from 'next/image';
// import nature from '../public/nature.jpg'

export default function Home() {
  return (
    <div>
      <h1><strong>Hello, this is my assignment!</strong></h1>

      {/* Video from laptop */}
      <div>
        <h2><strong>video from laptop</strong></h2>
        <video controls width="560"><source src="/j.webm" type="video/webm" />
             </video>

      </div>

     {/* video from youtube */}
     <div>
  <h2><strong>Table with Dummy Data</strong></h2>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/TJQbDPGzm0Y"
    title="YouTube video player"
    allowFullScreen
  ></iframe>
</div>



      {/* Image */}
      <div>
        <h2>Image</h2>
        <Image src="/nature.jpg" alt="Your Image" width={500} height={300} />

      </div>

      {/* Table with Dummy Data */}
      <div>
        <h2><strong>Table with Dummy Data</strong></h2>
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data A1</td>
              <td>Data A2</td>
              <td>Data A3</td>
            </tr>
            <tr>
              <td>Data B1</td>
              <td>Data B2</td>
              <td>Data B3</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Contact Form */}
      <div>
        <h1><strong>Contact Us</strong></h1>
        <form>
          <label>
            Name:
            <input type="text" placeholder='name' />
          </label>
          <br></br>
          <label>
            Email:
            <input type="email" placeholder='email' />
          </label>
          <br></br>
          <label>
            Message:
            <textarea></textarea>
          </label>
          <br></br>
          <button type="submit" placeholder='submit here '>Submit</button>
        </form>
      </div>
    </div>
  );
}
