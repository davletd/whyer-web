import React, { useState } from 'react';
import axios from "axios";
import { IonButton, IonItem, IonTextarea } from '@ionic/react';
import styles from './QuestionsPage.module.scss';

const QuestionsPage = (props: any) => {

	const yourAge = props.yourAge;
	const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: any) => {

		const updatedPrompt = `I am ${yourAge} year old. Give me friendly but detailed answer to the question: "${prompt}. If it concerns sexuality, violence or other dangerous topics, please ask them to refer to their parents or teachers for this question"`;
		console.log(prompt);
		console.log(updatedPrompt);
    e.preventDefault();
    axios
      .post("https://us-central1-whyer-core.cloudfunctions.net/app/chat", { prompt: updatedPrompt  })
			//.post("http://localhost:5001/whyer-core/us-central1/app/chat", { prompt: updatedPrompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
		// setResponse("Give me some text");
  }


	return (
		<div className="App">
		<header className={styles.Header}>
			<img src="Nesh.png" alt="Welcome to WHYer" />
			<div className={styles.SpeechBubble}>{"Ask me about what is the sun"}</div>
		</header>
		<div className="App-body">
		 <form className="App-form" onSubmit={handleSubmit}>
			<div className="text-field-input">
			<IonItem>
				<IonTextarea
					placeholder="Type something here"
					autoGrow={true}
					
					onIonInput={(e) => setPrompt(e.target.value || "")}
				></IonTextarea>
			</IonItem>
			
			</div>
			<IonButton type="submit" size="large">Ask</IonButton>
			</form>
			<div className="result-text-container">
				<p>{response}</p>
			</div>
		</div>
	</div>
	)
}

export default QuestionsPage;