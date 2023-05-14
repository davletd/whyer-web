
// Simple react component
// Path: src/components/SimpleHeader.tsx

import React from 'react';
import styles from './SimpleHeader.module.scss';
import { IonButton, IonHeader, IonToolbar, IonIcon, IonTitle } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { useHistory } from "react-router-dom";
import LoginButton from './LoginButton';

interface SimpleHeaderProps {
	title?: string;
	hideBackButton?: boolean;
}

const SimpleHeader = ({ title, hideBackButton }: SimpleHeaderProps) => {
	let history = useHistory();

	return (
		<IonHeader>
		<IonToolbar>
			{hideBackButton ? null : 
				<IonButton fill="clear" slot="start" onClick={() => history.goBack()}>
					<IonIcon color="secondary" icon={arrowBackOutline} size="large"></IonIcon>
				</IonButton>}
			<IonTitle>{title ? title : <LoginButton />}</IonTitle>
		</IonToolbar>
	</IonHeader>
	);
};

export default SimpleHeader;
