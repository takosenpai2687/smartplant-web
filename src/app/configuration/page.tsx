import React from "react";
import {
    FormControl,
    FormControlLabel,
    InputLabel,
    Button,
    Select,
    MenuItem,
    Checkbox,
    Slider,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { KeyboardArrowDown } from "@mui/icons-material";

const validationSchema = yup.object().shape({
    plant_specie: yup.string(),
    sunlight_exposure: yup.string(),
    //@ts-ignore
    sunlight_exposure_lumens: yup.string().when("sunlight_exposure", {
        is: "Other",
        then: yup.string().required("Enter the Ideal Sun exposure"),
    }),
    soil_moisture: yup.number(),
    //@ts-ignore
    other_plant_specie: yup.string().when("plant_specie", {
        is: "Other",
        then: yup.string().required("Enter your Plant's Specie"),
    }),
});

const PLANT_SPECIES = [
    "Peace Lily",
    "Monstera",
    "Pothos",
    "Aloe Vera",
    "Dieffenbachia",
    "Money Tree",
    "Kalanchoe",
    "Calathea",
    "Other",
];

const SUNLIGHT_EXPOSURE_OPTIONS = [
    "Low Light",
    "Indirect Sunlight",
    "Direct Sunlight",
];

const Configuration = () => {
    return (
        <div>
            <h5 className="text-2xl font-righteous">Configurations</h5>
            <section className="px-12 py-5">
                <form className="grid lg:grid-cols-3">
                    <div className="flex flex-col gap-6">
                        <FormControl>
                            <InputLabel id="plant-specie-label">
                                Select your Plant&apos;s Specie
                            </InputLabel>
                            <Select
                                IconComponent={KeyboardArrowDown}
                                labelId="plant-specie-label"
                                label="Select your Plant's Specie"
                            >
                                {PLANT_SPECIES.map((name) => (
                                    <MenuItem
                                        value={name.toLowerCase()}
                                        key={name.toLowerCase()}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <div className="flex flex-col">
                            <FormControl>
                                <InputLabel id="sunlight-exposure-label">
                                    Select the Ideal Sunlight Exposure
                                </InputLabel>
                                <Select
                                    IconComponent={KeyboardArrowDown}
                                    labelId="sunlight-exposure-label"
                                    label="Select the Ideal Sunlight Exposure"
                                >
                                    {SUNLIGHT_EXPOSURE_OPTIONS.map((option) => (
                                        <MenuItem
                                            value={option.toLowerCase()}
                                            key={option.toLowerCase()}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Enter Sun Exposure in Lumens?"
                                disableTypography
                                sx={{ fontSize: 14 }}
                            />
                        </div>
                        <div>
                            <FormControl id="sunlight-exposure-label">
                                Select the Ideal Soil Moisture (Scale of 0-100)
                            </FormControl>
                            <Slider
                                aria-label="Ideal Soil Moisture"
                                defaultValue={10}
                                step={10}
                                valueLabelDisplay="on"
                                marks={[
                                    { value: 0, label: 0 },
                                    { value: 100, label: 100 },
                                ]}
                                sx={{
                                    marginTop: 4,
                                    "& .MuiSlider-rail": {
                                        backgroundColor: "#a3a0a0",
                                    },
                                    "& .MuiSlider-valueLabelOpen": {
                                        background: "transparent",
                                    },
                                    "& .MuiSlider-valueLabelLabel": {
                                        color: "var(--primary-color-deep)",
                                        fontWeight: 500,
                                        fontSize: 16,
                                    },
                                }}
                            />
                        </div>
                        <Button
                            variant="contained"
                            sx={{ width: 140, fontWeigh: 500 }}
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Configuration;
