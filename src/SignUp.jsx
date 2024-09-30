import { useState } from "react";
import './SignUp.css';

export default function SignUp() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const toggleForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div className="container">
      <button className="login-btn" onClick={toggleForm}>
        {showSignUpForm ? "Sign In" : "Sign In"}
      </button>

      {showSignUpForm && (
        <div className="form-container">
          <h2>Register</h2>
          <form className="sign-up-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" placeholder="Create a password" required />
            </div>
            <button className="submit-btn" type="submit">Register</button>
            <button className="close-btn" type="button" onClick={toggleForm}>
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
