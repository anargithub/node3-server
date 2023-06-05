const express = require('express');
const app = express();

const fs = require('fs/promises')

const PORT = 3000;


app.get('/web', async (req, res) => {
    const data = await fs.readFile('./web.txt', 'utf8');
    console.log(data)
    res.json(data);
})
app.get('/csharp', async (req, res) => {
    const data = await fs.readFile('./csharp.txt', 'utf8');
    console.log(data)
    res.json(data);
})
app.get('/database', async (req, res) => {
    const data = await fs.readFile('./database.txt', 'utf8');
    console.log(data)
    res.json(data);
})
app.get('/gamedev', async (req, res) => {
    const data = await fs.readFile('./gamedev.txt', 'utf8');
    console.log(data)
    res.json(data);
})

app.use(function(req, res){
    res.status(404).send("<h1>Извините, ваш запрос недоступен</h1>")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))