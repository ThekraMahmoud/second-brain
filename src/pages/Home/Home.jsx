import "./Home.css";
import BrainList from "../../components/BrainList/BrainList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import QuickCapture from "../../components/QuickCapture/QuickCapture";
import Focus from "../../components/Focus/Focus";
function Home() {
    return (
        <div className="home-layout">

            <Sidebar />

            <main className="home-main">

                <Header />

                <QuickCapture />

                <Focus />

                <BrainList />

            </main>
        </div>
    );
}

export default Home;