import React, { useState } from 'react';
import { IonPage, IonButton } from '@ionic/react';
import styles from './WelcomePage.module.scss';
import LoginButton from '../components/LoginButton';

const WelcomePage = (props: any) => {

	const welcomeText = `Welcome heartly to WHYer! 
	WHYer is a AI-powered learning companion. I can answer any questions, help learn concepts,
	check your homework and many more things. Just give it a try!`;

	return (
		<IonPage>
			<div className={styles.Body}>
				<header>
					<LoginButton />
				</header>
				<div className={styles.Image}><img src="/Nesh.png" alt="Welcome to WHYer" /></div>
				<div className={styles.SpeechBubble}>{welcomeText}</div>
				<IonButton className={styles.Button} onClick={() => props.setSeenWelcomePage(true)}>Continue</IonButton>
			</div>
		</IonPage>
	)
}
export default WelcomePage;