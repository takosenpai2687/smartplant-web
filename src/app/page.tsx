import DataCard from "@/components/datacard";
import LineChart from "@/components/linechart";

export default async function Home() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <h5 className="text-2xl font-righteous">Dashboard</h5>
            {/* Configuration */}
            <div className="border-b">
                <h6 className="text-xl font-righteous">Current Status</h6>
                {/* Last Updated */}
                {/* <Typography
                component="p"
                className="text-center font-bold my-4 italic"
            >
                Last Updated: {lastUpdated.toLocaleDateString()}
            </Typography> */}
                {/* Cards */}
                <div className="flex flex-row items-center justify-evenly gap-4">
                    <DataCard
                        status="Great"
                        icon="sunny"
                        color="#FFA629"
                        dataText={"75%"}
                        percentage={75}
                        className="w-1/2"
                    />

                    <DataCard
                        status="Too Dry"
                        icon="water_drop"
                        dataText={"50%"}
                        percentage={50}
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
                    <LineChart className="px-4 my-8 mx-auto" />
                </div>
            </div>
        </div>
    );
}
