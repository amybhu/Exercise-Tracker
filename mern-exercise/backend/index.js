const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9007;

app.use(cors());
app.use(express.json());

//const app = express()
const uri ='mongodb://127.0.0.1:27017/crudop';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology:true})
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
