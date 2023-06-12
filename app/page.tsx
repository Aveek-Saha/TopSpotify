import Login from "@/components/auth/Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { signOut } from "next-auth/react";

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
            return <Login/>
        }
        topSongs = await getTopSongs(session.token.accessToken);
    }

    return (
        <div>
            <h1>Hello World</h1>
            <Login />
            {topSongs.items.map((song) => {
                return (
                    <div>
                        <img src={song.album.images[1].url}></img>
                        <h3>{song.name}</h3>
                        <p>{song.album.name}</p>
                        <p>{(song.album.artists[0].name)}</p>
                    </div>
                )
            })}
        </div>
    );
}
