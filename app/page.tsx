import Songs from "@/components/Songs";

export default async function Home() {
    /* @ts-expect-error Server Component */
    return <Songs term={"short"} />;
}
