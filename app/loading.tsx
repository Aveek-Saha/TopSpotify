import LoadingCard from "@/components/LoadingCard";
import NavTabs from "@/components/NavTabs";

export default function Loading() {
    return (
        <>
            <NavTabs />
            <div className="row row-cols-2 row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2 g-4 justify-content-center mb-4">
                {[...Array(10).keys()].map((e) => {
                    return <LoadingCard key={e} />;
                })}
            </div>
        </>
    );
}
