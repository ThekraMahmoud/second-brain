import { useState } from "react";
import "./Header.css";
import LoginModal from "../LoginModal/LoginModal";
import { requireLogin } from "../../services/authGuard";
import { Bell, Search, UserCircle } from "lucide-react";

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  // مؤقتًا إلى أن نربط Laravel
  const isLoggedIn = false;

  const handleProtectedClick = () => {
    if (!requireLogin(isLoggedIn, setShowLoginModal)) return;

    // إذا كان مسجل دخول حطي الكود هنا
    console.log("User is logged in");
  };
  return (
    <header className="header">
      <div className="header-left">
        <h1>
          Good Morning
          {/* <span> Thikra 👋</span> */}
        </h1>

        <p>Welcome back! Ready to capture your ideas?</p>
      </div>

      <div className="header-right">
        <div className="search-box">
          <Search size={18} />

          <input type="text" placeholder="Search anything..." />
        </div>

        <button className="icon-btn" onClick={handleProtectedClick}>
          <Bell size={20} />
        </button>

        <button className="avatar" onClick={handleProtectedClick}>
          <UserCircle size={34} />
        </button>
      </div>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </header>
  );
}

export default Header;
