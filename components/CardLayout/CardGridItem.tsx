import Vibrant from "node-vibrant";
import Image from "next/image";
import { getTextColor } from "@/app/utils";

export default async function CardGridItem({
    images,
    alt,
    heading,
    pills,
}: {
    images: Array<any>;
    alt: string;
    heading: string;
    pills: Array<any>;
    key: string;
}) {
    const palette = await Vibrant.from(images[2].url).getPalette();
    const hsl = palette.DarkMuted?.hsl.map((value) => {
        return value * 100;
    })!;
    const textHSL = getTextColor(
        palette.Muted?.rgb!,
        palette.DarkMuted?.rgb!,
        hsl
    );

    return (
        <div className="col text-center">
            <div
                className="card card_list h-100"
                style={{
                    backgroundColor: palette.Muted?.hex,
                    borderColor: palette.Muted?.hex,
                }}
            >
                <div className="ratio ratio-1x1 mb-1">
                    <Image
                        src={images[1].url}
                        className="card-img-top img-fluid rounded album-art"
                        style={{ objectFit: "cover" }}
                        alt={alt}
                        height={300}
                        width={300}
                    />
                </div>
                <div
                    className="card-body card-body_list py-1 px-2"
                    style={{
                        color: `hsl(${textHSL[0]} ${textHSL[1]}% ${textHSL[2]}%)`,
                    }}
                >
                    <h5
                        className="card-title m-2 text-truncate text-shadow"
                        title={heading}
                        style={{ lineHeight: "normal" }}
                    >
                        {heading}
                    </h5>
                    <p
                        className={`card-text ${
                            pills.length > 0 ? "mt-2" : ""
                        }`}
                    >
                        {pills?.map((pill: any) => {
                            return (
                                <span
                                    key={pill}
                                    className="badge rounded-pill album-art mw-100 text-truncate"
                                    style={{
                                        backgroundColor:
                                            palette.DarkVibrant?.hex,
                                    }}
                                    title={pill}
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
