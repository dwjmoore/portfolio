export default function PortfolioItem(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>
        </div>
    );
}