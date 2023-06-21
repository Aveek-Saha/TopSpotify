import Login from "@/components/auth/Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import MusicCard from "@/components/MusicCard";

async function getTopSongs(accessToken: String | unknown) {
    const TOP_ENDPOINT =
        "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10";

    const topTracks = await fetch(TOP_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return topTracks.json();
}

interface topSongs {
    items?: any[];
    error?: {
        status: number;
    };
}

export default async function Home() {
    const session = await getServerSession(authOptions);
    let topSongs: topSongs = { items: [] };
    if (session) {
        if (session.token.exp < Date.now() / 1000) {
            return <Login />;
        }
        topSongs = await getTopSongs(session.token.accessToken);

        if (topSongs.error && topSongs.error.status === 401) {
            return <Login />;
        }
        return (
            <div className="row row-cols-2 row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2 g-4 justify-content-center mb-4">
                {topSongs?.items?.map((song) => {
                    /* @ts-expect-error Server Component */
                    return <MusicCard key={song.id} song={song} />;
                })}
            </div>
        );
    }
    return <Login />;
}
