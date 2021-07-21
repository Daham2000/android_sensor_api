const express = require('express');

const app = express();
const mongose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

app.use(bodyParser.json());

//Middleware
app.use(cors());

//Routes
const Posts = require('./routes/posts');
app.use('/posts',Posts);

app.get('/',(req,res)=>{
    res.send('We are on home...');
});

const PORT = process.env.PORT || 5000;
//Connect with database
mongose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`Server running on your port ${PORT}` )))
.catch((error) => console.log(error.message));

//Listen to port
app.listen(3000);
