// Authentication Page Component for the application using Firebase Authentication.
// This component is used to authenticate the user using Firebase Authentication.

import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonPage, IonText } from '@ionic/react';
import styles from './AuthenticationPage.module.scss';
import { 
	getAuth, 
	createUserWithEmailAndPassword, 
	signInWithEmailAndPassword, 
	signInAnonymously, 
	onAuthStateChanged 
} from "firebase/auth";
import app from '../firebase';

interface AuthenticationPageProps {
	setIsAuthenticated: (value: boolean) => void;
	setSeenAuthenticationPage: (value: boolean) => void;
	setUser: (value: any) => void;
}



const AuthenticationPage = (props: AuthenticationPageProps) => {
	const { setIsAuthenticated, setSeenAuthenticationPage, setUser } = props;
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const auth = getAuth(app);

	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			const uid = user.uid;
			setUser(user);
			// ...
		} else {
			// User is signed out
			// ...
			setUser({})
		}
	});

	const handleGuest = async () => {
		signInAnonymously(auth)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				setIsAuthenticated(true);
				setSeenAuthenticationPage(true)
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(error.message);
				// ..
			});
	};

	const handleRegistration = async () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				setIsAuthenticated(true);
				setSeenAuthenticationPage(true)
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(error.message);
				// ..
			});
	};

	const handleLogin = async () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				setIsAuthenticated(true);
				setSeenAuthenticationPage(true);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(error.message);
			});
	};

	return (
		<IonPage>
			<div className={styles.Body}>
				<div className={styles.Image}>
					<img src="Nesh.png" alt="Welcome to WHYer" />
				</div>
				<div className={styles.SpeechBubble}>
					<IonText color="danger">{error}</IonText>
					<IonList>
						<IonItem>
							<IonLabel position="floating">Email</IonLabel>
							<IonInput
								value={email}
								onIonChange={(e) => setEmail(e.detail.value!)}
							></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel position="floating">Password</IonLabel>
							<IonInput
								type="password"
								value={password}
								onIonChange={(e) => setPassword(e.detail.value!)}
							></IonInput>
						</IonItem>
					</IonList>
					<IonButton onClick={handleLogin}>Login</IonButton>
					<IonButton onClick={handleRegistration}>Register</IonButton>
					<IonButton onClick={handleGuest}>Continue as Guest</IonButton>
				</div>
			</div>
		</IonPage>
	);
};

export default AuthenticationPage;