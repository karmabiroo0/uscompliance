import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  // Validate all fields are present and non-empty strings
  if (
    !name ||
    !email ||
    !phone ||
    !service ||
    !message ||
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof phone !== 'string' ||
    typeof service !== 'string' ||
    typeof message !== 'string' ||
    name.trim() === '' ||
    email.trim() === '' ||
    phone.trim() === '' ||
    service.trim() === '' ||
    message.trim() === ''
  ) {
    return res.status(400).json({ error: 'All fields are required and must be non-empty strings' });
  }

  // Create contact submission in PocketBase
  const record = await pb.collection('contact_submissions').create({
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    service: service.trim(),
    message: message.trim(),
    status: 'new',
  });

  logger.info(`Contact form submitted: ${record.id} from ${email.trim()}`);

  res.json({
    success: true,
    message: 'Form submitted successfully',
    submissionId: record.id,
  });
});

export default router;