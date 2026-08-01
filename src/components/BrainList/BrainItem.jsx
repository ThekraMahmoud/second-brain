import { MoreHorizontal, FileText, Link2, Image, File } from "lucide-react";

function BrainItem({ item }) {
  const getIcon = () => {
    switch (item.type) {
      case "note":
        return <FileText size={22} />;

      case "link":
        return <Link2 size={22} />;

      case "image":
        return <Image size={22} />;

      case "file":
        return <File size={22} />;

      default:
        return <FileText size={22} />;
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <article className="brain-item">
      <div className="brain-left">
        <div className="brain-icon">{getIcon()}</div>

        <div>
          <h3>{item.title}</h3>

          <p>{item.content || item.url || "No description"}</p>
        </div>
      </div>

      <div className="brain-info">
        <span className="category">{item.category}</span>

        <span
          className={`status ${item.status?.replace(/\s/g, "").toLowerCase()}`}
        >
          {item.status}
        </span>

        <span className="date">{formatDate(item.created_at)}</span>

        <button className="menu-btn">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </article>
  );
}

export default BrainItem;
