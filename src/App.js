import "./App.css";
import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Login from "./components/Login";
import Home from "./components/Home";
import logo from "./images/logo.png";
import HomeIcon from "./images/home-icon.svg";
import MovieIcon from "./images/movie-icon.svg";
import originalIcon from "./images/original-icon.svg";
import searchIcon from "./images/search-icon.svg";
import seriesIcon from "./images/series-icon.svg";
import watchlistIcon from "./images/watchlist-icon.svg";

function App() {
  const clientId =
    "960223441394-6u67eaf2iafknqckm1j27rbvg6365p61.apps.googleusercontent.com";

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [imgURL, setImgURL] = useState("");
  const [showHome, setShowHome] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
    setShowHome(true);
    setImgURL(res.profileObj.imageUrl);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowHome(false);
    setShowlogoutButton(false);
  };

  return (
    <div className="App">
      <div className="Header">
        <img alt="logo" height="50px" src={logo} />

        {showHome ? (
          <div className="showNav">
            <div className="showNavItem">
              <img alt="nav" src={HomeIcon} />
              <span>Home</span>
            </div>
            <div className="showNavItem">
              <img alt="nav" src={searchIcon} />
              <span>SEARCH</span>
            </div>
            <div className="showNavItem">
              <img alt="nav" src={watchlistIcon} />
              <span>WATCHLIST</span>
            </div>
            <div className="showNavItem">
              <img alt="nav" src={originalIcon} />
              <span>ORIGINALS</span>
            </div>
            <div className="showNavItem">
              <img alt="nav" src={MovieIcon} />
              <span>MOVIES</span>
            </div>
            <div className="showNavItem">
              <img alt="nav" src={seriesIcon} />
              <span>MOVIES</span>
            </div>
          </div>
        ) : null}

        {showloginButton ? (
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={{
                  backgroundColor: "black",
                  border: "1px solid white",
                  color: "white",
                  height: "40px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  width: "100px",
                  cursor: "pointer",
                  letterSpacing: "1px",
                  margin: "auto 0",
                  textAlign: "center",
                }}
              >
                LOGIN
              </button>
            )}
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        ) : null}

        {showlogoutButton ? (
          <GoogleLogout
            clientId={clientId}
            render={(renderProps) => (
              <img
                alt=""
                src={imgURL}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={{
                  height: "40px",
                  width: "40px",
                  margin: "auto 0",
                  borderRadius: "50%",
                }}
              />
            )}
            onLogoutSuccess={onSignoutSuccess}
          ></GoogleLogout>
        ) : null}
      </div>
      {showHome ? <Home /> : <Login />}
    </div>
  );
}

export default App;
