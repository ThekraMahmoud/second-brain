import { MoreHorizontal } from "lucide-react";

function BrainItem({ item }) {
    return (
        <article className="brain-item">

            <div className="brain-left">

                <div className="brain-icon">

                    {item.icon}

                </div>

                <div>

                    <h3>{item.title}</h3>

                    <p>{item.source}</p>

                </div>

            </div>

            <div className="brain-info">

                <span className="category">
                    {item.category}
                </span>

                <span className={`status ${item.status.replace(/\s/g, "").toLowerCase()}`}>
                    {item.status}
                </span>

                <span className="date">
                    {item.date}
                </span>

                <button className="menu-btn">

                    <MoreHorizontal size={18} />

                </button>

            </div>

        </article>
    );
}

export default BrainItem;