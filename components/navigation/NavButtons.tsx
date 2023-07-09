"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faMicrophone } from "@fortawesome/free-solid-svg-icons";

export default function NavButtons() {
    const pathname = usePathname();
    const paths = pathname!.split("/");
    let term, type;
    if (paths.length === 2) {
        term = "short";
        type = "tracks";
    } else {
        term = paths.at(-1);
        type = paths.at(-2);
    }

    return (
        <div className="row mb-4">
            <div className="col"></div>
            <div className="col-10 col-sm-8 col-md-4">
                <ul className="nav nav-pills nav-fill nav-buttons">
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${
                                type === "tracks" ? "active" : ""
                            }`}
                            href={`/tracks/${term}`}
                        >
                            <FontAwesomeIcon icon={faMusic} className="me-2" />
                            Tracks
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${
                                type === "artists" ? "active" : ""
                            }`}
                            href={`/artists/${term}`}
                        >
                            <FontAwesomeIcon
                                icon={faMicrophone}
                                className="me-2"
                            />
                            Artists
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col"></div>
        </div>
    );
}
