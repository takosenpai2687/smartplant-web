"use client";
import { Button, Icon, CircularProgress } from "@mui/material";
import { usePathname } from "next/navigation";
import React, {  useMemo } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

type RouteType = {
    render: React.ReactNode | string;
    path: string;
};

const ROUTE_INNER_STYLE = "flex flex-row items-center gap-2 text-inherit";
const BUTTON_ACTIVE_STYLE = {
    color: "var(--primary-color-deep) !important",
    background: "transparent",
    boxShadow: "none",
};

const ROUTES: RouteType[] = [
    {
        render: (
            <div className={ROUTE_INNER_STYLE}>
                <Icon className="text-inherit">multiline_chart</Icon>
                <span className="text-inherit font-righteous">Dashboard</span>
            </div>
        ),
        path: "/",
    },
    {
        render: (
            <div className={ROUTE_INNER_STYLE}>
                <Icon className="text-inherit">settings</Icon>
                <span className="text-inherit font-righteous">
                    Configuration
                </span>
            </div>
        ),
        path: "/configuration",
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

    const activeIdx: number = useMemo(
        () => ROUTES.findIndex((r) => r.path === pathname),
        [pathname]
    );

    return (
        <nav
            className={`${styles.navbar} font-righteous h-full ${
                className ?? ""
            } flex flex-col bg-primary py-12 px-5`}
            style={{ ...(style ?? {}) }}
        >
            {/* Logo */}
            <div className="flex items-center gap-4 select-none">
                {/* <Icon
                    className="flex text-white"
                    style={{
                        fontSize: "3em",
                    }}
                >
                    eco
                </Icon> */}
                <h1 className={`font-righteous text-white text-3xl`}>
                    SmartPlant
                </h1>
            </div>
            {/* Button Group */}
            <div className="flex flex-col items-center justify-between gap-4 mt-20">
                {ROUTES.map((route, idx) => (
                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        key={route.path}
                        className={`${activeIdx === idx ? "active" : ""}`}
                        sx={{
                            padding: 0,
                            outline: "none",
                            border: "none",
                            boxShadow: "none",
                            backgroundColor: "transparent",
                            fontSize: "1.25rem",
                            fontWeight: "normal",
                            textTransform: "capitalize",
                            justifyContent: "flex-start",
                            "&:hover": BUTTON_ACTIVE_STYLE,
                            "&.active": BUTTON_ACTIVE_STYLE,
                            a: { color: "inherit" },
                        }}
                    >
                        <Link href={route.path}>{route.render}</Link>
                    </Button>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
