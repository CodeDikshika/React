import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home  = () => {
  return (

    <>
    <div className="home" id='home'>
      <main><h1>DIKSHIKA</h1>
      <p>tagline</p></main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus minus quidem nostrum dolore inventore possimus, molestiae veritatis facilis sit. Ducimus, soluta impedit? Vero velit aliquam animi vitae veniam quos laborum, temporibus blanditiis iste.</p>
      </div>
    </div>
    <div className="home3" id='about'>
      <div>
        <h1>who we are??</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima consequatur ipsum repellat, fugit obcaecati officiis deleniti illo eos. Mollitia laborum, necessitatibus error voluptatum explicabo quibusdam veniam ipsum aut voluptas, modi porro perspiciatis sunt accusantium!</p>
      </div>
    </div>
    <div className="home4" id="brands">
    <div>
      <h1>Brands</h1>
    <article>
      <div id='google' style={{
        animationDelay:"0.5s",
        

      }}>
      <AiFillGoogleCircle />
      <p>Google</p>
      </div>


      <div id="amazon"style={{
        animationDelay:"0.7s",
      }}>
      <AiFillAmazonCircle />
      <p>Amazon</p>
      </div>

      <div id="insta"style={{
        animationDelay:"1s",
      }}>
      <AiFillInstagram/>
      <p>Instagram</p>
      </div>

      <div id="yt" style={{
        animationDelay:"1.3s",
      }}>
      <AiFillYoutube />
      <p>Youtube</p>
      </div>
      
      
      
      </article>
      
    </div>
    </div>
    </>
  )
}

export default Home