export default function CardListLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="d-block d-sm-none d-md-none">
                <div className="row row-cols-1 g-3 justify-content-center mb-4">
                    {children}
                </div>
            </div>
        </>
    );
}
