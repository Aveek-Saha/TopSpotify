export default function CardGridLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="d-none d-sm-block d-md-block">
                <div className="row">
                    <div className="col-xl-1"></div>
                    <div className="col">
                        <div className="row row-cols-2 row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2 g-3 justify-content-center mb-4">
                            {children}
                        </div>
                    </div>
                    <div className="col-xl-1"></div>
                </div>
            </div>
        </>
    );
}
