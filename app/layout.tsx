import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata = {
    title: "Top spotify",
    description: "See all your top artists/songs/albums in one place",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link href="/globals.css" rel="stylesheet"></link>
            </head>
            <body>
                <div className="container">{children}</div>
            </body>
        </html>
    );
}
