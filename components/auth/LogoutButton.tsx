"use client";

import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function LogoutButton() {
    const { data: session, status } = useSession();
    if (session) {
        return (
            <a className="ms-2 link" onClick={() => signOut()}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </a>
        );
    }
    return (
        <a className="ms-2 link disabled">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </a>
    );
}
