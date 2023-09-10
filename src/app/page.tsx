import DataCard from "@/components/datacard";
import LineChart from "@/components/linechart";
import { Icon, Typography } from "@mui/material";

export default async function Home() {
    const deviceName = "DEVICE_NAME_123";
    const lastUpdated = new Date();
    return (
        <div>
            {/* Header */}
            <Typography sx={{ fontWeight: "bold" }} variant="h5" component="h5">
                # Dashboard
            </Typography>
            {/* Device */}
            <Typography
                component="h6"
                variant="h6"
                className="text-center font-bold my-4"
            >
                {deviceName}
            </Typography>
            {/* Last Updated */}
            <Typography
                component="p"
                className="text-center font-bold my-4 italic"
            >
                Last Updated: {lastUpdated.toLocaleDateString()}
            </Typography>
            {/* Cards */}
            <div className="flex flex-row items-center justify-evenly gap-4">
                <DataCard
                    title="Light"
                    icon="sunny"
                    color="#FFD54F"
                    dataText={"75%"}
                    percentage={75}
                    className="w-1/3"
                />
                <DataCard
                    title="Temperature"
                    icon="device_thermostat"
                    dataText={"16 ℃"}
                    percentage={25}
                    className="w-1/3"
                    color="#F06292"
                />
                <DataCard
                    title="Humidity"
                    icon="water_drop"
                    dataText={"50%"}
                    percentage={50}
                    className="w-1/3"
                    color="#29B6F6"
                />
            </div>
            {/* Chart */}
            <div className="px-4 my-4">
                <LineChart className="px-4 my-8 mx-auto" />
            </div>
        </div>
    );
}
