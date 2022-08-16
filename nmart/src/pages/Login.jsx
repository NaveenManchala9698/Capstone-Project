/* eslint-disable default-case */
import fire from "../fire";
import { auth } from "firebase";
import { useState, useEffect } from "react";
import "../css/Login.css";
import Home from "./Home";

const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setpasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setpasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setpasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      {user ? (
        <Home handleLogout={handleLogout} user={user} />
      ) : (
        <section className="login">
          <div className="imgContainer">
            <img src="https://images.pexels.com/photos/4173116/pexels-photo-4173116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <div className="loginContainer">
            <div className="form">
              {hasAccount ? <h2>LOG IN</h2> : <h2>SIGN UP</h2>}
              <label>Username</label>
              <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="errorMsg">{emailError}</p>
              <label>Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="errorMsg">{passwordError}</p>

              <div className="btnContainer">
                {hasAccount ? (
                  <>
                    <button onClick={handleLogin}>
                      <b>SIGN IN</b>
                    </button>
                    <p>
                      Dont' have an account ?{" "}
                      <span onClick={() => setHasAccount(!hasAccount)}>
                        Sign up
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <button className="login-button" onClick={handleSignup}>
                      <b>SIGN UP</b>
                    </button>
                    <p>
                      Have an Account?{" "}
                      <span onClick={() => setHasAccount(!hasAccount)}>
                        Sign in
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
