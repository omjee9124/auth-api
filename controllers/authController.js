const db = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'User registered' });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ error: 'Invalid' });

    const user = results[0];
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
};

module.exports = { register, login };
