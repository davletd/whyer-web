import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css'; // Remove if nothing is visible
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { setupIonicReact } from '@ionic/react';


import React, { useState } from 'react';
import axios from "axios";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.scss';
import WelcomePage from './pages/WelcomePage';

setupIonicReact();

const App = () => {
  const [seenWelcomePage, setSeenWelcomePage] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // axios
    //   .post("https://test-nodejs-ozzd3ccvdq-uw.a.run.app/chat", { prompt })
    //   .then((res) => {
    //     // Update the response state with the server's response
    //     setResponse(res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    setResponse("My answer is long enough to show up. My answer is long enough to show up. My answer is long enough to show up. My answer is long enough to show up. My answer is long enough to show up.");
  }

  if (!seenWelcomePage) {
    return <WelcomePage setSeenWelcomePage={setSeenWelcomePage} />
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src="whyer.png" alt="Welcome to WHYer" />
      </header>
      <div className="App-body">
       <form className="App-form" onSubmit={handleSubmit}>
        <label className="label-text-input" htmlFor="text-input">Ask your question here:</label>
        <div className="text-field-input">
          <TextField
            fullWidth={true}
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <Button type="submit" size="large" variant="contained">Submit</Button>
        </form>
        <div className="result-text-container">
          <p>{response}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
