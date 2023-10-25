import NavBar from "@/components/navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Righteous, Lato } from "next/font/google";
import styles from "./style.module.scss";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import ThemeRegistry from "./ThemeRegistry";

const righteous = Righteous({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    variable: "--font-righteous",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    display: "swap",
    variable: "--font-lato",
});

export const metadata: Metadata = {
    title: "Smart Plant",
    description: "Smart plant web app comp5047",
};

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
            <ThemeRegistry options={{ key: "mui-theme" }}>
                <body
                    className={`${righteous.variable} ${lato.variable} ${styles.container} h-full w-full`}
                >
                    <NavBar />

                    <main
                        className={`${styles.mainContent} h-full w-full overflow-auto mx-auto px-7 pt-12 font-lato`}
                    >
                        <Suspense
                            fallback={
                                <div className="h-full w-full flex">
                                    <CircularProgress className="text-primary mx-auto" />
                                </div>
                            }
                        >
                            {children}
                        </Suspense>
                    </main>
                </body>
            </ThemeRegistry>
        </html>
    );
}
