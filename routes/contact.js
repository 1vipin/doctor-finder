var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'vipin.techindustan@gmail.com',
            pass: 'Vipin@123'
        }
    });

  var mailOptions = {
      from: 'vipin <vipin.techindustan@gmail.com>',
      to: 'reply.vipinrai@gmail.com',
      subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
  };

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
          res.redirect('/');
      } else {
          console.log('message Sent: ' + info.response);
          res.redirect('/contact');
      }
  });

});

module.exports = router