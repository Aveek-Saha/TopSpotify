export async function getTopSongs(
    accessToken: String | unknown,
    time_range: String
) {
    const TOP_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}&limit=10`;

    const topTracks = await fetch(TOP_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return topTracks.json();
}

export async function getTopArtists(
    accessToken: String | unknown,
    time_range: String
) {
    const TOP_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=${time_range}&limit=10`;

    const topArtists = await fetch(TOP_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return topArtists.json();
}

export function getTerm(term: String) {
    if (term === "medium") return "medium_term";
    if (term === "long") return "long_term";
    return "short_term";
}

export function getType(type: String) {
    if (type === "artists") return "artists";
    return "tracks";
}


export function getTextColor(rgb: Array<number> | any) {
    const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    const textColor = yiq < 150 ? "#fff" : "#000";
    return textColor;
}

export interface topSongs {
    items?: any[];
    error?: {
        status: number;
    };
}

export interface TopProps {
    type: string;
    term: String;
}
