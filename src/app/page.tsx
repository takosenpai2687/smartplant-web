"use client";

import DataCard from "@/components/datacard";
import LineChart from "@/components/linechart";
import axios from "axios";
import React, { useEffect, useMemo } from "react";

const LIGHT_LOWER = 30;
const LIGHT_UPPER = 60;
const MOISTURE_LOWER = 30;
const MOISTURE_UPPER = 60;

const buildData = (
    lights: number[],
    moistures: number[],
    limit: number
): any[] => {
    return [
        {
            label: "Light",
            data: lights,
            borderColor: "#FFA629",
            backgroundColor: "#FFA6297F",
            yAxisID: "y",
            cubicInterpolationMode: "monotone",
        },
        {
            label: "Moisture",
            data: moistures,
            borderColor: "#EE0606",
            backgroundColor: "#EE06067F",
            yAxisID: "y",
            cubicInterpolationMode: "monotone",
        },
    ];
};

export default function Home() {
    // Limit = # of datapoints along x-axis
    const [limit, setLimit] = React.useState(30);
    const labels = useMemo(
        () =>
            Array.from(
                { length: limit },
                (_, i) => `${(i + 1) % 5 === 0 ? i + 1 : ""}`
            ),
        [limit]
    );
    const [lights, setLights] = React.useState<number[]>([]);
    const [moistures, setMoistures] = React.useState<number[]>([]);
    const [currLight, setCurrLight] = React.useState<number>(0);
    const [currMoist, setCurrMoist] = React.useState<number>(0);
    // TODO: decide how to determine status
    const deviceName = "test-oct-27";

    const fetchData = async () => {
        const data: any[] = await axios
            .get(`/api/data?device=${deviceName}&limit=${limit}`)
            .then((r) => r.data.data);
        setLights(data.map((d) => d.light));
        setMoistures(data.map((d) => d.moisture));
        const light = data[data.length - 1].light;
        const moist = data[data.length - 1].moisture;
        setCurrLight(light);
        setCurrMoist(moist);
        setLightStatus(
            light > LIGHT_LOWER && light < LIGHT_UPPER
                ? "Great"
                : light < LIGHT_LOWER
                ? "Too Dark"
                : "Too Bright"
        );
        setMoistStatus(
            moist > MOISTURE_LOWER && moist < MOISTURE_UPPER
                ? "Great"
                : moist < MOISTURE_LOWER
                ? "Too Dry"
                : "Too Wet"
        );
    };

    const data = {
        labels,
        datasets: buildData(lights, moistures, limit) as any[],
    };

    useEffect(() => {
        let fetchDataInt = setInterval(fetchData, 1000);
        return () => clearInterval(fetchDataInt);
    }, []);

    const [lightStatus, setLightStatus] = React.useState<
        "Great" | "Too Bright" | "Too Dark"
    >("Too Dark");
    const [moistStatus, setMoistStatus] = React.useState<
        "Great" | "Too Dry" | "Too Wet"
    >("Too Dry");

    return (
        <div className="space-y-8">
            <h5 className="text-2xl font-righteous">Dashboard</h5>
            <div className="border-b">
                <h6 className="text-xl font-righteous">Current Status</h6>
                <div className="flex flex-row items-center justify-evenly gap-4">
                    <DataCard
                        status={lightStatus}
                        icon="sunny"
                        color="#FFA629"
                        dataText={"75%"}
                        percentage={currLight}
                        className="w-1/2"
                    />

                    <DataCard
                        status={moistStatus}
                        icon="water_drop"
                        dataText={"50%"}
                        percentage={currMoist}
                        className="w-1/2"
                        color="#EE0606"
                    />
                </div>
            </div>
            {/* Chart */}
            <div>
                <h6 className="text-xl font-righteous">
                    Plant Environment Levels
                </h6>
                <div className="px-4">
                    <LineChart data={data} className="px-4 my-8 mx-auto" />
                </div>
            </div>
        </div>
    );
}
