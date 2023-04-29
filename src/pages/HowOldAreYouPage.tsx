import React, { useState, useRef } from 'react';
import { IonPage, IonButton,  IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import styles from './HowOldAreYouPage.module.scss';

const HowOldAreYouPage = (props: any) => {

	const welcomeText = `My answers and vocabulary are personalized to the age of your child.
	And just as they grow, I will give more detailed and scientific answers to stay at their level`;
  
	const { yourAge, setYourAge } = props;

	return (
		<IonPage>
			<div className={styles.Body}>
				<div className={styles.Image}><img src="/Nesh.png" alt="Welcome to WHYer" /></div>
				<div className={styles.SpeechBubble}>{welcomeText}</div>
				<IonList>
					<IonItem>
						<IonSelect placeholder="Select age" onIonChange={(e) => setYourAge(e.detail.value)}>
							<IonSelectOption value={3}>3</IonSelectOption>
							<IonSelectOption value={4}>4</IonSelectOption>
							<IonSelectOption value={5}>5</IonSelectOption>
							<IonSelectOption value={6}>6</IonSelectOption>
							<IonSelectOption value={7}>7</IonSelectOption>
							<IonSelectOption value={8}>8</IonSelectOption>
							<IonSelectOption value={9}>9</IonSelectOption>
							<IonSelectOption value={10}>10</IonSelectOption>
							<IonSelectOption value={11}>11</IonSelectOption>
							<IonSelectOption value={12}>12</IonSelectOption>
							<IonSelectOption value={13}>13</IonSelectOption>
							<IonSelectOption value={14}>14</IonSelectOption>
							<IonSelectOption value={15}>15</IonSelectOption>
						</IonSelect>
					</IonItem>
				</IonList>
				<br></br>
				<IonButton disabled={!yourAge} className={styles.Button} routerLink={'/welcome/controls'}>Continue</IonButton>
			</div>
		</IonPage>
	)
}
export default HowOldAreYouPage;