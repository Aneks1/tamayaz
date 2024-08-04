import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const req = await readBody(event)
    console.log('req: ' + req)
    let transporter = nodemailer.createTransport({
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
    transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
            console.log(error)
            return data = { status: 500 }
        }
        console.log('Message sent: %s', info.messageId)
        return data = { data: { messageId: info.messageId } }
    });

    data = 'error has occured'
    
    
    return { data: data, status: 200, auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
        }, mailOptions: mailOptions, transporter: transporter};
})