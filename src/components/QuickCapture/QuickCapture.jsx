import { useState } from "react";

import "./QuickCapture.css";

import {
    Link2,
    FileText,
    Image,
    Paperclip,
} from "lucide-react";

import LinkForm from "./LinkForm";
import NoteForm from "./NoteForm";
import ImageForm from "./ImageForm";
import FileForm from "./FileForm";

function QuickCapture() {

    const [activeTab, setActiveTab] = useState("link");

    return (

        <section className="capture-card">

            <div className="capture-tabs">

                <button
                    className={activeTab === "link" ? "active" : ""}
                    onClick={() => setActiveTab("link")}
                >
                    <Link2 size={18} />
                    <span>Link</span>
                </button>

                <button
                    className={activeTab === "note" ? "active" : ""}
                    onClick={() => setActiveTab("note")}
                >
                    <FileText size={18} />
                    <span>Note</span>
                </button>

                <button
                    className={activeTab === "image" ? "active" : ""}
                    onClick={() => setActiveTab("image")}
                >
                    <Image size={18} />
                    <span>Image</span>
                </button>

                <button
                    className={activeTab === "file" ? "active" : ""}
                    onClick={() => setActiveTab("file")}
                >
                    <Paperclip size={18} />
                    <span>File</span>
                </button>

            </div>

            <div className="capture-content">

                {activeTab === "link" && <LinkForm type="link" />}

                {activeTab === "note" && <NoteForm type="note" />}

                {activeTab === "image" && <ImageForm type="image" />}

                {activeTab === "file" && <FileForm type="file" />}
            </div>

        </section>

    );
}

export default QuickCapture;