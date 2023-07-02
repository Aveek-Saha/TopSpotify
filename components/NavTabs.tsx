export default function NavTabs() {
    return (
        <div className="row mb-4">
            <div className="col"></div>
            <ul className="nav nav-underline nav-fill nav-time">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Last 4 weeks
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Last 6 months
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        All time
                    </a>
                </li>
            </ul>
        </div>
    );
}
