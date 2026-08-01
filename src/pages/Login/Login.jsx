import styles from "./Login.module.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Brain,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Lightbulb,
  FolderOpen,
  Link2,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { data } = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      // حفظ حالة تسجيل الدخول
      localStorage.setItem("isLoggedIn", "true");

      // (اختياري) حفظ بيانات المستخدم
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("✅ Login successful!");

      navigate("/");
    } catch (error) {
      const errors = error.response?.data?.errors;

      if (errors) {
        const firstError = Object.values(errors)[0][0];
        alert(firstError);
      } else {
        alert(error.response?.data?.message || "Invalid email or password");
      }
    }
  };

  return (
    <div className={styles.page}>
      {/* Left Side */}
      <div className={styles.left}>
        <div className={styles.logo}>
          <Brain size={38} />
          <span>Second Brain</span>
        </div>

        <h1>
          Everything you learn,
          <br />
          in one place.
        </h1>

        <p>Save notes, links, images and files. Never lose an idea again.</p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <Sparkles size={22} />
            <div>
              <h4>Ideas</h4>
              <span>Capture thoughts instantly.</span>
            </div>
          </div>

          <div className={styles.card}>
            <Lightbulb size={22} />
            <div>
              <h4>Knowledge</h4>
              <span>Organize everything you learn.</span>
            </div>
          </div>

          <div className={styles.card}>
            <FolderOpen size={22} />
            <div>
              <h4>Files</h4>
              <span>Keep documents together.</span>
            </div>
          </div>

          <div className={styles.card}>
            <Link2 size={22} />
            <div>
              <h4>Links</h4>
              <span>Save useful resources.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className={styles.right}>
        <div className={styles.form}>
          <h2>Welcome Back</h2>

          <p>Login to continue building your Second Brain.</p>

          <div className={styles.input}>
            <Mail size={18} />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.input}>
            <Lock size={18} />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className={styles.loginBtn} onClick={handleLogin}>
            Login
            <ArrowRight size={18} />
          </button>

          <div className={styles.divider}>
            <span>OR</span>
          </div>

          <button className={styles.googleBtn}>Continue with Google</button>

          <p className={styles.signup}>
            Don't have an account?
            <Link to="/register"> Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
