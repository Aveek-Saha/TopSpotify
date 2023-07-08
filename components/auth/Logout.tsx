import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

import LogoutButton from "./LogoutButton";

export default async function Logout() {
    const session = await getServerSession(authOptions);
    if (session) {
        return (
            <>
                <img
                    src={session.user?.image!}
                    className="rounded-circle img-thumbnail border-0 p-0 me-2 link_img img-fluid"
                    width={35}
                />
                <span className="me-2">{session.user?.name}</span> •{" "}
                <LogoutButton />
            </>
        );
    }
}
