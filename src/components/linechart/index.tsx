"use client";

import React, { memo, useEffect, useMemo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: "index" as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: "Plant Statistics",
        },
    },
    scales: {
        y: {
            display: true,
            title: {
                display: true,
                text: "Value",
            },
            suggestedMin: 0,
            suggestedMax: 100,
        },
    },
};

const LineChart = ({ className, data }: { className?: string; data: any }) => {
    return (
        <Line
            options={options}
            data={data}
            className={`${className ?? ""} w-full h-full`}
        />
    );
};

export default memo(LineChart);
