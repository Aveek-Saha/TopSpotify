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
        <div className="card mb-3">
            <div
                className="row g-0"
                style={{ backgroundColor: palette.Vibrant.hex }}
            >
                <div className="col-md-4">
                    <img
                        src={song.album.images[1].url}
                        className="img-fluid rounded-start"
                        alt="..."
                        width={"100%"}
                    />
                </div>
                <div
                    className="col-md-8"
                    style={{ color: getTextColor(palette.Vibrant.rgb) }}
                >
                    <div className="card-body">
                        <h5 className="card-title">{song.name}</h5>
                        <p className="card-text">{song.album.name}</p>
                        <p className="card-text">
                            <small className="text-body-secondary">
                                {song.album.artists[0].name}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
