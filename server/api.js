const api = module.exports = require('express').Router()

'use strict';
const nodemailer = require('nodemailer');

function sendEmail(req, res){
  console.log('in sendEmail')
  var success = function (data) {
    // console.log('Data [%s]', data);
    res.status(200).send(data);
  };

  var error = function (data) {
    // console.log('Data [%s]', data);
    res.status(400).send(data);
  };

  nodemailer.createTestAccount((err, account) => {
      let transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
          user: 'ksavransky@yahoo.com',
          pass: 'Y3321delilah'
        }
      });

      // setup email data with unicode symbols
      let mailOptions = {
          from: '"My Website" <ksavransky@yahoo.com>', // sender address
          to: 'ksavransky@gmail.com', // list of receivers
          subject: 'Contact From My Website', // Subject line
          text:  req.query.emailBody, // plain text body
          html: `<b>${req.query.emailBody}</b>` // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            error('Message sent: ' + info.messageId)
            return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);

          success('Message sent: ' + info.messageId)
      });
  });
}

api
  .get('/send-email', sendEmail)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
