import Login from "@/components/auth/Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import CardGridItem from "@/components/CardLayout/CardGridItem";
import NavTabs from "@/components/navigation/NavTabs";
import NavButtons from "./navigation/NavButtons";
import { getTopSongs, getTerm } from "@/app/utils";

import type { topSongs } from "@/app/utils";
import NoData from "./NoData";
import CardListItem from "./CardLayout/CardListItem";
import CardGridLayout from "./CardLayout/CardGridLayout";
import CardListLayout from "./CardLayout/CardListLayout";

export default async function Songs({ term }: { term: String }) {
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
                {topSongs?.items?.length === 0 && <NoData />}
                <CardGridLayout>
                    {topSongs?.items?.map((song) => {
                        return (
                            /* @ts-expect-error Server Component */
                            <CardGridItem
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
                </CardGridLayout>

                <CardListLayout>
                    {topSongs?.items?.map((song) => {
                        return (
                            /* @ts-expect-error Server Component */
                            <CardListItem
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
                </CardListLayout>
            </>
        );
    }
    return <Login />;
}
