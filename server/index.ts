import express, { json } from 'express';
import mongoose from 'mongoose';
import userModel from './mongoSchemas/userSchema'
import cors from 'cors'
import { v4 } from 'uuid'
import nodemailer from 'nodemailer'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000'
}))

mongoose.connect('mongodb+srv://proames75yt:123@cluster0.brnnjn0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.get('/api/login', async (req, res) => {
    console.log(req.query)
    const data = await userModel.findOne(req.body);
    if(!data) return res.status(401).json({ error: 'Invalid email or phone number' });
    console.log(data)
    const token = v4()
    return res.status(200).json({ data: data, token: token });
});

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    if (await userModel.findOne({ email: req.body.email }) || await userModel.findOne({ phone: req.body.phone }) ) return res.status(409).json({ error: 'Email or phone is already in use' })
    const data = new userModel(req.body);
    await data.save();
    return res.status(201).json(data);
});

// Start the server
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});

app.post('/api/email', async (req, res) => {
    console.log(req.body)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'proames75yt@gmail.com',
            pass: 'whfx irog grdl hyys',
        },
    });

    // const emailData = {
    //     user: {
    //         email: this.email,
    //         phone: this.phone
    //     },
    //     image: this.image,
    //     cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).items : []
    // }

    const imageBuffer = Buffer.from(req.body.image, 'base64');

    let mailOptions = {
        from: '"title" <proames75yt@gmail.com>',
        to: 'proames75yt@gmail.com',
        subject: 'Purchase purchased',
        text: `hello world`,
        html: '<b>email: ${req.body.email}\nphone: ${req.body.phone} purchased ${JSON.stringify({ cart: req.body.cart })}</b>',
        attachments: [
            {
              filename: 'image.png',
              content: imageBuffer,
            },
          ],
    };

    // Send mail
    transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.status(200).send('Email sent: ' + info.messageId);
    });
})