require("dotenv").config();
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let sassMiddleware = require('node-sass-middleware');
let mongoose = require('mongoose');
let router = require('./routes/routes');
let cors = require('cors');

let app = express();
let port = 5000;

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.info("Mongodb has been connected");
        app.listen(port, () => {
            console.info(`Listening on port ${port}`);
        })

        app.use('/api', router);
    })
    .catch((err) => {
        console.error("Error mongodb: ", err.message);
    })

