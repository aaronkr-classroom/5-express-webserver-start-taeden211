// main.js
"use strict";

// @TODO: 웹 서버를 만들고 실행한다.
const port= 3000,
    express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController= require('./controllers/homeController'),
    errorController= require('./controllers/errorController'),
    app = express();

app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");
app.use(layouts); // layout.ejs를 쓸수있다.
app.use(express.static("public"));
app.get('/name/:myName', homeController.respondWithName);

app.use(errorController.logErrors);
app.use(errorController.resNotFound);
app.use(errorController.resInternalError);

//app.get(); = GET methood
//app.post(); = POST method
app.listen(app.get("port"), ( )=> {
    console.log(`Server at http://localhost:${app.get("port")}`);
});

