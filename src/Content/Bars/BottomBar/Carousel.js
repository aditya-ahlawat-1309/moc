import React from 'react'
import "./Carousel.css"
const Carousel = () => {
    return (
      <div class="carousel-main-div" style={{ top: "20%" }}>
        <div className="slider">
          <a href="#slide-1" class="slide-number">
            1
          </a>
          <a href="#slide-2" class="slide-number">
            2
          </a>
          <a href="#slide-3" class="slide-number">
            3
          </a>
          <a href="#slide-4" class="slide-number">
            4
          </a>
          <a href="#slide-5" class="slide-number">
            5
          </a>
          <div className="slides">
            <div id="slide-1">
              <a
                href="https://collegeexpensetracker.netlify.app/"
                target="_blank"
                class="slide-1-text"
              >
                Expense Tracker
              </a>
            </div>
            <div id="slide-2">
              <a
                href="http://104.131.81.217/"
                target="_blank"
                class="slide-2-text"
              >
                MERN CAMP
              </a>
            </div>
            <div id="slide-3">
              <a
                href="https://apkfab.com/logbook/netlify.collegelogbook.app/apk?h=38538979945536a25d4cd661597497f76f52dbe01dcbe0624b6533efec1129ae"
                target="_blank"
                class="slide-3-text"
              >
                Log Book
              </a>
            </div>
            <div id="slide-4">
              <a
                href="https://auth.geeksforgeeks.org/user/adityaroyal10/practice/"
                class="slide-4-text"
                target="_blank"
              >
                Geeks for Geeks
              </a>
            </div>
            <div id="slide-5">
              <a
                href="https://www.linkedin.com/in/ad-aditya/"
                class="slide-5-text"
                target="_blank"
              >
                Linked In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Carousel

