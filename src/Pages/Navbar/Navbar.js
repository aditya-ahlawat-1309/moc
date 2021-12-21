import React from "react";
import "../LandingPage/LandingPage.css";
import "../LandingPage/LandingPage.scss";
import me from "../../Media/me2.jpg";
import Pagination from "../LandingPage/Pagination";
import { Component } from "react";
import Certification from "../Pop_up/Certifications/Certification";
import "./Navbar.css"
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { certification: false, page2: false, page3: false };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    this.setState({ certification: true });
    console.log("certification button clicked");
  }

  handleClick2() {
    this.setState({ page2: true });
    console.log("button2 clicked");
  }

  handleClick3() {
    this.setState({ page3: true });
    console.log("button3 clicked ");
  }

  render() {
    const certification = this.state.certification;
    return (
      <div class="navbar">
        <div>
          <div class="navbar-right">
            <div style={{ display: "flex" }}>
              <img
                src={
                  "http://static1.squarespace.com/static/5504f51ae4b00ffe14077781/5509c582e4b00acf3253bf64/5509c589e4b00acf3253c0b3/1413830999000/6.jpg?format=original"
                }
                style={{
                  marginTop: "0%",
                  marginLeft: "5%",
                  width: "4%",
                  height: "30%",
                }}
              />

              <div
                style={{
                  fontWeight: "400",
                  marginLeft: "2vw",
                  fontSize: "2rem",
                  marginTop: "0.35%",
                }}
              >
                M O C
              </div>
            </div>
          </div>
        </div>

        <div class="right-side-of-navbar">
          <div class="navbar-left">
            <div style={{ display: "flex" }}>
              <a href="/home" class="elem-nav" style={{ marginLeft: "17%" }}>
                H O M E
              </a>
              <a href="/parallax" class="elem-nav">
                A B O U T
              </a>
              {/* <a href="/courses" class="elem-nav">
                C O U R S E S
              </a> */}
              {/* {certification ? (
                <Certification />
              ) : (
                <button class="elem-1" onClick={this.handleClick1}>
                  C E R T I F I C A T I O N S
                </button>
              )} */}
              <a
                href="https://www.linkedin.com/in/ad-aditya/"
                target="_blank"
                class="elem-nav"
              >
                C E R T I F I C A T I O N S
              </a>
              <a
                href="https://www.linkedin.com/in/ad-aditya/"
                target="_blank"
                class="elem-nav"
              >
                R E S U M E
              </a>
              {/* <a href="/vision" class="elem-nav">
                V I S I O N
              </a> */}
              <a href="/logout" class="elem-nav">
                L O G O U T
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
