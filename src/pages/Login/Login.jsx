import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { Mail, Lock, Brain, ArrowRight } from "lucide-react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const handleLogin = async () => {
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/login",
            {
                email,
                password,
            }
        );

        console.log(response.data);

    } catch (error) {
        console.log(error.response.data);
    }
};

    return (
        <div className="login-page">
            <div className="login-left">
                <div className="overlay"></div>

                <div className="hero">
                    <div className="logo">
                        <Brain size={34} />
                    </div>

                    <h1>Second Brain</h1>

                    <p>
                        Save everything in one place.
                        <br />
                        Links, notes, files, images and ideas.
                    </p>
                </div>
            </div>

            <div className="login-right">
                <div className="login-card">

                    <h2>Welcome Back 👋</h2>

                    <p>
                        Login to continue building your second brain.
                    </p>

                    <div className="input-box">
                        <Mail size={18} />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-box">
                        <Lock size={18} />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        className="login-btn"
                        onClick={handleLogin}
                    >
                        Login
                        <ArrowRight size={18} />
                    </button>

                    <div className="divider">
                        <span>OR</span>
                    </div>

                    <button className="google-btn">
                        Continue with Google
                    </button>

                    <p className="signup">
                        Don't have an account?
                        <span>Create account</span>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Login;