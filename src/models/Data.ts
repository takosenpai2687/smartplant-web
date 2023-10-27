
import mongoose, { Schema, model } from 'mongoose';

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

var Data: any;

if (mongoose.models.Data) {
    Data = model('Data');
} else {
    Data = model('Data', DataSchema);
}

export default Data;
