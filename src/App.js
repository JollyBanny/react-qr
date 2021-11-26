import React from "react";

import logoSvg from "./assets/img/logo.svg";
import arrow from "./assets/img/arrow.png";
import home from "./assets/img/home.png";

import ada from "./assets/img/devs/ada.png"
import banana from "./assets/img/devs/banana.png"
import jaba from "./assets/img/devs/jaba.png"

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src={logoSvg} alt="QR Book logo" />
            </a>
            <a href="/">
              <span>home</span>
            </a>
          </div>
          <div className="nav-bar">
            <a href="/create">
              <span>create</span>
            </a>
            <a href="/rules">
              <span>rules</span>
            </a>
            <a href="/feedback">
              <span>feedback</span>
            </a>
            <div className="dropdown">
              <div className="dropbtn">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 19C23.5913 19 26.5 16.0913 26.5 12.5C26.5 8.90875 23.5913 6 20 6C16.4087 6 13.5 8.90875 13.5 12.5C13.5 16.0913 16.4087 19 20 19ZM20 22.25C15.6612 22.25 7 24.4275 7 28.75V32H33V28.75C33 24.4275 24.3388 22.25 20 22.25Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="dropdown-content login-none">
                <a href="/login">Log in</a>
                <a href="/singup">Sing up</a>
              </div>
              <div className="dropdown-content login-user">
                <a href="/qrs">My QRs</a>
                <a href="/profile">Profile</a>
              </div>
              <div className="dropdown-content login-admin">
                <a href="myQR.html">My QRs</a>
                <a href="/profile">Profile</a>
                <a href="/admin">Admin panel</a>
              </div>
            </div>
          </div>
          <div className="popup-navbar">
            <div className="popup-btn">
              <svg
                width="29"
                height="21"
                viewBox="0 0 29 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.741943 2.32258C0.741943 1.95898 0.886384 1.61027 1.14349 1.35316C1.4006 1.09606 1.74931 0.951614 2.11291 0.951614H26.7903C27.1539 0.951614 27.5026 1.09606 27.7598 1.35316C28.0169 1.61027 28.1613 1.95898 28.1613 2.32258C28.1613 2.68619 28.0169 3.0349 27.7598 3.292C27.5026 3.54911 27.1539 3.69355 26.7903 3.69355H2.11291C1.74931 3.69355 1.4006 3.54911 1.14349 3.292C0.886384 3.0349 0.741943 2.68619 0.741943 2.32258Z"
                  fill="white"
                />
                <path
                  d="M0.741943 10.5923C0.741943 10.2286 0.886384 9.87994 1.14349 9.62283C1.4006 9.36572 1.74931 9.22128 2.11291 9.22128H26.7903C27.1539 9.22128 27.5026 9.36572 27.7598 9.62283C28.0169 9.87994 28.1613 10.2286 28.1613 10.5923C28.1613 10.9559 28.0169 11.3046 27.7598 11.5617C27.5026 11.8188 27.1539 11.9632 26.7903 11.9632H2.11291C1.74931 11.9632 1.4006 11.8188 1.14349 11.5617C0.886384 11.3046 0.741943 10.9559 0.741943 10.5923Z"
                  fill="white"
                />
                <path
                  d="M2.11291 17.491C1.74931 17.491 1.4006 17.6354 1.14349 17.8925C0.886384 18.1496 0.741943 18.4983 0.741943 18.8619C0.741943 19.2255 0.886384 19.5742 1.14349 19.8314C1.4006 20.0885 1.74931 20.2329 2.11291 20.2329H26.7903C27.1539 20.2329 27.5026 20.0885 27.7598 19.8314C28.0169 19.5742 28.1613 19.2255 28.1613 18.8619C28.1613 18.4983 28.0169 18.1496 27.7598 17.8925C27.5026 17.6354 27.1539 17.491 26.7903 17.491H2.11291Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="popup-content">
              <a href="/">Home</a>
              <a href="/create">Create</a>
              <a href="/rules">Rules</a>
              <a href="/singup">Sing up</a>
              <a href="/feedback">Feedback</a>
              <a href="/login">Login</a>
            </div>
            <div className="popup-content">
              <a href="/">Home</a>
              <a href="/create">Create</a>
              <a href="/rules">Rules</a>
              <a href="/profile">Profile</a>
              <a href="/feedback">Feedback</a>
              <a href="/myqrs">My QRs</a>
            </div>
            <div className="popup-content">
              <a href="/">Home</a>
              <a href="/create">Create</a>
              <a href="/rules">Rules</a>
              <a href="/profile">Profile</a>
              <a href="/feedback">Feedback</a>
              <a href="/myqrs">My QRs</a>
              <a href="/admin">Admin</a>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div id="main-qr">
            <img src={home} alt="" />
          </div>
          <div className="content">
            <h1>QR Book</h1>
            <div id="mobile-qr">
              <img src={home} alt="" />
            </div>
            <p>QR codes are an easy way to share information with the world.</p>
            <p>
              The aim of project is to make the creating of QR codes simple and
              clear for you. You can create uniquely designed Qr’s and track
              statistics.
            </p>
            <div className="create">
              <img src={arrow} width="192" height="192" alt="" />
              <a href="/create" className="link button">
                {" "}
                Create{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <span className="created-by">created by</span>
          <div className="developers">
            <div className="dev">
              <img src={jaba} alt="" />
            </div>
            <div className="dev">
              <img src={banana} alt="" />
            </div>
            <div className="dev">
              <img src={ada} alt="" />
            </div>
          </div>
          <span className="year"> 2021</span>
        </div>
      </div>
    </div>
  );
}

export default App;
