//Profile picture component with a default image and text with name.

import React from 'react';
import styles from './ProfilePicture.module.scss';

interface ProfilePictureProps {
	name: string;
	setShouldSeeUserPage: (shouldSeeUserPage: boolean) => void;
}

const ProfilePicture = ({ name, setShouldSeeUserPage }: ProfilePictureProps) => {
	return (
		<div className={styles.ProfilePictureContainer} onClick={() => setShouldSeeUserPage(true)}>
			<img className={styles.ProfilePicture} src="profile-placeholder.png" alt="Profile" />
			{name}
		</div>
	);
};

export default ProfilePicture;