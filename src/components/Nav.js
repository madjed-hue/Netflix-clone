import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav({ users }) {
  const [show, handlShow] = useState(false);
  const history = useHistory();
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handlShow(true);
    } else {
      handlShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => {
            history.push("/");
          }}
          className="nav__logo"
          src="https://cdn.worldvectorlogo.com/logos/netflix-2015-logo.svg"
          alt=""
        />
        <div className="avatar__div">
          <img
            onClick={() => {
              history.push("/Profile");
            }}
            className="nav__avatar"
            src={`${
              users?.photoURL ||
              "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            }`}
            alt=""
          />
          <span className="username">
            {" "}
            {`${users?.displayName || "username"}`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
