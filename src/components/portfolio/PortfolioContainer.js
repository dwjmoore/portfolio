import { useState } from "react";
import PortfolioItem from "./PortfolioItem";

export default function PortfolioContainer() {
    const [pageTitle, setPageTitle] = useState("Welcome to my portfolio");
    const [data, setData] = useState([
        { title: "Quip", category: "eCommerce" },
        { title: "Eventbrite", category: "Scheduling" },
        { title: "Ministry Safe", category: "Enterprise" },
        { title: "SwingAway", category: "eCommerce" }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFilter = (filter) => {
        setData(data.filter(item => {
            return item.category === filter;
        }))
    }

    const portfolioItems = () => {
        return data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />
        });
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{pageTitle}</h2>

            <button onClick={() => handleFilter("eCommerce")}>
                eCommerce
            </button>
            <button onClick={() => handleFilter("Scheduling")}>
                Scheduling
            </button>
            <button onClick={() => handleFilter("Enterprise")}>
                Enterprise
            </button>

            {portfolioItems()}
        </div>
    );
}