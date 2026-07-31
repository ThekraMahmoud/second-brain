import "./LoginModal.css";
import { X, Brain, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function LoginModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        <div className="modal-icon">
          <Brain size={36} />
        </div>

        <h2>Save your ideas forever</h2>

        <p>
          Create an account to keep your notes, images and files safely inside
          your Second Brain.
        </p>

        <div className="features">
          <div className="feature">
            <CheckCircle2 size={18} />
            <span>Save unlimited notes</span>
          </div>

          <div className="feature">
            <CheckCircle2 size={18} />
            <span>Upload images & files</span>
          </div>

          <div className="feature">
            <CheckCircle2 size={18} />
            <span>Access from anywhere</span>
          </div>
        </div>

        <button className="primary-btn" onClick={() => navigate("/login")}>
          Login
        </button>

        <button className="secondary-btn" onClick={() => navigate("/register")}>
          Create Free Account
        </button>

        <button className="later-btn" onClick={onClose}>
          Maybe later
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
