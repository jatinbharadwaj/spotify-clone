import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        {/* sidebar */}
        <Sidebar />
        {/* BODY */}
        <Body />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Player;
