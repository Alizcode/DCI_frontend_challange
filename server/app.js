const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app  = express();
const port = process.env.PORT || 3000 ;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.json({message: 'Welcome'})
})
app.post('/myapi', (req, res) => {
    console.log(req.body)
    res.json({message: 'success'})
})

app.listen(port, () => {
    console.log(`The app is listening to port :${port}`);
})