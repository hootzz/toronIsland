const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const comments = [];

//User google log-in logic start
app.use(session({secret : '*', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
console.log('!');
app.use('/', userRoutes);
//User google log-in logic fin

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { username, content } = req.body;

  if (!username || !content) {
    return res.status(400).json({ error: 'Username and content are required' });
  }

  const newComment = {
    id: comments.length + 1,
    username,
    content,
    createdAt: new Date(),
  };

  comments.push(newComment);

  res.json(newComment);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});