"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema_1 = __importDefault(require("./mongoSchemas/userSchema"));
const cors_1 = __importDefault(require("cors"));
const uuid_1 = require("uuid");
const nodemailer_1 = __importDefault(require("nodemailer"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000'
}));
mongoose_1.default.connect('mongodb+srv://proames75yt:123@cluster0.brnnjn0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
app.get('/api/login', async (req, res) => {
    console.log(req.query);
    const data = await userSchema_1.default.findOne(req.body);
    if (!data)
        return res.status(401).json({ error: 'Invalid email or phone number' });
    console.log(data);
    const token = (0, uuid_1.v4)();
    return res.status(200).json({ data: data, token: token });
});
app.post('/api/register', async (req, res) => {
    console.log(req.body);
    if (await userSchema_1.default.findOne({ email: req.body.email }) || await userSchema_1.default.findOne({ phone: req.body.phone }))
        return res.status(409).json({ error: 'Email or phone is already in use' });
    const data = new userSchema_1.default(req.body);
    await data.save();
    return res.status(201).json(data);
});
// Start the server
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
app.post('/api/email', async (req, res) => {
    console.log(req.body);
    let transporter = nodemailer_1.default.createTransport({
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
        text: `email: ${req.body.email}\nphone: ${req.body.phone} purchased ${JSON.stringify({ cart: req.body.cart })}`,
        html: '<b>Hello world?</b>',
        attachments: [
            {
                filename: 'image.png',
                content: imageBuffer,
            },
        ],
    };
    // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.status(200).send('Email sent: ' + info.messageId);
    });
});
