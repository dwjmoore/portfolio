import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../images/contact-pic.jpg";

export default function () {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + contactPagePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className="text">314-707-1258</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className="text">dwjmoore@gmail.com</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>

                        <div className="text">Salt Lake City, UT</div>
                    </div>
                </div>
            </div>
        </div>
    );
}