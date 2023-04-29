//Profile picture component with a default image and text with name.

import React from 'react';
import styles from './ProfilePicture.module.scss';
import { IonItem } from '@ionic/react';

interface ProfilePictureProps {
	name: string;
}

const ProfilePicture = ({ name }: ProfilePictureProps) => {
	return (
		<IonItem routerLink={'/account'}>
			<div className={styles.ProfilePictureContainer}>
				<img className={styles.ProfilePicture} src="profile-placeholder.png" alt="Profile" />
				{name}
			</div>
		</IonItem>
	);
};

export default ProfilePicture;