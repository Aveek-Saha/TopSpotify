"use client";

import { signIn } from "next-auth/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
    return (
        <div className="row align-items-center justify-content-center">
            <div className="d-flex aligns-items-center justify-content-center mb-4 mt-4">
                <h4>Check out your top tracks and albums on Spotify!</h4>
            </div>
            <div className="col"></div>
            <div className="col d-flex aligns-items-center justify-content-center">
                <button
                    type="button"
                    className="btn btn-lg btn-outline-dark mb-2 mt-2"
                    style={{ color: "#1db954" }}
                    onClick={() => signIn("spotify")}
                >
                    <FontAwesomeIcon icon={faSpotify} className="me-2" /> Log in
                </button>
            </div>
            <div className="col"></div>
        </div>
    );
}
