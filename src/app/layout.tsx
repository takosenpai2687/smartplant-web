import NavBar from "@/components/navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Smart Plant",
    description: "Smart plant web app comp5047",
};

const NAV_MAX_WIDTH = 320;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link rel="icon" href="/favicon.ico?v=1" sizes="any" />
            </head>
            <body
                className={`${roboto.className} h-full w-full flex flex-row justify-between items-center mx-auto`}
                style={{
                    backgroundColor: "var(--primary-color)",
                    maxWidth: "1600px",
                }}
            >
                <NavBar
                    className="w-1/5"
                    style={{
                        maxWidth: `${NAV_MAX_WIDTH}px`,
                    }}
                />
                <main
                    className="w-4/5 h-full overflow-auto p-4"
                    style={{
                        minWidth: `calc(100% - ${NAV_MAX_WIDTH}px)`,
                    }}
                >
                    <div
                        className="w-full h-full overflow-auto rounded-2xl mx-auto p-4"
                        style={{
                            backgroundColor: "#fcfcfc",
                            boxShadow: "0 0 12px 1px rgba(0,0,0,0.2) inset",
                        }}
                    >
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
