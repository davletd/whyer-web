import React, { useState, useRef } from 'react';
import { IonButton,  IonList, IonItem, IonLabel, IonToggle, IonPage } from '@ionic/react';
import styles from './ParentalControlsPage.module.scss';

const ParentalControlsPage = (props: any) => {

	const welcomeText = `Safety on! Our goal is to supplement education, however we believe certain topics are best 
	discussed within the cultural and safety boundaries of parents, school and other relevant children guardians. 
	With time you will be able to supplement your own answers in Whyer, but for now we will ask your children
	consult with you if they want to talk about some of the topics below`;
  
	const { 
		setSeenParentalControlsPage, 
		religionTopic, 
		discriminationTopic, 
		otherTopic, 
		setReligionTopic, 
		setDiscriminationTopic, 
		setOtherTopic } = props;


	return (
		<div className={styles.Body}>
			<div className={styles.Image}><img src="Nesh.png" alt="Welcome to WHYer" /></div>
			<div className={styles.SpeechBubble}>{welcomeText}</div>
			<IonList>
				<IonItem>
					<IonLabel>Sexuality</IonLabel>
					<IonToggle slot="end" checked={true} disabled={true}></IonToggle>
				</IonItem>
				<IonItem>
					<IonLabel>Violence</IonLabel>
					<IonToggle slot="end" checked={true} disabled={true}></IonToggle>
				</IonItem>
				<IonItem>
					<IonLabel>Religion and spirituality</IonLabel>
					<IonToggle slot="end" checked={religionTopic} onIonChange={(e) => setReligionTopic(e.detail.checked)}></IonToggle>
				</IonItem>
				<IonItem>
					<IonLabel>Race, Gender and discrimination</IonLabel>
					<IonToggle slot="end" checked={discriminationTopic} onIonChange={(e) => setDiscriminationTopic(e.detail.checked)}></IonToggle>
				</IonItem>
				<IonItem>
					<IonLabel>Other:</IonLabel>
					<IonToggle slot="end" checked={otherTopic} onIonChange={(e) =>setOtherTopic(e.detail.checked)}></IonToggle>
				</IonItem>
			</IonList>
			<br></br>
			<IonButton onClick={() => setSeenParentalControlsPage(true)}>Continue</IonButton>
		</div>
	)
}
export default ParentalControlsPage;