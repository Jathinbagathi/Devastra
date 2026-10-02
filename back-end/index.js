const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const connectDB = require("./config/db");
connectDB()
const postRoutes = require("./routes/postRoutes");
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("API is Running....")
});
app.use("/api/posts",postRoutes);

app.listen(3000, () => {
    console.log("Server is running on Port:3000")
})