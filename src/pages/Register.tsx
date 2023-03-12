import React from "react";
import "../styles.scss";
import { FcAddImage } from "react-icons/fc";

const Register = () => {
  return (
    <div className="loginFormContainer">
      <div className="loginFormWrapper">
        <h2>Sandesh Chat App</h2>
        <form>
          <input name="fullname" type="text" placeholder="Full Name" required />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <label htmlFor="profileimage">
            <FcAddImage size={30} /> <span>Upload your image</span>
          </label>
          <input type="file" name="profileimage" id="profileimage" />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?
          <br />
          Login here!
        </p>
      </div>
    </div>
  );
};

export default Register;