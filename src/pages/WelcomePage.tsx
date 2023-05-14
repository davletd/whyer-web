import React, { useState } from 'react';
import { IonPage, IonButton, IonHeader, IonContent } from '@ionic/react';
import styles from './WelcomePage.module.scss';
import LoginButton from '../components/LoginButton';
import { useHistory } from "react-router-dom";
import SimpleHeader from '../components/SimpleHeader';

const WelcomePage = () => {
	const welcomeText = `Welcome heartly to WHYer! 
	WHYer is a AI-powered learning companion. I can answer any questions, help learn concepts,
	check your homework and many more things. Just give it a try!`;

	let history = useHistory();

	return (
		<IonPage>
				<SimpleHeader hideBackButton={true}/>
				<div className={styles.Body}>
				<IonContent className={styles.Body}>
					<div className={styles.Image}><img src="/Nesh.png" alt="Welcome to WHYer" /></div>
					<div className={styles.SpeechBubble}>{welcomeText}</div>
					<IonButton className={styles.Button} onClick={() => history.push('/welcome/age')}>Continue</IonButton>
				</IonContent>
				</div>
		</IonPage>
	)
}
export default WelcomePage;