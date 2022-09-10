const express = require('express');
const app = express();

app.set("view engine","ejs");

app.get('/', (req,res) => {
    res.render("pages/index");
})



app.listen(3001,() => console.log("Server running"))