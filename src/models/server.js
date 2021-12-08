const path = require('path');
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
class Server {
  constructor() {
    //Inicializar servidor
    this.app = express();

    this.mainPath = "/";

    //Settings
    this.settings();

    //db conection
    this.mongo();

    //Middlewares
    this.middlewares();

    //Rutas De aplicacion
    this.routes();
  }

  settings() {
    //set port
    this.app.set('port', process.env.PORT || 8000);

    //set views
    this.app.set('views', path.join(__dirname, '../views'));

    //set view engine not necessary in this moment

    this.app.set('mongodbUrl', process.env.DB_DATA);
  }

  mongo() {
    mongoose.connect(this.app.get('mongodbUrl'))
      .then(db => console.log('DB is connected'))
      .catch(err => console.log(err));
  }

  middlewares() {
    // Morgan
    this.app.use(morgan('dev'));

    // CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.mainPath, require("../routes/router"));
  }

  listen() {
    this.app.listen(this.app.get('port'), () => {
      console.clear();
      console.log(`Server on port ${this.app.get('port')}`);
    });
  }
}

module.exports = Server;
