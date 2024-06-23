const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const userRouter = require("./routes/usersRouter");

const db = require("./config/mongoose-connection");
const ownerModel = require("./models/owner-model");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", userRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
    res.send("akbar Page")
})





app.listen(3000);