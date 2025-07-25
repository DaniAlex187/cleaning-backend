import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    service: String,
    message: String,
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);