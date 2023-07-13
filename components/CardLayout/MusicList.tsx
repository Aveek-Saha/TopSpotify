import { topSongs } from "@/app/utils";
import CardListItem from "./CardListItem";

export default function MusicList({ topSongs }: { topSongs: topSongs }) {
    return (
        <div className="row row-cols-1 g-3 justify-content-center mb-4">
            {topSongs?.items?.map((song) => {
                return (
                    /* @ts-expect-error Server Component */
                    <CardListItem
                        key={song.id}
                        images={song.album.images}
                        alt={song.album.name}
                        heading={song.name}
                        pills={song.album.artists?.map((artist: any) => {
                            return artist.name;
                        })}
                    />
                );
            })}
        </div>
    );
}
