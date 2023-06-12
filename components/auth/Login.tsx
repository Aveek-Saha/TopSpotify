"use client";

import { signIn } from "next-auth/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSpotify
} from "@fortawesome/free-brands-svg-icons";

export default function Login() {
    return (
        <div className="row">
            <button
                type="button"
                className="btn btn-lg btn-outline-dark mb-2 mt-2"
                style={{ color: "#1db954" }}
                onClick={() => signIn("spotify")}
            >
                <FontAwesomeIcon icon={faSpotify} /> Spotify
            </button>
        </div>)
}