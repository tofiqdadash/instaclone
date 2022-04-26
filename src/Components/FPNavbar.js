import React from "react";

const FPNavbar = () => {
  return (
    <nav className="fp--nav">
      <img
        className="instagram-handwriting"
        src="../assets/instagram_logo.png"
        alt="instagram logo"
      />
      <ul className="fp--nav-icons">
        <img src="../assets/Menu-Button-Item.png" alt="main page icon" />
        <img src="../assets/messages-button.png" alt="message icon" />
        <img src="../assets/add_icon.png" alt="add icon icon" />
        <img src="../assets/compas.png" alt="compas icon" />
        <img src="../assets/heart.png" alt="heart icon" />
      </ul>
    </nav>
  );
};

export default FPNavbar;
