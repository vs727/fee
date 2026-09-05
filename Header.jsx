import React, { useState } from "react";

function Header() {
  const [theme, setTheme] = useState("light");

  function handleClick() {
    if (theme === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "skyblue";
      setTheme("dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setTheme("light");
    }
  }
  return (
    <div
      className="fx bg1"
      style={{
        height: "2.5rem",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "1.5rem" }}>&#9812;</div>
      <div className="fx">
        <input type="text" placeholder="search" />
      </div>
      <div className="fx">
        <a href="#">Link1</a>
        <a href="#">Link2</a>
        <a href="#">Link3</a>
      </div>
      <button
        className="btn1"
        onClick={handleClick}
        style={{ backgroundColor: "hsl(215,100%,60%)", color: "white" }}
      >
        Theme
      </button>
    </div>
  );
}

export default Header;
