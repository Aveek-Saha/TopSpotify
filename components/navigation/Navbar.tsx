import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { Suspense } from "react";
import LoadingUser from "../loading/LoadingUser";

import Logout from "../auth/Logout";

export default async function Navbar() {
    const session = await getServerSession(authOptions);
    return (
        <div className="row">
            <header className="header my-4 d-flex align-items-center">
                <h1 className="header__title">Top Tunes Spotify</h1>
                <p className="header__item d-flex flex-wrap align-items-center m-0 ms-auto">
                    {session?.user && (
                        <Suspense fallback={<LoadingUser />}>
                            {/* @ts-expect-error Server Component */}
                            <Logout />
                        </Suspense>
                    )}
                </p>
            </header>
        </div>
    );
}
