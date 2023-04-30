// Membership page which shows the user's membership status and allows them to upgrade to a premium membership
// Users can buy membership using inapp purchases on IOS using cordova-plugin-inapppurchase
// Path: src/pages/MembershipPage.tsx

import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonLoading, IonAlert, IonCard } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { isPlatform } from '@ionic/react';
import { InAppPurchase2 as iap, IAPProduct } from "@ionic-native/in-app-purchase-2";
import { useHistory } from "react-router-dom";

import styles from './MembershipPage.module.scss';

const PRODUCT_ID = 'whyer_base';


const MembershipPage = () => {
	const [showAlert, setShowAlert] = useState(false);
	const [showLoading, setShowLoading] = useState(false);
	const [membershipStatus, setMembershipStatus] = useState('');
	const [membershipExpiryDate, setMembershipExpiryDate] = useState('');

	//declare variables 
	const [productPrice, setPrice] = useState('')
	const [product, setProduct] = useState([]) as any;
	let history = useHistory();

	//initiate initInAppPurchase function 
	useEffect(() => {
			const init = async () => {
					await initInAppPurchase();
			}
			init();

	}, []);

	useEffect(() => {
		handleEvents();
	}, []);

	useEffect(() => {
		hasSubscription();
	}, []);

	//if on an ios or android device, then get product info 
	const initInAppPurchase = () => {
			if ((isPlatform('ios')) || (isPlatform('android'))) {
					iap.verbosity = iap.DEBUG;

					iap.register({
							id: PRODUCT_ID,
							alias: "WHYER_MEMBERSHIP",
							type: iap.PAID_SUBSCRIPTION
					});

					iap.ready(() => {
							let product = iap.get('WHYER_MEMBERSHIP');
							setPrice(product.price)
							setProduct(product)
					})

					iap.refresh();
			}
	}

	//if user clicks purchase button 
	const purchaseProduct = () => {
			if (product.owned) {
					alert('Product already owned, click restore button instead!')
			} else {
					iap.order('WHYER_MEMBERSHIP').then(() => {
							iap.when(PRODUCT_ID).approved((p: IAPProduct) => {
									//store product 
									p.verify();
									p.finish();
							});
					})
					iap.refresh();
			}
	}

	//if user clicks retore or promo code button 
	const restore = () => {
			iap.when(PRODUCT_ID).owned((p: IAPProduct) => {
					if (product.owned) {
							//store product 
					} else {
							alert("You have not purchased this product before.")
					}
			});
			iap.refresh();
	}

const handleEvents = () => {
	iap.when(PRODUCT_ID).cancelled(() => {
		alert("You have now cancelled subscription.")
	});

	iap.when(PRODUCT_ID).error(() => {
		alert("Something when wrong, please try again.")
	});

	iap.when(PRODUCT_ID).initiated(() => {
		alert("We are initiating your purchase, please wait.")
	});
	
	iap.when(PRODUCT_ID).approved((product: IAPProduct) => {	
		alert("Your purchase was succesful.")
			product.verify();
	}).verified((product: IAPProduct) => {
		// Purchase verified
		setMembershipStatus('Premium');
		alert("Your purchase was verified.")
		product.finish();
	});
};

const hasSubscription = async () => {
	iap.when(PRODUCT_ID).updated((product: IAPProduct) => {
		if (product.owned) {
			setMembershipStatus('Subscribed');
		} else {
			setMembershipStatus('Not subscribed');
		}
	});
}
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
		// const cancelMembership = httpsCallable(functions, 'cancelMembership');
		// await cancelMembership();
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
					<IonButton slot="start" onClick={() => history.goBack()}>
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
				<IonCard className="homeCards">
					<IonButton onClick={purchaseProduct}>Buy for {productPrice}</IonButton>
          <IonButton onClick={purchaseProduct}>Buy for {productPrice}</IonButton>
          <IonButton onClick={restore}>Restore</IonButton>
          <IonButton onClick={restore}>Promo code</IonButton>
      	</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default MembershipPage;

