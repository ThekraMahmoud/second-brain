import { FileUp, Upload, Tag, Circle, Calendar, Plus } from "lucide-react";

function FileForm() {
  return (
    <>
      <h3>Upload a File</h3>

      <div className="upload-box">
        <FileUp size={50} />

        <h4>Drag & Drop your file</h4>

        <p>PDF, DOCX, PPTX, ZIP...</p>

        <button className="upload-btn">
          <Upload size={18} />
          Choose File
        </button>
      </div>

      <div className="capture-options">
        <div className="option">
          <label>Category</label>

          <div className="select-box">
            <Tag size={18} />

            <select>
              <option>Reference</option>

              <option>Learning</option>

              <option>Project</option>

              <option>Document</option>
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
        <button className="save-btn">
          <Plus size={18} />
          Add to Brain
        </button>
      </div>
    </>
  );
}

export default FileForm;
