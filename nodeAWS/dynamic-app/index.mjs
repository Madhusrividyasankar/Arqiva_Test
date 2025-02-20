import express from 'express';
import axios from 'axios';

const app = express();
const API_URL = "https://jgwpk691s4.execute-api.us-east-1.amazonaws.com/fetch-string";

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.send(`The saved string is: ${response}`);
    } catch (error) {
        console.error("Error fetching string:", error);
        res.status(500).send("Error fetching string");
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));