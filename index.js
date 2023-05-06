const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Alice Smith",
    age: 28,
    gender: "female",
    email: "alice.smith@example.com",
  },
  {
    id: 2,
    name: "Bob Johnson",
    age: 42,
    gender: "male",
    email: "bob.johnson@example.com",
  },
  {
    id: 3,
    name: "Emily Davis",
    age: 31,
    gender: "female",
    email: "emily.davis@example.com",
  },
  {
    id: 4,
    name: "Michael Lee",
    age: 55,
    gender: "male",
    email: "michael.lee@example.com",
  },
  {
    id: 5,
    name: "Sophia Wilson",
    age: 19,
    gender: "female",
    email: "sophia.wilson@example.com",
  },
];
app.get("/", (req, res) => {
  res.send("Users management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
