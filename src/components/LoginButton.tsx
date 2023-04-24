//Profile picture component with a default image and text with name.

import React from 'react';
import styles from './LoginButton.module.scss';

interface LoginButtonProps {

}

const LoginButton = ({ }: LoginButtonProps) => {
	return (
		<div className={styles.LoginButtonContainer} onClick={setTimeout=> (100)}>
			Login
		</div>
	);
};

export default LoginButton;