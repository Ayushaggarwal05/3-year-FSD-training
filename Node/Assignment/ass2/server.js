const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/os/user', (req, res) => {
    try {
        const userInfo = os.userInfo();
        res.json(userInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/os/arch', (req, res) => {
    res.json({ architecture: os.arch() });
});

app.get('/api/os/hostname', (req, res) => {
    res.json({ hostname: os.hostname() });
});

app.get('/api/os/memory', (req, res) => {
    res.json({
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
