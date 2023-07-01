import Vibrant from "node-vibrant";
import Image from "next/image";

export default async function MusicCard({
    images,
    alt,
    heading,
    pills,
}: {
    images: Array<any>;
    alt: string;
    heading: String;
    pills: Array<any>;
    key: String;
}) {
    const palette = await Vibrant.from(images[2].url).getPalette();

    return (
        <div className="col text-center">
            <div
                className="card card_list h-100"
                style={{
                    backgroundColor: palette.Muted?.hex,
                    borderColor: palette.Muted?.hex,
                }}
            >
                <Image
                    src={images[1].url}
                    className="card-img-top img-fluid rounded album-art"
                    alt={alt}
                    height={300}
                    width={300}
                />
                <div
                    className="card-body card-body_list"
                    style={{ color: palette.DarkMuted?.hex }}
                >
                    <h5 className="card-title m-2 text-truncate text-shadow">
                        {heading}
                    </h5>
                    <p className="card-text">
                        {pills?.map((pill: any) => {
                            return (
                                <span
                                    key={pill}
                                    className="badge rounded-pill m-1 album-art"
                                    style={{
                                        backgroundColor:
                                            palette.DarkVibrant?.hex,
                                    }}
                                >
                                    {pill}
                                </span>
                            );
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
}
