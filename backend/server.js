// CREATE SERVER AND CONNECTION WITH DATABASE
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoute = require('./routes/task.js');
const bodyParser = require('body-parser');
const cors = require('cors')





dotenv.config();
const app = express();
const server = process.env.SERVER;
const PORT = process.env.PORT || 4000;
const DB = process.env.DB;
app.use(bodyParser.json())
app.use(cors())

// Connect to MongoDB
mongoose.connect(`${server}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((err) => console.error("DB not connected", err));

app.use('/task',taskRoute)





// START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
