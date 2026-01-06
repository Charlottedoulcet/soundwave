import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import "./Join.css";

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("soundwaveUsers") || "[]");

    const newUser = {
      ...formData,
      id: Date.now(),
      joinedAt: new Date().toISOString(),
    };
    existingUsers.push(newUser);

    localStorage.setItem("soundwaveUsers", JSON.stringify(existingUsers));

    console.log("User saved to localStorage:", newUser);
    console.log("All users:", existingUsers);

    alert(`Welcome to SoundWave, ${formData.name}!`);

    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="join-page">
      <div className="join-container">
        <div className="join-content">
          <h1 className="join-title">
            Join the <span className="highlight">fun.</span>
          </h1>
        </div>
        <div className="join-form-card">
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Name:"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <FormInput
              label="Email:"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <FormInput
              label="Password:"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
            >
              Join Now
            </Button>
          </form>
        </div>
      </div>
      <div className="join-circle join-circle-1"></div>
      <div className="join-circle join-circle-2"></div>
    </div>
  );
};

export default Join;
