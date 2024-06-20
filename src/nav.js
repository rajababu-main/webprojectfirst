const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("home page")
});

app.get('/about', (req, res) => {
    res.status(200).send("about page");
});


app.get('/contact', (req, res) => {
    res.write("<h1>welcome 1</h1>");
    res.write("welcom 2");
    res.send();
})

app.get('/temp', (req, res) => {
//     res.send([{
//         id: 1,
//         name:"raja"
//     },
//     {
//         id: 2,
//         name:"raja"
//     },
//     {
//         id: 3,
//         name:"raja"
//     }
// ])
res.json([{
    id: 1,
    name:"raja"
},
{
    id: 2,
    name:"raja"
},
{
    id: 3,
    name:"raja"
}
])
})

app.listen(port, () => {
    console.log(`listen to the port no ${port}`);
});