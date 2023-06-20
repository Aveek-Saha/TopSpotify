"use client";

import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Logout() {
    const { data: session, status } = useSession();
    if (session) {
        return (
            <>
                <img
                    src={session.user?.image!}
                    className="rounded-circle img-thumbnail border-0 p-0 me-2 link_img img-fluid"
                    width={35}
                />
                <span className="me-2">{session.user?.name}</span> •{" "}
                <a className="ms-2 link" onClick={() => signOut()}>
                    Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </a>
            </>
        );
    }
}
