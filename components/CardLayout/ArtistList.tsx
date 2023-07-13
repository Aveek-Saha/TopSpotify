import { topSongs } from "@/app/utils";
import CardListItem from "./CardListItem";

export default function ArtistList({ topArtists }: { topArtists: topSongs }) {
    return (
        <div className="row row-cols-1 g-3 justify-content-center mb-4">
            {topArtists?.items?.map((artist) => {
                return (
                    /* @ts-expect-error Server Component */
                    <CardListItem
                        key={artist.id}
                        images={artist.images}
                        alt={artist.name}
                        heading={artist.name}
                        pills={[]}
                    />
                );
            })}
        </div>
    );
}
