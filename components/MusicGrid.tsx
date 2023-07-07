import Login from "@/components/auth/Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import MusicCard from "@/components/Card";
import NavTabs from "@/components/navigation/NavTabs";
import NavButtons from "./navigation/NavButtons";
import { getTopSongs, getTerm } from "@/app/utils";

import type { topSongs } from "@/app/utils";

export default async function MusicGrid({ term }: { term: String }) {
    const session = await getServerSession(authOptions);
    let topSongs: topSongs = { items: [] };
    if (session) {
        if (session.token.exp < Date.now() / 1000) {
            return <Login />;
        }

        topSongs = await getTopSongs(session.token.accessToken, getTerm(term));

        if (topSongs.error && topSongs.error.status === 401) {
            return <Login />;
        }
        return (
            <>
                <NavButtons />
                <NavTabs />
                <div className="row row-cols-2 row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2 g-4 justify-content-center mb-4">
                    {topSongs?.items?.map((song) => {
                        return (
                            /* @ts-expect-error Server Component */
                            <MusicCard
                                key={song.id}
                                images={song.album.images}
                                alt={song.album.name}
                                heading={song.name}
                                pills={song.album.artists?.map(
                                    (artist: any) => {
                                        return artist.name;
                                    }
                                )}
                            />
                        );
                    })}
                </div>
            </>
        );
    }
    return <Login />;
}
