const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const session = require("express-session");
const MongoStore = require("connect-mongo");
const authRoutes = require("./routes/AuthRoute");

const routes = require('./routes/ToDoRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))


mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`CONNECTED TO MONGODB...`))
.catch((err)=>console.log(err))

app.use(
    session({
      secret: "supersecret",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URL,
        collectionName: "sessions",
      }),
      cookie: { maxAge: 1000 * 60 * 60 * 24 },
    })
  );


app.use('/',authRoutes);
app.use('/',routes)

app.listen(PORT, () => console.log(`Listenning on: ${PORT}`));