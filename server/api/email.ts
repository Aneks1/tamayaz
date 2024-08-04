import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    try {
        const req = await readBody(event)
        console.log('req: ' + req)
        let transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS,
            },
        });

    const imageBuffer = Buffer.from(req.image, 'base64');

    let mailOptions = {
        from: `"title" <${process.env.EMAIL}>`,
        to: process.env.EMAIL,
        subject: 'Purchase purchased',
        text: `Purchase`,
        html: `<b>email: ${req.user.email}\nphone: ${req.user.phone} purchased ${JSON.stringify({ cart: req.cart })}</b>`,
        attachments: [
            {
              filename: 'image.png',
              content: imageBuffer,
            },
          ],
    };

    let data
    await transporter.sendMail(mailOptions);    
    
    return { data: data, status: 200, auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
        }, mailOptions: mailOptions };
    }
    catch (error) {
        return { status: 400, error: error.message }
    }
})