const express = require('express');
const app = express();
const db = require('mongoose');
const student = require('./server/api/studentInfo/route.config');

app.listen(3000, () => console.log("Listening..."));
db.connect('mongodb://127.0.0.1:27017/studentdb',{ useNewUrlParser: true , useUnifiedTopology: true  })
  .then(() => {console.log("DATABASE CONNECTED")})
  .catch(error => {console.error("Database connection failed",error)})

//  console.log(db.find({}));
student.routesConfig(app);
