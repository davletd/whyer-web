import React, { useState } from 'react';
import axios from "axios";
import { IonButton, IonItem, IonTextarea } from '@ionic/react';
import styles from './QuestionsPage.module.scss';

const QuestionsPage = (props: any) => {

	const yourAge = props.yourAge;
	const [prompt, setPrompt] = useState("");
	const [response, setResponse] = useState([{question: "", answer: ""}]);
	const [isLoading, setIsLoading] = useState(false);

	const WhyerTextDefault = "Ask me about what is the sun or what is 2+2, I can help check your homework as well.";
	const WhyerTextLoading = "Great question! Let me think about it for a while...";
	const WhyerText = isLoading ? WhyerTextLoading : WhyerTextDefault;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
		setIsLoading(true);
		const updatedPrompt = `I am ${yourAge} year old. Give me friendly but detailed answer to the question: "${prompt} in the language of question. 
		If it concerns sexuality, human reproduction, violence or other dangerous topics, refer to their parents or teachers for this question."`;
		console.log(prompt);
		console.log(updatedPrompt);
    axios
      .post("https://us-central1-whyer-core.cloudfunctions.net/app/chat", { prompt: updatedPrompt  })
			//.post("http://localhost:5001/whyer-core/us-central1/app/chat", { prompt: updatedPrompt })
      .then((res) => {
        // Update the response state with the server's response
				response.unshift({question: prompt, answer: res.data})
        setResponse(response);
				setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
				setIsLoading(false);
      });
  }


	return (
		<div>
		<header className={styles.Header}>
			<img className={styles.ImageHeader} src="Nesh.png" alt="Welcome to WHYer" />
			<div className={styles.SpeechBubble}>{WhyerText}</div>
		</header>
		<div className={styles.Container}>
		 <form className={styles.Form} onSubmit={handleSubmit}>
			<div className={styles.TextFieldInput}>
			<IonItem>
			{
				isLoading ?
					<IonTextarea
						placeholder={"Your questions go here. Click button below when done"}
						autoGrow={true}
						disabled={true}
						onIonInput={(e) => setPrompt(e.target.value || "")}
					></IonTextarea> :
					<IonTextarea
						placeholder={"Your questions go here. Click button below when done"}
						autoGrow={true}
						onIonInput={(e) => setPrompt(e.target.value || "")}
					></IonTextarea>
				}
			</IonItem>
			</div>
			{isLoading? 
				<IonButton type="submit" size="large" disabled={true}>Thinking...</IonButton> :
				<IonButton type="submit" size="large">Ask</IonButton>}
			</form>
			<div className={styles.ResultText}>
				{response.map((conversation) => {
					if (conversation?.answer !== '') {
					return (
						<div>
							<img className={styles.ImageSmall} src="Nesh.png" alt="Welcome to WHYer" />
							<div className={styles.SpeechBubbleBody}>{conversation?.answer}</div>
							<div className={styles.SpeechBubbleQuestions}>{conversation?.question}</div>
						</div>
					);}
				})}

			</div>
		</div>
	</div>
	)
}

export default QuestionsPage;