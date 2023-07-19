import Vibrant from "node-vibrant";
import Image from "next/image";
import { getTextColor } from "@/app/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default async function CardGridItem({
    images,
    alt,
    heading,
    pills,
    headingLink: trackLink,
    imgLink: albumLink,
}: {
    images: Array<any>;
    alt: string;
    heading: string;
    pills: Array<any>;
    key: string;
    headingLink: string;
    imgLink: string;
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
                <Link href={albumLink} className="link" target="_blank">
                    <div className="ratio ratio-1x1 mb-1">
                        <Image
                            src={images[1].url}
                            // className="card-img-top img-fluid rounded album-art"
                            className="card-img-top img-fluid album-art"
                            style={{ objectFit: "cover", borderRadius: 0 }}
                            alt={alt}
                            height={300}
                            width={300}
                        />
                    </div>
                </Link>
                <div
                    className="card-body card-body_list py-1 px-2"
                    style={{
                        color: `hsl(${textHSL[0]} ${textHSL[1]}% ${textHSL[2]}%)`,
                    }}
                >
                    <h5
                        className="card-title my-2 text-truncate text-shadow"
                        title={heading}
                        style={{ lineHeight: "normal" }}
                    >
                        <Link href={trackLink} className="link" target="_blank">
                            <FontAwesomeIcon
                                icon={faSpotify}
                                className="me-1"
                            />
                            {heading}
                        </Link>
                    </h5>
                    <p
                        className={`card-text ${
                            pills.length > 0 ? "mt-2" : ""
                        }`}
                    >
                        {pills?.map((pill: any) => {
                            return (
                                <span
                                    key={pill.name}
                                    className="badge rounded-pill album-art mw-100 text-truncate"
                                    style={{
                                        backgroundColor:
                                            palette.DarkVibrant?.hex,
                                    }}
                                    title={pill.name}
                                >
                                    <Link
                                        href={pill.link}
                                        className="link"
                                        target="_blank"
                                    >
                                        {pill.name}
                                    </Link>
                                </span>
                            );
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
}
