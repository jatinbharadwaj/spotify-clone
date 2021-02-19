import React from "react";
import {
  Pt,
  Group,
  Line,
  Create,
  Sound,
  Triangle,
  Const,
  Geom,
} from "pts/dist/es5";
import "./Login.css";
import { loginUrl } from "./spotify";
import { QuickCanvas, QuickStartCanvas } from "react-pts-canvas";

function Login() {
  return (
    <div className="login">
      {/* Spotify Logo */}
      {/* <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" /> */}

      {/* Login with Button */}

      <a href={loginUrl}>LOG IN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
