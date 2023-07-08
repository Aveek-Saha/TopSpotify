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

function luminance(rgb: Array<number>) {
    const RED = 0.2126;
    const GREEN = 0.7152;
    const BLUE = 0.0722;

    const GAMMA = 2.4;
    var a = rgb.map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, GAMMA);
    });
    return a[0] * RED + a[1] * GREEN + a[2] * BLUE;
}

function contrast(rgb1: Array<number>, rgb2: Array<number>) {
    var lum1 = luminance(rgb1);
    var lum2 = luminance(rgb2);
    var brightest = Math.max(lum1, lum2);
    var darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

export function getTextColor(
    rgb1: Array<number>,
    rgb2: Array<number>,
    hsl: Array<number>
) {
    const darken = 7.5;
    const contrastRatio = contrast(rgb1, rgb2);

    if (contrastRatio < 4.5) {
        hsl = [hsl[0], hsl[1], hsl[2] - darken * (4.5 - contrastRatio)];
    }
    return hsl;
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
