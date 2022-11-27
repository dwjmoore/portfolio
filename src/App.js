import { Route, Routes } from "react-router-dom";
import moment from "moment";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

export default function App() {
    return (
        <div className="app">
            <h1>David W. J. Moore Portfolio</h1>
            <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
            <Routes>
                <Route path="/" element={<Navbar />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>            
        </div>
    );
}