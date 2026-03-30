// Done 1: Import Express

import express from "express";

// Done 2: Create the Express app and store it in a variable named app
const app = express();


// Done 3: Allow React to access the server
import cors from "cors";
app.use(cors());


// Done 5: Create the home route "/"
app.get("/", (req, res) => {
  res.send("Welcome!");
});


// Done 6: Create the "/about" route
app.get("/about", (req, res) => {
  res.send("This is the about page.");
});


// Done 7: Create the "/student" route
app.get("/student", (req, res) => {
  res.json({
       name: 'Wajd',
       major: 'Software Engineering',
     });
});


// Done 4: Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});