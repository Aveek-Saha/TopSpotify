import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

import Logout from "./auth/Logout";

export default async function Navbar() {
    const session = await getServerSession(authOptions);
    return (
        <div className="row">
            <header className="header mt-4 mb-4">
                <h1 className="header__title">Top Spotify</h1>
                <p className="header__item d-flex flex-wrap align-items-center">
                    {session?.user && (
                        /* @ts-expect-error Server Component */
                        <Logout />
                    )}
                </p>
            </header>
        </div>
    );
}
