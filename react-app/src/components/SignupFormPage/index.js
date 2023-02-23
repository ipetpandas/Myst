import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [display_pic, setDisplay_pic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(
        signUp(username, email, display_pic, password)
      );
      if (data) {
        setErrors(data);
      }
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  return (
    <div className="entire-login-container">
      <div className="login-container">
        <div className="left-banner">
          <div className="myst-login-logo">
            <span className="logo-icon">
              <i className="fa-solid fa-cloud-bolt fa-lg"></i>
            </span>
            <span className="logo-text">Myst</span>
          </div>
        </div>
        <div className="login-form-container">
          <div className="input-main-header">Sign Up</div>
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div className="input-container">
              <label>
                <div className="input-label">Email Address</div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                <div className="input-label">Username</div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                <div className="input-label">Avatar URL</div>
                <input
                  type="text"
                  value={display_pic}
                  onChange={(e) => setDisplay_pic(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                <div className="input-label">Password</div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                <div className="input-label">Confirm Password</div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="login-button-container">
              <button type="submit">Sign Up</button>
            </div>
          </form>
          <div
            role="button"
            onClick={() => history.push("/")}
            className="go-back"
          >
            <i className="fa-solid fa-arrow-left-long"></i>
            &nbsp;Back
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupFormPage;
