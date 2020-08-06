// берём Express
const express = require('express');

// создаём Express-приложение
const app = express();

// создаём маршрут для главной страницы
// http://localhost:3000/
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

// запускаем сервер на порту 3000
app.listen(3000);
// отправляем сообщение
console.log('Сервер стартовал!');