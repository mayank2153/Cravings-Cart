import PlayStore from "../assets/img/playstoreDownload.svg"
import AppStore from "../assets/img/appstoreDownload.svg"
import logo from "../assets/img/logo_cropped-removebg-preview.png"
import { Link } from "react-router-dom";
const Footer=()=>{
    return (
        <div className="footer">
            <div className="download-banner">
                <h2 className="download-text">
                    For better experience, download the Cravings Cart app now
                </h2>
                <div className="download-links">
                    <img src={PlayStore} className="download-links-img"></img>
                    <img src={AppStore} className="download-links-img"></img>
                </div>
            </div>
            <div className="app-links">
                <div className="footer-app">
                    <Link to="/">
                        <img src={logo}></img>
                    </Link>
                </div>

                <div className="footer-company">
                    <h2 className="app-links-head">
                        Company
                    </h2>
                    <ul className="app-links-list">
                        <Link to="/about">
                        <li className="app-links-list-item">
                            About
                        </li>
                        </Link>
                        <Link to="/instamart">
                        <li className="app-links-list-item">
                            Instamart
                        </li>
                        </Link>
                        <li className="app-links-list-item">
                            Careers
                        </li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <Link to="/contact">
                    <h2 className="app-links-head">
                        Contact us
                    </h2>
                    </Link>
                    <ul className="app-links-list">
                        <li className="app-links-list-item">Help & Support</li>
                        <li className="app-links-list-item">Partner with us</li>
                        <li className="app-links-list-item">Ride with us</li>
                    </ul>
                </div>
                <div className="footer-delivery-locations">
                    <h2 className="app-links-head">
                        We deliver to:
                    </h2>
                    <ul className="app-links-list">
                        <li className="app-links-list-item">
                            Bangalore
                        </li>
                        <li className="app-links-list-item">
                            Delhi 
                        </li>
                        <li className="app-links-list-item">Gurugram</li>
                        <li className="app-links-list-item">Noida</li>
                        <li className="app-links-list-item">Mumbai</li>
                        <li className="app-links-list-item">Hyderabad</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Footer;