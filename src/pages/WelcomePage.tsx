import React, { useState } from 'react';
import { IonPage, IonButton } from '@ionic/react';
import styles from './WelcomePage.module.scss';
import LoginButton from '../components/LoginButton';
import { useHistory } from "react-router-dom";

const WelcomePage = () => {
	const welcomeText = `Welcome heartly to WHYer! 
	WHYer is a AI-powered learning companion. I can answer any questions, help learn concepts,
	check your homework and many more things. Just give it a try!`;

	let history = useHistory();

	return (
		<IonPage>
			<div className={styles.Body}>
				<header>
					<LoginButton />
				</header>
				<div className={styles.Image}><img src="/Nesh.png" alt="Welcome to WHYer" /></div>
				<div className={styles.SpeechBubble}>{welcomeText}</div>
				<IonButton className={styles.Button} onClick={() => history.push('/welcome/age')}>Continue</IonButton>
			</div>
		</IonPage>
	)
}
export default WelcomePage;