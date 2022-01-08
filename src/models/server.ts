import path from 'path';
import express from "express";
import cors from "cors";
import morgan from 'morgan';
import mongoose from 'mongoose';


export class Server {
  app: any;
  mainPath: string;
  constructor() {

    require('dotenv').config();

    this.app = express();

    this.mainPath = "/";

    this.settings();

    this.mongo();

    this.middlewares();

    this.routes();

  }

  settings() {
    //set port
    this.app.set('port', process.env.PORT || 8000);
    this.app.set('mongodbUrl', process.env.DB_DATA);

    this.app.use(express.static(path.join(__dirname, '../public')));


  }

  mongo() {
    mongoose.connect(this.app.get('mongodbUrl'))
      .then((db: { connection: { host: any; }; }) => console.log(`DB is connected to ${db.connection.host}`))
      .catch((err: any) => console.log('DB connection error', err));
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

