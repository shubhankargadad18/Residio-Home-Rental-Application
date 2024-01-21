import React from "react";
import "../styles/Register.scss";


const RegisterPage = () => {
  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form">
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            required
          />
          <input type="text" placeholder="Last Name" name="lastname" required />
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password"
            required
          />
          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            required
            style={{ display: "none" }}
          ></input>
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile pic" />
            <p>Upload Your Photo</p>
          </label>
          <button type="submit" className="button">
            REGISTER
          </button>
        </form>
        <a href="/login">Already have an account? Login Here</a>
      </div>
    </div>
  );
};

export default RegisterPage;
