import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "./LoginForm.css";
import { thunkReadUserCart } from "../../store/carts";

function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    dispatch(thunkReadUserCart());
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = (e) => {
    e.preventDefault();
    const data = dispatch(login("demo-lition@aa.io", "password"))
      .then(() => history.push("/"))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    return data;
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
          <div className="input-main-header">Welcome back to Myst</div>
          <form className="form-container" onSubmit={handleSubmit}>
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
                <div className="input-label">Password</div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="login-errors-container">
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
            </div>
            <div className="login-button-container">
              <button type="submit">Log In</button>
            </div>
            <div className="login-button-container">
              <button onClick={demoLogin} type="submit">
                Demo User
              </button>
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

export default LoginFormPage;
