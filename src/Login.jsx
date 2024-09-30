import { useState } from "react";
import './Login.css';

export default function Login() {
    const [showForm, setShowForm] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div className="container">
            <button className="login-btn" onClick={() => setShowForm(true)}>Login</button>

            {showForm && (
                <div className="modal-overlay">
                    <div className="auth-modal">
                        <h2>{isLoginForm ? "Login" : "Register"}</h2>
                        <form>
                            {isLoginForm ? (
                                <>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                                    </div>
                                    <button className="submit-btn" type="submit">Login</button>
                                </>
                            ) : (
                                <>
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" id="name" name="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input type="password" id="password" name="password" placeholder="Create a password" />
                                    </div>
                                    <button className="submit-btn" type="submit">Register</button>
                                </>
                            )}
                        </form>

                        <p className="toggle-form">
                            {isLoginForm ? (
                                <>Don't have an account? <button className="link-btn" onClick={toggleForm}>Register</button></>
                            ) : (
                                <>Already have an account? <button className="link-btn" onClick={toggleForm}>Login</button></>
                            )}
                        </p>

                        <button className="close-btn" onClick={() => setShowForm(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}