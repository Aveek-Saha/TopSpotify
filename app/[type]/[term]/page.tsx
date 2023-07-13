import { TopProps, getType } from "@/app/utils";
import MusicGrid from "@/components/Songs";
import ArtistGrid from "@/components/Artists";

export default async function Home({ params }: { params: TopProps }) {
    if (getType(params.type) === "artists")
        /* @ts-expect-error Server Component */
        return <ArtistGrid term={params.term} />;
    /* @ts-expect-error Server Component */
    return <MusicGrid term={params.term} />;
}
