import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "./Nav";
import Plans from "./Plans";
import "./Profile.css";

function Profile({ users }) {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Nav users={users} />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src={`${
              users?.photoURL ||
              "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            }`}
            alt=""
          />
          <div className="profile__details">
            <h2>{user?.email || users?.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <Plans />
              <button
                onClick={() => {
                  auth.signOut();
                }}
                className="profile__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
