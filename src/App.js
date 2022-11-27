import moment from "moment";
import PortfolioContainer from "./components/portfolio/PortfolioContainer";

export default function App() {
    return (
        <div className="app">
            <h1>David W. J. Moore Portfolio</h1>
            <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
            <PortfolioContainer />
        </div>
    );
}