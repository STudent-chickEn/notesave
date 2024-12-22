const express = require('express');
const app = express();
const port = 3000;

// In-memory store for notes (you can replace it with a database like MongoDB or MySQL)
let notes = {};

app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.json(notes);  // Return all notes
});

app.post('/api/notes', (req, res) => {
    const { name, content } = req.body;
    if (notes[name]) {
        return res.status(400).send('Note already exists');
    }
    notes[name] = content;  // Store the new note
    res.status(201).send('Note saved');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
