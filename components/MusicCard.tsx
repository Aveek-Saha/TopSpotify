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
    const hsl = palette.DarkMuted?.hsl.map((value) => {
        return value * 100;
    })!;
    const darken = 10;

    return (
        <div className="col text-center">
            <div
                className="card card_list h-100"
                style={{
                    backgroundColor: palette.Muted?.hex,
                    borderColor: palette.Muted?.hex,
                }}
            >
                <div className="ratio ratio-1x1">
                    <Image
                        src={images[1].url}
                        className="card-img-top img-fluid rounded album-art"
                        alt={alt}
                        height={300}
                        width={300}
                    />
                </div>
                <div
                    className="card-body card-body_list"
                    style={{
                        color: `hsl(${hsl[0]} ${hsl[1]}% ${hsl[2] - darken}%)`,
                    }}
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
