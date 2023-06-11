import Login from "@/components/auth/Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

async function getTopSongs(accessToken: String | unknown) {
    const TOP_ENDPOINT =
        "https://api.spotify.com/v1/me/top/tracks?time_range=long_term";

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
        topSongs = await getTopSongs(session.token.accessToken);
    }

    return (
        <div>
            <h1>Hello World</h1>
            <Login />
            {JSON.stringify(topSongs, null, 4)}
        </div>
    );
}
