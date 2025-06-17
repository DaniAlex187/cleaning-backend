import express from 'express';
import Contact from '../models/Contact';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, email, phone, service, message } = req.body;
        const contact = new Contact({ name, email, phone, service, message });
        await contact.save();
        res.status(201).json({ success: true, message: 'Message received!' });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

router.get('/all', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: 'Could not fetch messages' });
    }
});

export default router;