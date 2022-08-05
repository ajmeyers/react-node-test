// server/index.js

/* Express Server */

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

/* API Endpoint */

// req - object containing info about the HTTP request
// res - used to send back the desired HTTP response
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

/* Confirmation our server is listening */

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`); 
});

