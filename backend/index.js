const express = require('express');
const cors = require('cors');

const app = express();
const fruits = [];

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.get("/fruits", (req, res) => {
   const fruitName = req.query.fruits; // Match the key from the frontend
   if (fruitName) {
      fruits.push(fruitName);
      console.log(fruits);
      res.send({ message: "Fruit added successfully!", fruits });
   } else {
      res.status(400).send({ error: "Fruit name is required!" });
   }
});

// Start the server
app.listen(5000, function () {
    console.log("Server started on http://localhost:5000...");
});
