import React from "react";
import "./Certification.css";
function Certification(props) {
  return (props.trigger) ? (
    <div class="certification">
    
      <button class="close-btn" onClick={() => props.setTrigger(false)}>
        close
      </button>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Certification;
