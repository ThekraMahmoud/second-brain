import "./BrainList.css";
import BrainItem from "./BrainItem";

function BrainList() {

    const items = [
        {
            id: 1,
            icon: "🎥",
            title: "React Router Complete Guide",
            source: "YouTube",
            category: "Learning",
            status: "Not Started",
            date: "Today",
        },
        {
            id: 2,
            icon: "💡",
            title: "Second Brain startup idea",
            source: "Idea",
            category: "Project",
            status: "In Progress",
            date: "Yesterday",
        },
        {
            id: 3,
            icon: "📄",
            title: "Machine Learning Roadmap.pdf",
            source: "PDF",
            category: "Reference",
            status: "Completed",
            date: "2 days ago",
        },
    ];

    return (
        <section className="brain-list">

            <div className="brain-header">

                <div>

                    <h2>Your Brain</h2>

                    <p>
                        Everything you've captured in one place.
                    </p>

                </div>

            </div>

            <div className="brain-items">

                {items.map((item) => (
                    <BrainItem key={item.id} item={item} />
                ))}

            </div>

        </section>
    );
}

export default BrainList;