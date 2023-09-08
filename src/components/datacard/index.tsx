import React, { memo } from "react";
import styles from "./style.module.scss";
import { CircularProgress, Icon, Typography } from "@mui/material";

type DataCardProps = {
    icon: string;
    title: React.ReactNode | string;
    dataText: React.ReactNode | string | number;
    percentage: number;
    color: string;
    style?: React.CSSProperties;
    className?: string;
};

const DataCard = ({
    icon,
    title,
    dataText,
    className,
    style,
    percentage,
    color,
}: DataCardProps) => {
    return (
        <div
            className={`${styles.card} ${className ?? ""} my-8`}
            style={style ?? {}}
        >
            <div
                className={`${styles.circle} flex flex-col justify-center items-center`}
            >
                <div className={`${styles.icon} text-center`}>
                    <Icon style={{ color, fontSize: "3em" }}>{icon}</Icon>
                </div>
                <div className="text-center">
                    <Typography variant="h6" component="h6">
                        {title}
                    </Typography>
                </div>
                <div className="text-center">
                    <Typography component="p" className="text-lg">
                        {dataText}
                    </Typography>
                </div>
            </div>
            <CircularProgress
                className={`${styles.progress}`}
                style={{
                    color,
                }}
                thickness={2}
                variant="determinate"
                value={percentage}
            />
        </div>
    );
};

export default memo(DataCard);
