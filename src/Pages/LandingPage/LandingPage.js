import React from 'react'
import "./LandingPage.css"
import "./LandingPage.scss";
import me from "../../Media/me2.jpg"
import Pagination from './Pagination';
import { Component } from 'react';
import Certification from '../Pop_up/Certifications/Certification';
import Navbar from "../Navbar/Navbar"
import { useState } from 'react';
import { useEffect } from 'react';
import Popup from '../Pop_up/Certifications/Popup';
function LandingPage() {

// class LandingPage extends Component {



// constructor(props) {
//      super(props);
//     this.state = { certification: false,
//     page2:false,
//   page3:false }
//     this.handleClick1= this.handleClick1.bind(this);
//     this.handleClick2= this.handleClick2.bind(this);
//     this.handleClick3= this.handleClick3.bind(this);
//   }

//   handleClick1() {
//     this.setState({ certification: true }); 
//     console.log("certification button clicked")

//   }

//   handleClick2() {
//     this.setState({ page2: true}) 
//     console.log("button2 clicked")

//   }

//   handleClick3() {
//     this.setState({ page3: true}) 
//     console.log("button3 clicked ")

//   }

//   render() {
//  const certification = this.state.certification;


 const [buttonPopup, setButtonPopup] = useState(false);
const [timedPopup , setTimedPopup] = useState(false);

useEffect(() => {
  setTimeout(() => {
    setTimeout(true);
  } ,3000);
} , []);



        return (
          <div>
            <div class="left-side-of-landing-page">
              <div class="navbar-right">
                <div style={{ display: "flex" }}>
                  <img
                    src={
                      "http://static1.squarespace.com/static/5504f51ae4b00ffe14077781/5509c582e4b00acf3253bf64/5509c589e4b00acf3253c0b3/1413830999000/6.jpg?format=original"
                    }
                    style={{
                      marginTop: "0%",
                      marginLeft: "5%",
                      width: "11%",
                      height: "80%",
                    }}
                  />

                  <div
                    style={{
                      fontWeight: "400",
                      marginLeft: "2vw",
                      fontSize: "2rem",
                      marginTop: "1%",
                    }}
                  >
                    M O C
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={
                    "https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874__340.jpg"
                  }
                  style={{
                    marginTop: "20%",
                    marginLeft: "7%",
                    width: "50%",
                    height: "155%",
                    backgroundSize: "contain",
                    clipPath: "ellipse(100px 110px at 10% 20%)",
                  }}
                />

                <img
                  src={
                    "https://image.freepik.com/free-photo/charming-girl-yellow-colored-glasses-posing-with-surprised-face-expression-indoor-photo-spectacular-female-model-with-pink-skateboard_197531-20487.jpg"
                  }
                  style={{
                    marginTop: "-30%",
                    marginLeft: "20%",
                    width: "50%",
                    height: "155%",
                    clipPath: "ellipse(100px 110px at 10% 20%)",
                  }}
                />
              </div>
              <div class="left-image-container">
                <img
                  src="https://cdn.pixabay.com/photo/2020/01/09/14/17/abstract-4752876_960_720.jpg"
                  alt="Snow"
                  style={{ marginTop: "2%", marginLeft: "1%", width: "50%" }}
                />
                <div
                  style={{
                    color: "#fff",
                    marginLeft: "32.2%",
                    fontSize: "x-large",
                    fontWeight: "400",
                    top: "26.45%",
                    position: "absolute",
                  }}
                >
                  Courses As low as
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      fontSize: "5rem",
                      marginLeft: "35%",
                      fontWeight: "400",
                      top: "40%",
                      position: "absolute",
                    }}
                  >
                    $
                  </div>
                  <div
                    style={{
                      fontSize: "4.5rem",
                      marginLeft: "44%",
                      fontWeight: "400",
                      top: "42.5%",
                      position: "absolute",
                    }}
                  >
                    7
                  </div>
                  <div
                    style={{
                      fontSize: "3rem",
                      marginLeft: "51.75%",
                      fontWeight: "400",
                      top: "40%",
                      position: "absolute",
                    }}
                  >
                    .99
                  </div>
                </div>
              </div>
            </div>

            <div class="right-side-of-landing-page">
              <div class="navbar-left">
                <div style={{ display: "flex" }}>
                  <a href="/" class="elem-1" style={{ marginLeft: "17%" }}>
                    H O M E
                  </a>
                  <a href="/signin" class="elem-1">
                    A B O U T
                  </a>
                  <a href="/signin" class="elem-1">
                    C O U R S E S
                  </a>
                  <a
                    href="/signin"
                    class="elem-1"
                    //onClick={this.handleClick1}
                    onClick={() => setButtonPopup(true)}
                  >
                    C E R T I F I C A T I O N S
                  </a>
                  {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <div class="certification">
                      <img
                        src="https://lh3.googleusercontent.com/4KLVplzRDRXQdC1EcBSLNX-wW_Jc6arXinyHVq2fqOlelxXzxrGPBzWp5aVXWQWSJiZb41XkKqaBfNot73Rc393mMCdt4JZqfffGnGPl9cLLg-yYsgyI9uD6YrrNOwzncdvZc3FYb8qA35QjIr7J-dGQrayRUuXpq9KZt2NYMFVyOc8MOTJEyYEtkDl2qvhVHiwwnB6GZClpyEwa0hFYDSGpAfapxYbqYd9aNMJMj1M3pKOZE9REBoX0U3os6UgLMchcuMNaeo_Tl8g3dJlIa5u7oQGOVKCpKz_iqYJ698YTyB5r-ZuTXBt2tdpX1CSf6kA10lTT-v-G3vyO7LUR2mqOOCl8y-t_WC-RY7iGxc0lyRGwlvwMOW8_E7HldjZgEfPhNCrsp6-1X-fSX0SRMH7o_AbiMfd3G8bJ4pxjSyRIPXz7316Uzx4tyOPq4YECpPBBIcyYl-Ici_pk3AStJrrhFLnOxpAOHUaqwapzxxG8ew30Qu3PGK3JMcmjkaOiPfa3-cZ8uqJrV0f0wzngU9yOXe0mdoMWXGt66t5XneEq0yYcibqoREpc1oQSX9oun4bze5FvcYeHiu8eqSOfWEHIez3VN72IdB_r4kpEQLtuTUg1vw2--SVzqLl2xNyNoB0wxnxxyliguYkF9IO1EjU2IeaPXK1SRBVx-RmHuzC-rocSZj8p2oA6_pBU3AA9v2WkfQhBVm9V211wY_93KAmp=w1023-h767-no?authuser=0"
                        width="70%"
                        height="90%"
                        float="center"
                      ></img>
                    </div>
                  </Popup>
                  <Popup trigger = {timedPopup} setTrigger= {setTimedPopup}>
                    <h3>Hello</h3>
                  </Popup> */}

                  <a href="/signin" class="elem-1">
                    R E S U M E
                  </a>
                  <a href="/signin" class="elem-1">
                    V I S I O N
                  </a>
                </div>
              </div>

              <div class="container">
                <img
                  src={me}
                  style={{
                    marginTop: "21.5%",
                    marginLeft: "-7%",
                    width: "50%",
                    height: "155%",

                    clipPath: "polygon(20% 0, 1000% 50%, 50% 100%, 0 80%)",
                  }}
                />

                <svg width="0" height="0">
                  <defs>
                    <clipPath id="cp" clipPathUnits="objectBoundingBox">
                      <path d="M0.500, 0.945 L0.994, 0.090 L0.006, 0.090 L0.500, 0.945 L0.500, 0.650 L0.262, 0.238 L0.738, 0.237 L0.500, 0.650z"></path>
                    </clipPath>
                  </defs>
                </svg>

                <div class="triangle first"></div>
                <div class="triangle second"></div>

                <div class="text-right-side">M E A N I N G &nbsp;OC</div>
                <div class="login">
                  <a href="/signin" style={{ textDecoration: "none" }}>
                    L O G I N
                  </a>
                </div>
                <div class="signup">
                  <a href="register" style={{ textDecoration: "none" }}>
                    S I G N &nbsp; U P
                  </a>
                </div>
                <div class="circle">E X P L O R E</div>
                <div class="article">Read Article</div>

                <Pagination />
              </div>
            </div>
          </div>
        );
}

export default LandingPage
