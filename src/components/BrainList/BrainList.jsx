import "./BrainList.css";
import BrainItem from "./BrainItem";
import { useEffect, useState } from "react";
import axios from "axios";

function BrainList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCaptures = async () => {
      try {
        const token = localStorage.getItem("token");

        const { data } = await axios.get("http://127.0.0.1:8000/api/captures", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        setItems(data);
      } catch (error) {
        console.error("Error fetching captures:", error);
      }
    };

    fetchCaptures();
  }, []);

  return (
    <section className="brain-list">
      <div className="brain-header">
        <div>
          <h2>Your Brain</h2>

          <p>Everything you've captured in one place.</p>
        </div>
      </div>

      <div className="brain-items">
        {items.length > 0 ? (
          items.map((item) => <BrainItem key={item.id} item={item} />)
        ) : (
          <p>No captures yet.</p>
        )}
      </div>
    </section>
  );
}

export default BrainList;
