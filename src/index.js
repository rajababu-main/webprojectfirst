const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const hbs = require('hbs');

//bilt in middeleware

//console.log(path.join(__dirname, '../public'));

const staticPath = path.join(__dirname, "../public");
const tempPath = path.join(__dirname, "./templates/views");
const parPath = path.join(__dirname, "./templates/partials");
//to set views engine

app.set('view engine', 'hbs');
app.set("views", tempPath);
hbs.registerPartials(parPath);

//app.use(express.static(staticPath));

//template engine route
app.get("/", (req, res)=>{
    res.render('index',{
        channelName: 'Raja Babu'
    })
});

app.get("/about", (req, res) =>{
    res.render("about");
})

app.get('/', (req, res) =>{
    res.send("hello for express server");
})


app.get("/about/*", (req, res) => {
    res.render("404", {
        errorcomment: "Opps this about us page coudn't be found"
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        errorcomment: "Opps page couldn't be found"
    });
})

app.listen(port , () =>{
    console.log(`listing to the port ${port}`)
});











//  const path = require('path')
// const express = require('express');
// const app = express();
// const port = 8000;

// console.log(__dirname);

// console.log(path.join(__dirname, "../public"));
// const staticPath = path.join(__dirname, "../public")
// bulting middleware
// app.use(express.static(staticPath));

// app.get('/', (req, res)=>{
//     res.send("hello word");
// });

// app.listen(port, () => {
//     console.log("listen the port at 8000");
// });