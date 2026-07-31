import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import { Type, Tag, Circle, Calendar, Plus } from "lucide-react";

function NoteForm() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  // مؤقتًا إلى أن نربط Laravel
  const isLoggedIn = false;

  const handleSave = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    // هنا لاحقًا سنرسل البيانات إلى Laravel
    console.log("Saving...");
  };
  return (
    <>
      <h3>Write a Note</h3>

      <div className="note-title">
        <Type size={18} />

        <input type="text" placeholder="Note title..." />
      </div>

      <textarea
        className="note-area"
        placeholder="Write anything you don't want to forget..."
      />

      <div className="capture-options">
        <div className="option">
          <label>Category</label>

          <div className="select-box">
            <Tag size={18} />

            <select>
              <option>Learning</option>
              <option>Reference</option>
              <option>Idea</option>
              <option>Project</option>
            </select>
          </div>
        </div>

        <div className="option">
          <label>Status</label>

          <div className="select-box">
            <Circle size={18} />

            <select>
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        <div className="option">
          <label>Reminder</label>

          <div className="select-box">
            <Calendar size={18} />

            <select>
              <option>No Reminder</option>
              <option>Tomorrow</option>
              <option>Next Week</option>
              <option>Next Month</option>
            </select>
          </div>
        </div>
      </div>

      <div className="capture-footer">
        <button className="save-btn" onClick={handleSave}>
          <Plus size={18} />
          Add to Brain
        </button>
      </div>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}

export default NoteForm;
