import "./Focus.css";
import { ArrowRight, Clock4, Sparkles } from "lucide-react";

function Focus() {
    return (
        <section className="focus-card">

            <div className="focus-header">

                <Sparkles size={18} />

                <span>Today's Focus</span>

            </div>

            <div className="focus-content">

                <div className="focus-left">

                    <h2>Continue where you left off</h2>

                    <h3>Machine Learning Roadmap.pdf</h3>

                    <p>
                        Last opened yesterday • You were reading Chapter 4
                    </p>

                </div>

                <button className="focus-btn">

                    Continue

                    <ArrowRight size={18} />

                </button>

            </div>

            <div className="focus-footer">

                <Clock4 size={16} />

                <span>
                    Next reminder • Today at 7:00 PM
                </span>

            </div>

        </section>
    );
}

export default Focus;