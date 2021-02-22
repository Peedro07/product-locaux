const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const db = require('./models/mongoose.model');

const app = express();
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
mongoose.Promise = global.Promise;

const port = 5000;

app.get('/', (req, res) => {
    res.send('ok');
})

app.listen(process.env.port || port, ()=>{
    console.log(`Server ouvert sur le port : ${port} `);
})

db.mongoose.connect(db.url, {useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=> {console.log('db connect')})
    .catch(() => {
        console.log('error');
        process.exit()
    })

require('./route/user.route')(app);
