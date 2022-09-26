import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image.png";
import '../Components/NavBar.css'


export default function Home() {
  return (
    <div className="wrapper">
      <div className="msg">
        <h1 >HELLO!</h1>
        <h1>I'M <span className="name">KAUSTAV</span>, FULLSTACK DEVELOPER</h1>
      </div>
     
      <div className="image">
        <img src={image} alt="profile_image" />
        <p>Know More<Link className="link" to="/about"> -&gt;</Link></p>
      </div>
    </div>
  );
}
