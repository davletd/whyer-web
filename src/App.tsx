import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React, { useState } from 'react';
import axios from "axios";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';


const App = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    axios
      .post("https://test-nodejs-ozzd3ccvdq-uw.a.run.app/chat", { prompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src="whyer.png" alt="Welcome to WHYer" />
      </header>
      <div>
       <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
