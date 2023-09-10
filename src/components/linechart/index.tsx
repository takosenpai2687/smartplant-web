"use client";

import React, { memo } from "react";
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
            text: "Chart.js Line Chart - Multi Axis",
        },
    },
    scales: {
        y: {
            type: "linear" as const,
            display: true,
            position: "left" as const,
        },
        y1: {
            type: "linear" as const,
            display: true,
            position: "right" as const,
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};

const labels = Array.from({ length: 15 }, (_, i) => `Day ${i + 1}`);

export const data = {
    labels,
    datasets: [
        {
            label: "Light",
            data: labels.map(() => Math.floor(Math.random() * 1000)),
            borderColor: "#FFD54F",
            backgroundColor: "#FFD54F7F",
            yAxisID: "y",
            cubicInterpolationMode: "monotone",
        },
        {
            label: "Temperature",
            data: labels.map(() => Math.floor(Math.random() * 1000)),
            borderColor: "#F06292",
            backgroundColor: "#F062927F",
            yAxisID: "y1",
            cubicInterpolationMode: "monotone",
        },
        {
            label: "Humidity",
            data: labels.map(() => Math.floor(Math.random() * 1000)),
            borderColor: "#29B6F6",
            backgroundColor: "#29B6F67F",
            yAxisID: "y1",
            cubicInterpolationMode: "monotone",
        },
    ],
};

const LineChart = ({ className }: { className?: string }) => {
    return (
        <Line
            options={options}
            data={data}
            className={`${className ?? ""} w-full h-full`}
        />
    );
};

export default memo(LineChart);
