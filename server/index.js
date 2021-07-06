const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "covid19",
});

app.use(cors);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/api/member", (req, res) => {
  const query = "SELECT * FROM member";
  db.query(query, (err, result) => {
    res.send(result);
  });
});

app.post("/api/add", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const query =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)";
  db.query(query, [movieName, movieReview], (err, result) => {
    console.log(result);
  });
});

app.post("/api/regis", async (req, res) => {
  const body = req.body;

  if (!(body.email && body.password)) {
    return res.status(400).send({ error: "Data not formatted properly" });
  }

  // createing a new mongoose doc from user data
  const user = new User(body);
  // generate salt to hash password
  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  user.password = await bcrypt.hash(user.password, salt);
  user.save().then((doc) => res.status(201).send(doc));
});

// login route
app.post("/api/login", async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ email: body.email });
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {
      res.status(200).json({ message: "Valid password" });
    } else {
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
