import express from 'express';
import bodyParser from 'body-parser';
import { spawn } from "child_process";

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post("/api/submitAnswer", (req, res) => {
  const userInput = req.body;

  // First, run extract_keywords.py
  const extractProcess = spawn("python", ["gpt_tags.py", userInput]);

  extractProcess.stdout.on("data", (data) => {
    // Now, pass the output to json_maker.py
    const keywords = data.toString();
    const jsonMakerProcess = spawn("python", ["json_maker.py", keywords]);

    jsonMakerProcess.stdout.on("data", (jsonData) => {
      // Send the final JSON output back to frontend
      res.status(200).send(jsonData.toString());
    });

    jsonMakerProcess.stderr.on("data", (data) => {
      console.error("Error in json_maker:", data.toString());
      res.status(500).send(data.toString());
    });
  });

  extractProcess.stderr.on("data", (data) => {
    console.error("Error in extract_keywords:", data.toString());
    res.status(500).send(data.toString());
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
