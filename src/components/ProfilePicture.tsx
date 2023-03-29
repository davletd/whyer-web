//Profile picture component with a default image and text with name.

import React from 'react';
import styles from './ProfilePicture.module.scss';

interface ProfilePictureProps {
	name: string;
}

const ProfilePicture = ({ name }: ProfilePictureProps) => {
	return (
		<div className={styles.ProfilePictureContainer}>
			<img className={styles.ProfilePicture} src="profile-placeholder.png" alt="Profile" />
			{name}
		</div>
	);
};

export default ProfilePicture;