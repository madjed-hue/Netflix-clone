import React, { useRef } from "react";
import "./SignUp.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { auth, signInWithGoogle } from "../firebase";
function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signup">
      <div className="signup__heading">
        <h1>Sign In</h1>
      </div>
      <form>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <div className="remember">
          <div className="remember_check">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <span>Need help ?</span>
        </div>
        <div className="facebook__login">
          <FacebookIcon className="icon" color="primary" />
          <span>Login with facebook</span>
        </div>
        <div className="facebook__login">
          <GoogleIcon className="icon" color="primary" />
          <span onClick={signInWithGoogle}>Login with Google</span>
        </div>
        <div className="new__netflix">
          <span>New to Netflix ?</span>
          <span className="signe-up" onClick={register}>
            Sign Up now
          </span>
        </div>
      </form>
      <div className="page_info">
        <span>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </span>
      </div>
    </div>
  );
}

export default SignUp;
