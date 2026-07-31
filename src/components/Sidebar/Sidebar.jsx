import "./Sidebar.css";

import {
  Brain,
  House,
  Search,
  Folder,
  Heart,
  Inbox,
  BookOpen,
  Lightbulb,
  Settings,
  Crown,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <Brain size={22} />
        </div>

        <div>
          <h2>Second Brain</h2>
          <p>Never lose an idea.</p>
        </div>
      </div>

      <nav className="menu">
        <a className="active" href="#">
          <House size={18} />
          Home
        </a>

        <a href="#">
          <Search size={18} />
          Discover
        </a>

        <a href="#">
          <Folder size={18} />
          Collections
        </a>

        <a href="#">
          <Heart size={18} />
          Favorites
        </a>

        <a href="#">
          <Inbox size={18} />
          Inbox
        </a>
      </nav>

      <div className="divider"></div>

      <h4>Categories</h4>

      <nav className="menu">
        <a href="#">
          <BookOpen size={18} />
          Read Later
        </a>

        <a href="#">
          <Lightbulb size={18} />
          Ideas
        </a>
      </nav>

      {/* <div className="pro-card">

                <Crown size={30} />

                <h3>Upgrade to Pro</h3>

                <p>
                    Unlock AI search,
                    smart summaries
                    and unlimited storage.
                </p>

                <button>
                    Upgrade
                </button>

            </div> */}

      <div className="settings">
        <Settings size={18} />
        Settings
      </div>
    </aside>
  );
}

export default Sidebar;
