import { useState } from "react";
import axios from "axios";
import LoginModal from "../LoginModal/LoginModal";
import { Type, Tag, Circle, Calendar, Plus } from "lucide-react";

function NoteForm() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Learning");
  const [status, setStatus] = useState("Not Started");

  const handleSave = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setShowLoginModal(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/captures",
        {
          type: "note",
          title,
          content,
          category,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        },
      );

      console.log(response.data);

      alert("Note added successfully!");

      setTitle("");
      setContent("");
      setCategory("Learning");
      setStatus("Not Started");
    } catch (error) {
      console.error(error);

      console.log(error.response?.data);

      alert(error.response?.data?.message || "Failed to save note.");
    }
  };

  return (
    <>
      <h3>Write a Note</h3>

      <div className="note-title">
        <Type size={18} />
        <input
          type="text"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <textarea
        className="note-area"
        placeholder="Write anything you don't want to forget..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="capture-options">
        <div className="option">
          <label>Category</label>

          <div className="select-box">
            <Tag size={18} />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
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
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
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
