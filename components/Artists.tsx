import Login from "@/components/auth/Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import CardGridItem from "@/components/CardLayout/CardGridItem";
import NavTabs from "@/components/navigation/NavTabs";
import NavButtons from "./navigation/NavButtons";
import { getTopArtists, getTerm } from "@/app/utils";

import type { topSongs } from "@/app/utils";
import NoData from "./NoData";
import CardListItem from "./CardLayout/CardListItem";
import CardGridLayout from "./CardLayout/CardGridLayout";
import CardListLayout from "./CardLayout/CardListLayout";

export default async function Artists({ term }: { term: String }) {
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
                <CardGridLayout>
                    {topArtists?.items?.map((artist) => {
                        return (
                            /* @ts-expect-error Server Component */
                            <CardGridItem
                                key={artist.id}
                                images={artist.images}
                                alt={artist.name}
                                heading={artist.name}
                                pills={[]}
                                headingLink={artist.external_urls.spotify}
                                imgLink={artist.external_urls.spotify}
                            />
                        );
                    })}
                </CardGridLayout>

                <CardListLayout>
                    {topArtists?.items?.map((artist) => {
                        return (
                            /* @ts-expect-error Server Component */
                            <CardListItem
                                key={artist.id}
                                images={artist.images}
                                alt={artist.name}
                                heading={artist.name}
                                pills={[]}
                                headingLink={artist.external_urls.spotify}
                                imgLink={artist.external_urls.spotify}
                            />
                        );
                    })}
                </CardListLayout>
            </>
        );
    }
    return <Login />;
}
