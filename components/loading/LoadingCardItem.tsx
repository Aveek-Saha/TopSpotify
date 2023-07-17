import Image from "next/image";

export default function LoadingCardItem() {
    return (
        <div className="col text-center">
            <div
                className="card card_list h-100"
                style={{
                    borderColor: "#1e1e1e",
                }}
                aria-hidden="true"
            >
                <div className="ratio ratio-1x1">
                    <Image
                        src="/placeholder_300_300.jpg"
                        className="card-img-top img-fluid rounded album-art mb-2"
                        alt="Placeholder"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="card-body" style={{ color: "#6c757d" }}>
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-10"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-8 album-art"></span>
                    </p>
                </div>
            </div>
        </div>
    );
}
