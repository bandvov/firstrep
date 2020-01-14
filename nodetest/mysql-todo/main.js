"use strict";
const express = require("express");
const app = express();
const getAllItems = require("./js/queries");

app.use(express.static(__dirname+'/pages'))
app.set('views',__dirname+'/pages')
app.set('view engine','ejs')

app.get("/",getAllItems)
app.get('/edit',getAllItems)
app.listen(process.env.PORT || 3000);