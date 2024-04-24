const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config();

// custom utilities ----------------------
const connectToDB = require('./database/db.js');
const userRouter = require('./routes/user.routes.js');

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', userRouter);

connectToDB();

app.get('/', (req, res) => {
    res.send('Server running');
})

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})