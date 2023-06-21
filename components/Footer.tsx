import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="mt-auto">
            <div className="container">
                <div className="d-flex justify-content-between py-4 my-4 border-top">
                    <p className="fs-5 mb-0">
                        Made with ♥ by{" "}
                        <a
                            href="https://github.com/Aveek-Saha"
                            className="link fw-bold"
                        >
                            Aveek Saha
                        </a>
                    </p>
                    <ul className="list-unstyled d-flex mb-0">
                        <li className="ms-3">
                            <a className="link fs-5" href="https://github.com/Aveek-Saha/TopSpotify">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="me-1"
                                ></FontAwesomeIcon>
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
