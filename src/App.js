import { Route, Routes } from "react-router-dom";
import moment from "moment";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import PortfolioContainer from "./components/portfolio/PortfolioContainer";

export default function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Navbar />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>

            <h1>David W. J. Moore Portfolio</h1>
            <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
            <PortfolioContainer />
        </div>
    );
}