"use client";
import { Button, Icon } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";
import styles from "./style.module.scss";
import { Righteous } from "next/font/google";

const righteous = Righteous({ weight: ["400"], subsets: ["latin"] });

type RouteType = {
    render: React.ReactNode | string;
    path: string;
};

const ROUTE_INNER_STYLE = "flex flex-row items-center justify-center gap-2";

const ROUTES: RouteType[] = [
    {
        render: (
            <div className={ROUTE_INNER_STYLE}>
                <Icon className="text-white">speed</Icon> Dashboard
            </div>
        ),
        path: "/",
    },
    {
        render: (
            <div className={ROUTE_INNER_STYLE}>
                <Icon className="text-white">grid_view</Icon> Devices
            </div>
        ),
        path: "/devices",
    },
    {
        render: (
            <div className={ROUTE_INNER_STYLE}>
                <Icon className="text-white">link</Icon> Link
            </div>
        ),
        path: "/link",
    },
];

const NavBar = ({
    className,
    style,
}: {
    className?: string;
    style?: React.CSSProperties;
}) => {
    const pathname = usePathname();
    const router = useRouter();

    const activeIdx: number = useMemo(
        () => ROUTES.findIndex((r) => r.path === pathname),
        [pathname]
    );

    return (
        <nav
            className={`${styles.navbar} h-full ${
                className ?? ""
            } flex flex-col bg-transparent`}
            style={{ ...(style ?? {}) }}
        >
            {/* Logo */}
            <div className="flex flex-col items-center justify-center h-1/4 select-none">
                <Icon
                    className="flex"
                    style={{
                        fontSize: "6em",
                        color: "#fff",
                    }}
                >
                    eco
                </Icon>
                <h1
                    className={`${righteous.className} text-white font-bold`}
                    style={{
                        fontSize: "2.6em",
                        letterSpacing: ".14em",
                    }}
                >
                    SmartPlant
                </h1>
            </div>
            {/* Button Group */}
            <div className="flex flex-col items-center justify-between gap-4 px-4">
                {ROUTES.map((route, idx) => (
                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        key={route.path}
                        onClick={() => router.push(route.path)}
                        className={`${activeIdx === idx ? "active" : ""}`}
                        sx={{
                            padding: "1em",
                            outline: "none",
                            border: "none",
                            boxShadow: "none",
                            lineHeight: "2em",
                            fontWeight: "normal",
                            "&:hover": {
                                backgroundColor: "var(--primary-color-deep)",
                                fontWeight: "bolder",
                            },
                            "&.active": {
                                backgroundColor: "var(--primary-color-deep)",
                                fontWeight: "bolder",
                            },
                            textTransform: "capitalize",
                            letterSpacing: ".1em",
                            fontSize: "1.2em",
                            borderRadius: "6em",
                        }}
                    >
                        {route.render}
                    </Button>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
