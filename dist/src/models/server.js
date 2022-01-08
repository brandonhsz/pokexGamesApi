"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
class Server {
    constructor() {
        require('dotenv').config();
        this.app = (0, express_1.default)();
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
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
    }
    mongo() {
        mongoose_1.default.connect(this.app.get('mongodbUrl'))
            .then((db) => console.log(`DB is connected to ${db.connection.host}`))
            .catch((err) => console.log('DB connection error', err));
    }
    middlewares() {
        // Morgan
        this.app.use((0, morgan_1.default)('dev'));
        // CORS
        this.app.use((0, cors_1.default)());
        //Lectura y parseo del body
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        //Directorio publico
        this.app.use(express_1.default.static("public"));
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
exports.Server = Server;
