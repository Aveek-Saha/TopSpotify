import MusicGrid from "@/components/MusicGrid";

export default async function Home() {
    /* @ts-expect-error Server Component */
    return <MusicGrid term={"short"} />;
}
