const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

dotenv.config();

const server = express();

server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

server.use(upload.array('files'));

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phoneNumber, address, opinionType, suggestion } = req.body;
        const files = req.files;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_SERVICE_ID,
                pass: process.env.EMAIL_SERVICE_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_SERVICE_ID,
            to: process.env.EMAIL_SERVICE_RECEIVING_ID, // replace with your actual email address
            subject: 'Feedback Form Submission',
            text: `
            First Name: ${firstName}
            Last Name: ${lastName}
            Email: ${email}
            Phone Number: ${phoneNumber}
            Address: ${address}
            Opinion Type: ${opinionType}
            Suggestion: ${suggestion}
        `,
            attachments: files?.map(file => ({
                filename: file.originalname,
                content: file.buffer,
            })),
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, error: 'Failed to send email' });
        }
    }
}