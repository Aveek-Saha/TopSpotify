import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

import AuthContext from "@/components/auth/AuthContext";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Top spotify",
    description: "See all your top songs and albums in one place",
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
                <div className="container">
                    <AuthContext>
                        {/* @ts-expect-error Server Component */}
                        <Navbar />
                        {children}
                    </AuthContext>
                </div>
            </body>
        </html>
    );
}
