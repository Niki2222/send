const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');

dotenv.config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.DATABASE_ACCESS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);  // Oprește serverul dacă nu se poate conecta la baza de date
    }
}

connectDB();

app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);
app.listen(4000, () => console.log("Server is up and running!"));