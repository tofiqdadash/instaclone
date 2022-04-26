import React from "react";

const FPFooter = () => {
  return (
    <div className="post-footer">
      <ul className="post-footer-leftside">
        <img src="./assets/like.png" alt="like icon" />
        <img src="./assets/chat.png" alt="comment icon" style={{width: "33px"}} />
        <img src="./assets/send.png" alt="share icon" />
      </ul>
      <img
        className="save-icon"
        src="./assets/save-button.png"
        alt="save icon"
      />
    </div>
  );
};

export default FPFooter;
