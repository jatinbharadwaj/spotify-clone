import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./Player.css";
import Sidebar from "./components/Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/* sidebar */}
        <Sidebar />
        {/* BODY */}
        <Body spotify={spotify} />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Player;
