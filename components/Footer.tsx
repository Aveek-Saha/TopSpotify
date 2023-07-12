import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="mt-auto">
            <div className="container">
                <div className=" d-flex align-items-center justify-content-between py-4 my-4 border-top nav nav-justified">
                    <div className="nav-item">
                        <p className="mb-0 fs-5">
                            Made by{" "}
                            <a
                                href="https://github.com/Aveek-Saha"
                                className="link fw-bold"
                            >
                                Aveek Saha
                            </a>
                        </p>
                    </div>
                    <div className="nav-item">
                        <p className="mb-0 fw-light small text-center">
                            This project is not affiliated with Spotify or it's
                            partners.
                        </p>
                    </div>
                    <div className="nav-item">
                        <p className="mb-0 fs-5">
                            <a
                                className="link"
                                href="https://github.com/Aveek-Saha/TopSpotify"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="me-1"
                                ></FontAwesomeIcon>
                                GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
