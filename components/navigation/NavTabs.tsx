"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs() {
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
            <div className="col">
                <ul className="nav nav-underline nav-justified nav-time">
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${
                                term === "short" ? "active" : ""
                            }`}
                            href={`/${type}/short`}
                        >
                            Last 4 weeks
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${
                                term === "medium" ? "active" : ""
                            }`}
                            href={`/${type}/medium`}
                        >
                            Last 6 months
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${
                                term === "long" ? "active" : ""
                            }`}
                            href={`/${type}/long`}
                        >
                            All time
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
