import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function LoadingUser() {
    return (
        <>
            <img
                src="/placeholder_300_300.jpg"
                className="rounded-circle img-thumbnail border-0 p-0 me-2 link_img img-fluid"
                width={35}
            />
            <span className="me-2"></span> •{" "}
            <a className="ms-2 placeholder col-10">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </a>
        </>
    );
}
