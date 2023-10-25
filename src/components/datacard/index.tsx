import React, { memo } from "react";
import styles from "./style.module.scss";
import { Box, CircularProgress, Icon, Typography } from "@mui/material";

type DataCardProps = {
    icon: string;
    status: React.ReactNode | string;
    dataText: React.ReactNode | string | number;
    percentage: number;
    color: string;
    style?: React.CSSProperties;
    className?: string;
};

const DataCard = ({
    icon,
    status,
    dataText,
    className,
    style,
    percentage,
    color,
}: DataCardProps) => {
    return (
        <div
            className={`${styles.card} ${className ?? ""} my-8 flex`}
            style={style ?? {}}
        >
            <div
                className={`${styles.circle} flex flex-col justify-center items-center`}
            >
                <div className={`text-center`}>
                    <Icon style={{ color, fontSize: "3em" }}>{icon}</Icon>
                </div>
                <div className="text-center text-lg">
                    <p>{status}!</p>
                </div>
                {/* <div className="text-center">
                    <Typography component="p" className="text-lg">
                        {dataText}
                    </Typography>
                </div> */}
            </div>

            <Box sx={{ position: "relative", margin: "0 auto" }}>
                <CircularProgress
                    variant="determinate"
                    sx={{
                        color: "#EEEEEE",
                    }}
                    thickness={6}
                    size="11rem"
                    value={100}
                />
                <CircularProgress
                    variant="determinate"
                    disableShrink
                    sx={{
                        color,
                        position: "absolute",
                        left: 0,
                    }}
                    thickness={6}
                    size="11rem"
                    value={percentage}
                />
            </Box>
        </div>
    );
};

export default memo(DataCard);
