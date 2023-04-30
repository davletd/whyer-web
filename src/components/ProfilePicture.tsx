//Profile picture component with a default image and text with name.

import React from 'react';
import styles from './ProfilePicture.module.scss';
import { IonItem } from '@ionic/react';
import { useHistory } from "react-router-dom";

interface ProfilePictureProps {
	name: string;
}

const ProfilePicture = ({ name }: ProfilePictureProps) => {
	let history = useHistory();

	return (
		<IonItem onClick={() => history.push('/account')}>
			<div className={styles.ProfilePictureContainer}>
				<img className={styles.ProfilePicture} src="profile-placeholder.png" alt="Profile" />
				{name}
			</div>
		</IonItem>
	);
};

export default ProfilePicture;