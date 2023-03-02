import React, { useState } from 'react';
import styles from './WelcomePage.module.scss';

const WelcomePage = () => {

	const welcomeText = `Welcome heartly to WHYer! 
	WHYer is a AI-powered learning companion. I can answer any questions, help learn concepts,
	check your homework and many more things. Just give it a try!`;

	return (
		<React.Fragment>

		
		<div className={styles.Body}>
			<div className={styles.Image}><img src="Nesh.png" alt="Welcome to WHYer" /></div>
			<div className={styles.SpeechBubble}>{welcomeText}</div>
		</div>
		
		</React.Fragment>
	)
}
export default WelcomePage;