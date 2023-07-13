import Login from "@/components/auth/Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import MusicCard from "@/components/Card";
import NavTabs from "@/components/navigation/NavTabs";
import NavButtons from "./navigation/NavButtons";
import { getTopArtists, getTerm } from "@/app/utils";

import type { topSongs } from "@/app/utils";
import NoData from "./NoData";
import ArtistList from "./CardLayout/ArtistList";

export default async function ArtistGrid({ term }: { term: String }) {
    const session = await getServerSession(authOptions);
    let topArtists: topSongs = { items: [] };
    if (session) {
        if (session.token.exp < Date.now() / 1000) {
            return <Login />;
        }

        topArtists = await getTopArtists(
            session.token.accessToken,
            getTerm(term)
        );

        if (topArtists.error && topArtists.error.status === 401) {
            return <Login />;
        }
        return (
            <>
                <NavButtons />
                <NavTabs />
                {topArtists?.items?.length === 0 && <NoData />}

                <div className="d-none d-sm-none d-md-block">
                    <div className="row row-cols-2 row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2 g-4 justify-content-center mb-4">
                        {topArtists?.items?.map((artist) => {
                            return (
                                /* @ts-expect-error Server Component */
                                <MusicCard
                                    key={artist.id}
                                    images={artist.images}
                                    alt={artist.name}
                                    heading={artist.name}
                                    pills={[]}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="d-block d-sm-block d-md-none">
                    <ArtistList topArtists={topArtists} />
                </div>
            </>
        );
    }
    return <Login />;
}
