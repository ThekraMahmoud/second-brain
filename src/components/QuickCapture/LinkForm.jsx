import { useState, useContext } from "react";
import { BrainContext } from "../../context/BrainContext";

import {
    Link2,
    Tag,
    Circle,
    Calendar,
    Plus,
} from "lucide-react";

function LinkForm() {

    const { addItem } = useContext(BrainContext);

    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("Learning");
    const [status, setStatus] = useState("Not Started");
    const [reminder, setReminder] = useState("No Reminder");

    function handleSave() {

        if (!url.trim()) {
            alert("Please enter a link.");
            return;
        }

        addItem({
            id: crypto.randomUUID(),
            type: "link",
            title: url,
            url,
            category,
            status,
            reminder,
            createdAt: new Date().toISOString(),
        });

        setUrl("");
        setCategory("Learning");
        setStatus("Not Started");
        setReminder("No Reminder");
    }

    return (
        <>
            <h3>Save a Link</h3>

            <div className="link-input">
                <Link2 size={18} />

                <input
                    type="text"
                    placeholder="Paste YouTube, GitHub, Medium, X..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </div>

            <p className="hint">
                We'll automatically detect the website, title and favicon.
            </p>

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
                            <option>Project</option>
                            <option>Idea</option>
                        </select>

                    </div>
                </div>

                <div className="option">
                    <label>Status</label>

                    <div className="select-box">
                        <Circle size={18} />

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
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

                        <select
                            value={reminder}
                            onChange={(e) => setReminder(e.target.value)}
                        >
                            <option>No Reminder</option>
                            <option>Tomorrow</option>
                            <option>Next Week</option>
                            <option>Next Month</option>
                        </select>

                    </div>
                </div>

            </div>

            <div className="capture-footer">

                <button
                    className="save-btn"
                    onClick={handleSave}
                >
                    <Plus size={18} />
                    Add to Brain
                </button>

            </div>

        </>
    );
}

export default LinkForm;