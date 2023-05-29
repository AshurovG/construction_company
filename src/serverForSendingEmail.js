const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// настройка парсера для обработки данных из формы
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// роут для обработки отправки данных из формы
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // настройка транспорта для отправки электронной почты
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
user: 'ashurov1308@gmail.com',
        pass: 'G130825020102g'
      }
    });

    // настройка письма
    const mailOptions = {
      from: 'ashurov1308@gmail.com',
      to: 'ashurov1308@mail.com',
      subject: `New message from ${name}`,
      text: message,
      html: `<p>${message}</p><p>Contact email: ${email}</p>`
    };

    // отправка письма
    await transporter.sendMail(mailOptions);

    // отправка ответа клиенту
    res.send('Email sent successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while sending the email');
  }
});

// запуск сервера
app.listen(3000, () => {
  console.log('Server started on port 3000');
});