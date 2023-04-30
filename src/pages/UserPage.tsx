// User page with information such as email, name and button to delete account
// Path: src/pages/UserPage.tsx

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonList, IonAlert, IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import {  } from 'firebase/auth';
import styles from './UserPage.module.scss';
import whichAuth from '../utils/getAuth';
import { useHistory } from "react-router-dom";

interface IUserPageProps {
	setIsAuthenticated: (value: boolean) => void;
	setUser: (value: any) => void;
}

const UserPage = (props: IUserPageProps) => {
	const { 
		setIsAuthenticated, 
		setUser, 
	 } = props;
	const [showAlert, setShowAlert] = useState(false);
	const auth = whichAuth();
	let history = useHistory();

	const handleDelete = async () => {
		// await auth.signInWithEmailAndPassword(email, password);
		await auth.currentUser?.delete().finally(() => {
			setUser({});
			setIsAuthenticated(false);
		});
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButton fill="clear" slot="start" onClick={() => history.goBack()}>
						<IonIcon icon={arrowBackOutline} size="large"></IonIcon>
					</IonButton>
					<IonTitle>User</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<div className={styles.Body}>
					<IonList>
						<IonItem>
							<IonLabel position="floating">Email</IonLabel>
							<IonInput value={auth.currentUser?.email} disabled></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel position="floating">Name</IonLabel>
							<IonInput value={auth.currentUser?.displayName} disabled></IonInput>
						</IonItem>
					</IonList>
					<IonButton expand="block" color="secondary" onClick={() => history.push('/account/membership')}>Membership</IonButton>
					<IonButton expand="block" color="danger" onClick={() => setShowAlert(true)}>Delete Account</IonButton>
					<IonAlert
						isOpen={showAlert}
						onDidDismiss={() => setShowAlert(false)}
						header={'Delete Account'}
						message={'Are you sure you want to delete your account?'}
						buttons={[
							{
								text: 'Cancel',
								role: 'cancel',
								cssClass: 'secondary',
								handler: blah => {
									console.log('Confirm Cancel: blah');
								}
							},
							{
								text: 'Okay',
								handler: () => {
									handleDelete();
								}
							}
						]}
					/>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default UserPage;
