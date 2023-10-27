
import { Schema, model } from 'mongoose';

const DataSchema = new Schema({
    device: {
        type: String,
        required: true,
    },
    light: {
        type: Number,
        required: true,
    },
    moisture: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

const Data = model('Data', DataSchema);

export default Data;
