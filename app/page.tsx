import Login from "@/components/auth/Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import MusicCard from "@/components/MusicCard";

async function getTopSongs(accessToken: String | unknown) {
    const TOP_ENDPOINT =
        "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10";

    const topTracks = await fetch(TOP_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return topTracks.json();
}

export default async function Home() {
    const session = await getServerSession(authOptions);
    let topSongs = {};
    if (session) {
        if (session.token.exp < Date.now() / 1000) {
            return <Login />;
        }
        topSongs = await getTopSongs(session.token.accessToken);

        if (topSongs.error && topSongs.error.status === 401) {
            return <Login />;
        }
    }

    return (
        <div>
            <h1>Hello World</h1>
            <Login />

            <div className="row row-cols-2 row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2 g-4 justify-content-center">
                {topSongs?.items?.map((song) => {
                    return <MusicCard key={song.id} song={song} />;
                })}
            </div>
        </div>
    );
}
