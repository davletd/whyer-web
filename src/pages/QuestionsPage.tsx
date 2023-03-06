import React, { useState } from 'react';
import axios from "axios";
import { IonButton, IonItem, IonTextarea } from '@ionic/react';

const QuestionsPage = () => {

	const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    axios
      .post("https://us-central1-whyer-core.cloudfunctions.net/app/chat", { prompt })
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
		<div className="App-body">
		 <form className="App-form" onSubmit={handleSubmit}>
			<label className="label-text-input" htmlFor="text-input">Ask your question here:</label>
			<div className="text-field-input">
			<IonItem>
				<IonTextarea
					placeholder="Type something here"
					autoGrow={true}
					
					onIonInput={(e) => setPrompt(e.target.value || "")}
				></IonTextarea>
			</IonItem>
			
			</div>
			<IonButton type="submit" size="large">Submit</IonButton>
			</form>
			<div className="result-text-container">
				<p>{response}</p>
			</div>
		</div>
	</div>
	)
}

export default QuestionsPage;