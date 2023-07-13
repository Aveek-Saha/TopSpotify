import Vibrant from "node-vibrant";
import Image from "next/image";
import { getTextColor } from "@/app/utils";

export default async function CardListItem({
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
                <div className="row g-0">
                    <div className="col-5">
                        <div className="ratio ratio-1x1 mb-2">
                            <Image
                                src={images[1].url}
                                className="card-img-top img-fluid rounded album-art"
                                style={{ objectFit: "cover" }}
                                alt={alt}
                                height={300}
                                width={300}
                            />
                        </div>
                    </div>
                    <div className="col-7 d-flex align-items-center">
                        <div
                            className="card-body card-body_list py-1 px-2 w-100"
                            style={{
                                color: `hsl(${textHSL[0]} ${textHSL[1]}% ${textHSL[2]}%)`,
                            }}
                        >
                            <h4
                                className="card-title m-2 text-truncate text-shadow"
                                title={heading}
                                style={{ lineHeight: "normal", minWidth: 0 }}
                            >
                                {heading}
                            </h4>
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
            </div>
        </div>
    );
}
