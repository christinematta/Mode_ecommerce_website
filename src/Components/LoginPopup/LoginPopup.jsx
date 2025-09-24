import React, { useState } from "react";
import "./LoginPopup.css";

const LoginPopup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="auth-overlay">
      <div className="auth-popup"></div>
      <button className="auth-close" onClick={onClose}>
        &times;
      </button>
      <h2>{isLogin ? "Login" : "Create account"}</h2>
      <form>
        <>
          <lable>Name</lable>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onchange={handelChange}
          /></>
          <lable>Email</lable>
          <input
            type="text"
            name="emal"
            placeholder="Enter your email"
            value={formData.email}
            onchange={handelChange}
            required
          />
          <lable>Password</lable>
          <input
            type="text"
            name="password"
            placeholder="Enter your name"
            value={formData.password}
            onchange={handelChange}
            required
          />
          <button type='submit'>{isLogin?"Sign In":"Sign Up"}</button>

      </form>
    </div>
  );
};

export default LoginPopup;
