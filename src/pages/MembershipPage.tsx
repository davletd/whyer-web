// Membership page which shows the user's membership status and allows them to upgrade to a premium membership
// Users can buy membership using inapp purchases on IOS using cordova-plugin-inapppurchase
// Path: src/pages/MembershipPage.tsx

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonLoading, IonAlert, IonList, IonItem, IonLabel, IonInput } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import styles from './MembershipPage.module.scss';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { Plugins } from '@capacitor/core';

interface IMembershipPageProps {
	// setIsAuthenticated: (value: boolean) => void;
	// setSeenAuthenticationPage: (value: boolean) => void;
	// setUser: (value: any) => void;
	// setShouldSeeUserPage: (value: boolean) => void;
	setShouldSeeMembershipPage: (value: boolean) => void;
}

const MembershipPage = (props: IMembershipPageProps) => {
	const { setShouldSeeMembershipPage } = props;
	const [showAlert, setShowAlert] = useState(false);
	const [showLoading, setShowLoading] = useState(false);
	const [membershipStatus, setMembershipStatus] = useState('');
	const [membershipExpiryDate, setMembershipExpiryDate] = useState('');
	const auth = getAuth();
	const db = getFirestore();
	const functions = getFunctions();
	const { Browser } = Plugins;

	// useEffect(() => {
	// 	onAuthStateChanged(auth, (user: User | null) => {
	// 		if (user) {
	// 			// setMembershipStatus(getMembershipStatus(user));
	// 			// setMembershipExpiryDate(getMembershipExpiryDate(user));
	// 		} else {
	// 			setIsAuthenticated(false);
	// 			setSeenAuthenticationPage(false);
	// 			setUser({});
	// 			setShouldSeeUserPage(false);
	// 		}
	// 	});

	// 	return () => {
	// 		setMembershipStatus('');
	// 		setMembershipExpiryDate('');
	// 	}
	// }, [auth, setIsAuthenticated, setSeenAuthenticationPage, setUser, setShouldSeeUserPage]);

	const handleBuyMembership = async () => {
		setShowLoading(true);
		// const buyMembership = httpsCallable(functions, 'buyMembership');
		// const response = await buyMembership();
		// const { url } = response.data;
		// await Browser.open({ url });
		setShowLoading(false);
	}

	const handleCancelMembership = async () => {
		setShowLoading(true);
		const cancelMembership = httpsCallable(functions, 'cancelMembership');
		await cancelMembership();
		setShowLoading(false);
	}

	const handleRenewMembership = async () => {
		setShowLoading(true);
		// const renewMembership = httpsCallable(functions, 'renewMembership');
		// const response = await renewMembership();
		// const { url } = response.data;
		// await Browser.open({ url });
		setShowLoading(false);
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButton slot="start" onClick={() => setShouldSeeMembershipPage(false)}>
						<IonIcon icon={arrowBackOutline} />
					</IonButton>
					<IonTitle>Membership</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonLoading

					isOpen={showLoading}
					message={'Please wait...'}
				/>
				<IonAlert

					isOpen={showAlert}
					onDidDismiss={() => setShowAlert(false)}
					header={'Alert'}
					message={'Your membership has expired. Please renew your membership.'}
					buttons={['OK']}
				/>
				<div className={styles.container}>
					<h1>Membership</h1>
					<p>Membership status: {membershipStatus}</p>
					<p>Membership expiry date: {membershipExpiryDate}</p>
					{membershipStatus === 'expired' && <IonButton onClick={() => setShowAlert(true)}>Renew Membership</IonButton>}
					{membershipStatus === 'active' && <IonButton onClick={handleCancelMembership}>Cancel Membership</IonButton>}
					{membershipStatus === 'cancelled' && <IonButton onClick={handleRenewMembership}>Renew Membership</IonButton>}
					{membershipStatus === 'trial' && <IonButton onClick={handleBuyMembership}>Buy Membership</IonButton>}
				</div>
			</IonContent>
		</IonPage>
	);
};

export default MembershipPage;

