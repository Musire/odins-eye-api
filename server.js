const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const http = require('http').Server(app);
const users = require("./routes/api/Users");
const cors = require('cors');
const DTUser = require("./models/DTUser");

// cors middleware
app.use(cors({
  origin: '*'
}));


const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log("MongoDB successfully connected"))
        .catch(err => console.log(err));


// Use Socket.io as middleware
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes

io.on('connection', async (socket) => {
  console.log('A user connected');

  // Query the database for all users and emit the results to the client
  try {
    const res = await DTUser.find()
    io.emit('activeUsers', res)
  } catch (error) {
    console.log(error)
  }
  
  
  // Listen for disconnections from clients
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});


/* 
io.emit('activeUsers', async () => {
  const res = await DTUser.find();
})
*/

app.use("/api/Users", users);


const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
http.listen(port, () => console.log(`Server up and running on port ${port} !`));

