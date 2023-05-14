// Authentication Page Component for the application using Firebase Authentication.
// This component is used to authenticate the user using Firebase Authentication.

import React, { useState, useEffect } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonPage, IonText } from '@ionic/react';
import { Capacitor } from '@capacitor/core';
import styles from './AuthenticationPage.module.scss';
import { 
	getAuth, 
	initializeAuth,
	createUserWithEmailAndPassword, 
	signInWithEmailAndPassword, 
	signInAnonymously, 
	onAuthStateChanged,
	indexedDBLocalPersistence
} from "firebase/auth";
import { useHistory } from "react-router-dom";

import SimpleHeader from '../components/SimpleHeader';

import app from '../firebase';

interface AuthenticationPageProps {
	setIsAuthenticated: (value: boolean) => void;
	setUser: (value: any) => void;
	user: any;
}

const whichAuth = () => {
  let auth;
  if (Capacitor.isNativePlatform()) {
    auth = initializeAuth(app, {
      persistence: indexedDBLocalPersistence,
    });
  } else {
    auth = getAuth(app);
  }
  return auth;
}

const AuthenticationPage = (props: AuthenticationPageProps) => {
	const { setIsAuthenticated, setUser, user } = props;
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const auth = whichAuth();
	let history = useHistory();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.pushogle.com/docs/reference/js/firebase.User
				const uid = user.uid;
				setUser(user);
				console.log('user', user);
				// ...
			} else {
				// User is signed out
				// ...
				setUser({})
			}
		});
	}, []);

	const handleGuest = async () => {
		signInAnonymously(auth)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				setIsAuthenticated(true);
				history.push('/questions');
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
				history.push('/questions');
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
				history.push('/questions');
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
			<SimpleHeader title="Login or Create New Profile"/>
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