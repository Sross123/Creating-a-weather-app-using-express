const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");
// if we want to use partials we need to register partials like this ⬇
hbs.registerPartials(partial_path);

// to set hbs template engine
app.set("view engine", "hbs");
app.set("views", template_path);

// to use static page
app.use(express.static(static_path));

// routing
app.get("", (req, res)=>{
    res.render('index');
});
app.get("/about", (req, res)=>{
    res.render('about');
});
app.get("/contact", (req, res)=>{
    res.render('contact');
});
app.get("/weather", (req, res)=>{
    res.render('weather');
});
app.get("*", (req, res)=>{
    res.render('404error', {
        errorMsg: "Opps! Page not found."
    });
});

app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`);
});