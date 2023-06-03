import React from "react";
import Login from "../OwnerProfile/loginPage.png";
import Google from "../OwnerProfile/Google (icon — Colour).png";

const Profile = () => {
  return (
    <div className="login">
      <div>
        <img src={Login} alt="login" />
      </div>
      <div>
        <form action="text">
          <input type="email" name="Email-ID" id="email" />
          <input type="password" name="password" id="password" />
        </form>
        <div>----Or login with your gmail---</div>
        <div>
          <img src={Google} alt="google" /> Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Profile;
