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
  const [display_pic, setDisplay_pic] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const submitErrors = {};

    if (!email.includes("@")) {
      submitErrors.emailAt = "Please enter a valid email";
    }

    if (!email.includes(".")) {
      submitErrors.emailDot = "Please enter a valid email";
    }

    if (username.length < 4 || username.length > 50) {
      submitErrors.usernameLength =
        "Please enter a username between 4 and 50 characters";
    }

    if (password.length < 6 || password.length > 50) {
      submitErrors.passwordLength =
        "Please enter a password between 6 and 50 characters";
    }

    if (password !== confirmPassword) {
      submitErrors.password =
        "Confirm Password field must be the same as the Password field";
    }

    if (Object.keys(submitErrors).length > 0) {
      return setErrors(submitErrors);
    }

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
          <form className="form-container" onSubmit={handleSubmit}>
            {/* <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul> */}
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
              <div className="form-error-container">
                {errors && errors.email && (
                  <p className="Form-error">{errors.email}</p>
                )}
                {errors && errors.emailAt && (
                  <p className="Form-error">{errors.emailAt}</p>
                )}
              </div>
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
              <div className="form-error-container">
                {errors && errors.username && (
                  <p className="form-error">{errors.username}</p>
                )}
                {errors && errors.usernameLength && (
                  <p className="form-error">{errors.usernameLength}</p>
                )}
              </div>
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
              <div className="form-error-container">
                {errors && errors.password && (
                  <p className="form-error">{errors.password}</p>
                )}
                {errors && errors.passwordLength && (
                  <p className="form-error">{errors.passwordLength}</p>
                )}
              </div>
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
