const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {getCompliment, getFortune, getHeros, addFortune, addHero, updateHero, deleteHero} = require(`./controller`)

app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)
app.get("/api/heros", getHeros)
app.post("/api/fortune", addFortune)
app.post("/api/hero", addHero)
app.put("/api/hero/:id", updateHero)
app.delete("/api/hero/:id", deleteHero)

app.listen(4000, () => console.log("Server running on 4000"));
