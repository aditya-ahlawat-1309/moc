import React from 'react'

import Navbar from '../../Pages/Navbar/Navbar'
import BottomBar from '../Bars/BottomBar/BottomBar'
import Carousel from '../Bars/BottomBar/Carousel'

const Home = () => {
    return (
      <div>
        <Navbar />
        <div style={{fontSize:"5rem" , marginTop:"1.5%"}}>&nbsp;&nbsp;Projects </div>
        <div>
          <Carousel />
        </div>
        <BottomBar />
      </div>
    );
}

export default Home
