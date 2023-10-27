"use client";

import React, { useState } from "react";
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
    plant_species: yup.string(),
    sunlight_exposure: yup.string(),
    //@ts-ignore
    // sunlight_exposure_lumens: yup.string().when("sunlight_exposure", {
    //     is: "Other",
    //     then: yup.string().required("Enter the Ideal Sun exposure"),
    // }),
    other_plant_species: yup.string().when("plant_specie", {
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

const minDistance = 10;

const Configuration = () => {
    const [value, setValue] = useState<number[]>([10, 20]);

    const handleSliderChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue([clamped - minDistance, clamped]);
            }
        } else {
            setValue(newValue as number[]);
        }
    };

    return (
        <div>
            <h5 className="text-2xl font-righteous">Configurations</h5>
            <section className="px-12 py-5">
                <Formik
                    initialValues={{
                        plant_species: "",
                        sunlight_exposure: "",
                        other_plant_species: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue,
                        dirty,
                        isValid,
                    }) => (
                        <form
                            className="grid lg:grid-cols-3"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-6">
                                <FormControl>
                                    <InputLabel id="plant-specie-label">
                                        Select your Plant&apos;s Species
                                    </InputLabel>
                                    <Select
                                        IconComponent={KeyboardArrowDown}
                                        labelId="plant-specie-label"
                                        label="Select your Plant's Specie"
                                        value={values.plant_species}
                                        id="plant_species"
                                        onChange={(e) =>
                                            setFieldValue(
                                                "plant_species",
                                                e.target.value as string
                                            )
                                        }
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
                                            id="sunlight_exposure"
                                            label="Select the Ideal Sunlight Exposure"
                                            value={values.sunlight_exposure}
                                            onChange={(e) =>
                                                setFieldValue(
                                                    "sunlight_exposure",
                                                    e.target.value as string
                                                )
                                            }
                                        >
                                            {SUNLIGHT_EXPOSURE_OPTIONS.map(
                                                (option) => (
                                                    <MenuItem
                                                        value={option.toLowerCase()}
                                                        key={option.toLowerCase()}
                                                    >
                                                        {option}
                                                    </MenuItem>
                                                )
                                            )}
                                        </Select>
                                    </FormControl>
                                    {/* <FormControlLabel
                                control={<Checkbox />}
                                label="Enter Sun Exposure in Lumens?"
                                disableTypography
                                sx={{ fontSize: 14 }}
                            /> */}
                                </div>
                                <div>
                                    <FormControl id="sunlight-exposure-label">
                                        Select the Ideal Soil Moisture (Scale of
                                        10-100)
                                    </FormControl>
                                    <Slider
                                        getAriaLabel={() =>
                                            "Ideal Soil Moisture"
                                        }
                                        defaultValue={10}
                                        step={10}
                                        min={10}
                                        valueLabelDisplay="on"
                                        value={value}
                                        onChange={handleSliderChange}
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
                                        disableSwap
                                    />
                                </div>
                                <Button
                                    variant="contained"
                                    sx={{ width: 140, fontWeigh: 500 }}
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </section>
        </div>
    );
};

export default Configuration;
