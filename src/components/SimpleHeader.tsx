
// Simple react component
// Path: src/components/SimpleHeader.tsx

import React from 'react';
import styles from './SimpleHeader.module.scss';
import { IonButton, IonHeader, IonToolbar, IonIcon, IonTitle } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { useHistory } from "react-router-dom";

interface SimpleHeaderProps {
	title: string;
}

const SimpleHeader = ({ title }: SimpleHeaderProps) => {
	let history = useHistory();

	return (
		<IonHeader>
		<IonToolbar>
			<IonButton fill="clear" slot="start" onClick={() => history.goBack()}>
				<IonIcon icon={arrowBackOutline} size="large"></IonIcon>
			</IonButton>
			<IonTitle>{title ? title : null}</IonTitle>
		</IonToolbar>
	</IonHeader>
	);
};

export default SimpleHeader;
