import { TopProps, getType } from "@/app/utils";
import Songs from "@/components/Songs";
import Artists from "@/components/Artists";

export default async function Home({ params }: { params: TopProps }) {
    if (getType(params.type) === "artists")
        /* @ts-expect-error Server Component */
        return <Artists term={params.term} />;
    /* @ts-expect-error Server Component */
    return <Songs term={params.term} />;
}
