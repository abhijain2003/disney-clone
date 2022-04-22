import React from "react";
import loginBackground from "../images/login-background.jpg";
import ctaLogoOne from "../images/cta-logo-one.png";
import ctaLogoTwo from "../images/cta-logo-two.png";

function Login() {
  console.log(loginBackground);
  return (
    <div
      style={{ backgroundImage: `url(${loginBackground})` }}
      className="Login"
    >
      <div className="loginTop">
        <img alt="logotop" src={ctaLogoOne} />
      </div>
      <div className="loginMid">
        <button>GET ALL THERE</button>
        <p>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img alt="logoBottom" src={ctaLogoTwo} />
      </div>
    </div>
  );
}

export default Login;

