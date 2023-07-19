import Vibrant from "node-vibrant";
import Image from "next/image";
import { getTextColor } from "@/app/utils";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export default async function CardListItem({
    images,
    alt,
    heading,
    pills,
    headingLink,
    imgLink,
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
                <div className="row g-1">
                    <div className="col-5">
                        <Link href={imgLink} className="link" target="_blank">
                            <div className="ratio ratio-1x1">
                                <Image
                                    src={images[1].url}
                                    // className="card-img-top img-fluid rounded album-art"
                                    className="card-img-top img-fluid album-art"
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: 0,
                                    }}
                                    alt={alt}
                                    height={300}
                                    width={300}
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="col-7 d-flex align-items-center">
                        <div
                            className="card-body card-body_list py-1 px-2 w-100"
                            style={{
                                color: `hsl(${textHSL[0]} ${textHSL[1]}% ${textHSL[2]}%)`,
                            }}
                        >
                            <h4
                                className="card-title my-2 text-truncate text-shadow"
                                title={heading}
                                style={{ lineHeight: "normal", minWidth: 0 }}
                            >
                                <Link
                                    href={headingLink}
                                    className="link"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon
                                        icon={faSpotify}
                                        className="me-1"
                                    />
                                    {heading}
                                </Link>
                            </h4>
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
            </div>
        </div>
    );
}
