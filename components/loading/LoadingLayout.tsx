import LoadingCardItem from "@/components/loading/LoadingCardItem";
import LoadingListItem from "./LoadingListItem";
import CardGridLayout from "../CardLayout/CardGridLayout";
import CardListLayout from "../CardLayout/CardListLayout";

export default function LoadingLayout() {
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
            <CardGridLayout>
                {[...Array(10).keys()].map((e) => {
                    return <LoadingCardItem key={e} />;
                })}
            </CardGridLayout>
            
            <CardListLayout>
                {[...Array(10).keys()].map((e) => {
                    return <LoadingListItem key={e} />;
                })}
            </CardListLayout>
        </>
    );
}
