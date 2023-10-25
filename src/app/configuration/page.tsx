import React from "react";
import {
    FormControl,
    InputLabel,
    Button,
    Select,
    MenuItem,
    Checkbox,
    Slider,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

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

const Configuration = () => {
    return (
        <div>
            <h5 className="text-2xl font-righteous">Configurations</h5>
        </div>
    );
};

export default Configuration;
