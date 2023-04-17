const nodeMailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, send_from, reply_to) => {
  //transporter
  const transporter = nodeMailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //options
  const options = {
    from: send_from,
    to:send_to,
    replyTo:reply_to,
    subject:subject,
    html: message,
  };


  //send email
  transporter.sendMail(options, (error, info)=>{
    if(error){
        console.log(error)
    }
    console.log(info)
  })
};

module.exports = sendEmail;
