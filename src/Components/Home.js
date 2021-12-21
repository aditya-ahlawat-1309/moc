import React from 'react'

import '../App.css';
import Row from "./Row"
import Banner from "./Banner";
import Nav from "./Nav"
import Footer from './Footer';
import Taskbar from './Taskbar';
import HomePage from '../Components-2/HomePage/HomePage';
function Home() {
    return (
    <div className="App">
    <Nav/>
    <Banner/>
     <HomePage/>
    <Row/>
   
    <Taskbar/>

    <Footer/>
    
    </div>
    
    )
}

export default Home
