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

export function getTextColor(rgb: Array<number> | any, hex: string) {
    const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    const textColor = yiq < 300 ? newShade(hex, -20) : newShade(hex, 20);
}

function newShade(hexColor: string, magnitude: number) {
    hexColor = hexColor.replace(`#`, ``);
    if (hexColor.length === 6) {
        const decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        let g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
        return hexColor;
    }
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
