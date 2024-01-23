import React from "react";
import "../styles/Register.scss";
import { useState } from "react";


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handlePage = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      //* this is used to concatenate the values of the previous inputs. if we remove this only the current value being written gets stored
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value
    });
  }

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form">
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={setFormData}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={setFormData}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={setFormData}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={setFormData}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password"
            value={formData.confirmPassword}
            onChange={setFormData}
            required
          />
          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={setFormData}
            required
            style={{ display: "none" }}
          ></input>
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile pic" />
            <p>Upload Your Photo</p>
          </label>
          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile pic"
              style={{maxWidth: "80px"}}
            />
          )}
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
