import Vibrant from "node-vibrant";

function getTextColor(rgb: Array<number>) {
    const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    const textColor = yiq < 150 ? "#fff" : "#000";
    return textColor;
}

export default async function MusicCard({ song }: { song: any; key: String }) {
    const palette = await Vibrant.from(song.album.images[2].url).getPalette();
    // console.log(getTextColor(palette.Vibrant.rgb));

    return (
        <div className="col mb-3 text-center">
            <div
                className="card card_list h-100"
                style={{ backgroundColor: palette.Vibrant.hex }}
            >
                <img
                    src={song.album.images[1].url}
                    className="card-img-top h-100"
                    style={{ borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" }}
                    alt="..."
                    width={300}
                    height={300}
                />
                <div
                    className="card-body card-body_list"
                    style={{ color: getTextColor(palette.Vibrant.rgb) }}
                >
                    <h5 className="card-title m-2 text-truncate">
                        {song.name}
                    </h5>
                    <p className="card-text">
                        <small className="text-truncate">
                            {song.album.artists[0].name}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
}
