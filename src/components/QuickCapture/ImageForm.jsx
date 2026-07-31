import {
    ImagePlus,
    Upload,
    Tag,
    Circle,
    Calendar,
    Plus,
} from "lucide-react";

function ImageForm() {
    return (
        <>

            <h3>Upload an Image</h3>

            <div className="upload-box">

                <ImagePlus size={50} />

                <h4>Drag & Drop your image</h4>

                <p>
                    PNG, JPG or WEBP
                </p>

                <button className="upload-btn">

                    <Upload size={18} />

                    Choose Image

                </button>

            </div>

            <div className="capture-options">

                <div className="option">

                    <label>Category</label>

                    <div className="select-box">

                        <Tag size={18} />

                        <select>

                            <option>Inspiration</option>
                            <option>Learning</option>
                            <option>Reference</option>
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

export default ImageForm;