import React from 'react'
import Popup from "../Pages/Pop_up/Certifications/Popup"
import { useEffect,useState } from 'react';
function E() {
     const [buttonPopup, setButtonPopup] = useState(false);
     const [timedPopup, setTimedPopup] = useState(false);

     useEffect(() => {
       setTimeout(() => {
         setTimeout(true);
       }, 3000);
     }, []);
    return (
      <div>
        <button
          class="elem-1"
          //onClick={this.handleClick1}
          onClick={() => setButtonPopup(true)}
        >
          C E R T I F I C A T I O N S
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div class="certification">
            <img
              src="https://lh3.googleusercontent.com/4KLVplzRDRXQdC1EcBSLNX-wW_Jc6arXinyHVq2fqOlelxXzxrGPBzWp5aVXWQWSJiZb41XkKqaBfNot73Rc393mMCdt4JZqfffGnGPl9cLLg-yYsgyI9uD6YrrNOwzncdvZc3FYb8qA35QjIr7J-dGQrayRUuXpq9KZt2NYMFVyOc8MOTJEyYEtkDl2qvhVHiwwnB6GZClpyEwa0hFYDSGpAfapxYbqYd9aNMJMj1M3pKOZE9REBoX0U3os6UgLMchcuMNaeo_Tl8g3dJlIa5u7oQGOVKCpKz_iqYJ698YTyB5r-ZuTXBt2tdpX1CSf6kA10lTT-v-G3vyO7LUR2mqOOCl8y-t_WC-RY7iGxc0lyRGwlvwMOW8_E7HldjZgEfPhNCrsp6-1X-fSX0SRMH7o_AbiMfd3G8bJ4pxjSyRIPXz7316Uzx4tyOPq4YECpPBBIcyYl-Ici_pk3AStJrrhFLnOxpAOHUaqwapzxxG8ew30Qu3PGK3JMcmjkaOiPfa3-cZ8uqJrV0f0wzngU9yOXe0mdoMWXGt66t5XneEq0yYcibqoREpc1oQSX9oun4bze5FvcYeHiu8eqSOfWEHIez3VN72IdB_r4kpEQLtuTUg1vw2--SVzqLl2xNyNoB0wxnxxyliguYkF9IO1EjU2IeaPXK1SRBVx-RmHuzC-rocSZj8p2oA6_pBU3AA9v2WkfQhBVm9V211wY_93KAmp=w1023-h767-no?authuser=0"
              width="700%"
              height="900%"
              float="center"
            ></img>
          </div>
        </Popup>
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <h3>Hello</h3>
        </Popup>
      </div>
    );
}

export default E
