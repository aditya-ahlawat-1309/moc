import React from 'react'
import "./Banner.css" 

function Banner() {
    return (
        <header className="banner"
        style={{  
  backgroundImage: "url(" + "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2016%2F05%2FTokyo-Skyline-Night-SKYLINES0314.jpg&q=85" + ")",
  
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  height:"250px"
}}>

        <div className="banner_contents">
            <h1 className="banner_title" style={{fontSize:"2.15rem",color:"white"}}>MEANING OF CODE</h1>
        
        <div className="banner_buttons">
        
            <button className="banner_button_style" style={{fontSize:"0.75rem"}}>READ IT</button>
            <button className="banner_button_style" style={{fontSize:"0.75rem"}}>LOVE IT</button>
            <button className="banner_button_style" style={{fontSize:"0.75rem"}}>SHARE IT</button>

        </div>

        <h1 className="banner_description" style={{fontSize:"0.95rem", color:"white"}}>ONE PLACE FOR ALL YOUR REVISION</h1>
        
        </div>

        <div className="banner--fadedBottom"/>
            
        </header>
    )
}

export default Banner
