import styles from "./Register.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Brain,
  User,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Lightbulb,
  FolderOpen,
  Link2,
} from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    try {
      const { data } = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      alert("✅ Account created successfully!");

      console.log(data);

      navigate("/login");
    } catch (error) {
      const errors = error.response?.data?.errors;

      if (errors) {
        const firstError = Object.values(errors)[0][0];
        alert(firstError);
      } else {
        alert(error.response?.data?.message || "Registration failed");
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
          Start building
          <br />
          your Second Brain.
        </h1>

        <p>
          Save your notes, files, links and ideas in one beautiful workspace.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <Sparkles size={22} />
            <div>
              <h4>Ideas</h4>
              <span>Never lose inspiration.</span>
            </div>
          </div>

          <div className={styles.card}>
            <Lightbulb size={22} />
            <div>
              <h4>Knowledge</h4>
              <span>Everything organized.</span>
            </div>
          </div>

          <div className={styles.card}>
            <FolderOpen size={22} />
            <div>
              <h4>Files</h4>
              <span>Keep your documents safe.</span>
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
          <h2>Create Account</h2>

          <p>Join Second Brain and organize everything.</p>

          <div className={styles.input}>
            <User size={18} />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <div className={styles.input}>
            <Lock size={18} />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className={styles.registerBtn} onClick={handleRegister}>
            Create Account
            <ArrowRight size={18} />
          </button>

          <p className={styles.signup}>
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
