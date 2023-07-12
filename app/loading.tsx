import LoadingCard from "@/components/loading/LoadingCard";

export default function Loading() {
    return (
        <>
            <div className="row mb-4">
                <div className="col"></div>
                <div className="col-10 col-sm-8 col-md-4">
                    <ul className="nav nav-pills nav-fill nav-buttons placeholder-glow">
                        <li className="nav-item">
                            <a className={`nav-link`}>
                                <h4>
                                    <span className="placeholder col-12"></span>
                                </h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link`}>
                                <h4>
                                    <span className="placeholder col-12"></span>
                                </h4>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col"></div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <ul className="nav nav-underline nav-justified nav-loading-time placeholder-glow">
                        <li className="nav-item">
                            <a className={`nav-link`}>
                                <span className="placeholder col-7"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link`}>
                                <span className="placeholder col-7"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link`}>
                                <span className="placeholder col-7"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row row-cols-2 row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2 g-4 justify-content-center mb-4">
                {[...Array(10).keys()].map((e) => {
                    return <LoadingCard key={e} />;
                })}
            </div>
        </>
    );
}
