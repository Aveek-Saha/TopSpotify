import MusicGrid from "@/components/Songs";

export default async function Home() {
    /* @ts-expect-error Server Component */
    return <MusicGrid term={"short"} />;
}
