import Vibrant from "node-vibrant";

function getTextColor(rgb: Array<number> | any) {
    const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    const textColor = yiq < 150 ? "#fff" : "#000";
    return textColor;
}

export default async function MusicCard({ song }: { song: any; key: String }) {
    const palette = await Vibrant.from(song.album.images[2].url).getPalette();

    return (
        <div className="col text-center">
            <div
                className="card card_list h-100"
                style={{
                    backgroundColor: palette.Muted?.hex,
                    borderColor: palette.Muted?.hex,
                }}
            >
                <img
                    src={song.album.images[1].url}
                    className="card-img-top img-fluid rounded album-art"
                    alt="..."
                    height={300}
                    width={300}
                />
                <div
                    className="card-body card-body_list"
                    style={{ color: palette.DarkMuted?.hex }}
                >
                    <h5 className="card-title m-2 text-truncate text-shadow">
                        {song.name}
                    </h5>
                    <p className="card-text">
                        {song.album.artists?.map((artist: any) => {
                            return (
                                <span
                                    key={artist.name}
                                    className="badge rounded-pill m-1 album-art"
                                    style={{
                                        backgroundColor:
                                            palette.DarkVibrant?.hex,
                                    }}
                                >
                                    {artist.name}
                                </span>
                            );
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
}
