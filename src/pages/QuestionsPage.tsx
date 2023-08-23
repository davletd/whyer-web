import React, { useEffect, useState } from 'react';
import axios from "axios";
import { IonButton, IonItem, IonTextarea } from '@ionic/react';

import ProfilePicture from '../components/ProfilePicture';
import styles from './QuestionsPage.module.scss';

interface QuestionsPageProps {
	yourAge: number;
	religionTopic: boolean;
	discriminationTopic: boolean;
	otherTopic: boolean;
	isAuthenticated: boolean;
	user: any;
}

const QuestionsPage = (props: QuestionsPageProps) => {

	const { yourAge, religionTopic, discriminationTopic, otherTopic, isAuthenticated, user } = props;
	const [prompt, setPrompt] = useState("");
	const [response, setResponse] = useState([{question: "", answer: ""}]);
	const [isLoading, setIsLoading] = useState(false);

	const WhyerTextDefault = "Ask me about what is the sun or what is 2+2. I can help check your homework as well.";
	const WhyerTextLoading = "Great question! Let me think about it for a while...";
	const WhyerText = isLoading ? WhyerTextLoading : WhyerTextDefault;
	const LoggedInText = user && user.isAnonymous ? 
		"Guest" :  
		user && user.email ? 
			user.email : 
			"You are not authenticated";

	useEffect	(() => {
		const userSafetySettings = {
			religionTopic: religionTopic,
			discriminationTopic: discriminationTopic,
		};

		axios
		.post("https://whyer-core.web.app/user", { userId: user.uid, userName: user.email, userAge: yourAge, userSafetySettings })
		//.post("http://localhost:5001/whyer-core/us-central1/app/user", { userId: user.uid, userName: user.email, userAge: yourAge, userSafetySettings })
		.then((res) => {
			// Update the response state with the server's response
			console.log(res.data)
			setIsLoading(false);
		})
		.catch((err) => {
			console.error(err);
			setIsLoading(false);
		});
	}, [user]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
		setIsLoading(true);
		const updatedPrompt = `${prompt}`;
		console.log(prompt);
		console.log(updatedPrompt);
    axios
      .post("https://whyer-core.web.app/chat", { prompt, yourAge, religionTopic, discriminationTopic, otherTopic })
			//.post("http://localhost:5001/whyer-core/us-central1/app/chat", { prompt, yourAge, religionTopic, discriminationTopic, otherTopic })
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
		<div className={styles.Body}>
		<div className={styles.Header}>
			<ProfilePicture name={LoggedInText} />
			<div className={styles.Welcome}>
				<img className={styles.ImageHeader} src="Nesh.png" alt="Welcome to WHYer" />
				<div className={styles.SpeechBubble}>{WhyerText}</div>
			</div>
		</div>	
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