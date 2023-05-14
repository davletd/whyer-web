//Profile picture component with a default image and text with name.

import React from 'react';
import styles from './LoginButton.module.scss';
import { IonButton } from '@ionic/react';
import { useHistory } from "react-router-dom";

interface LoginButtonProps {

}

const LoginButton = ({ }: LoginButtonProps) => {
	let history = useHistory();

	return (
		<div className={styles.LoginButtonContainer}>
			<IonButton 
				color={"secondary"} 
				className={styles.LoginButtonContainer}
				onClick={() => history.push('/login')}>
					Login
			</IonButton>
		</div>
	);
};

export default LoginButton;