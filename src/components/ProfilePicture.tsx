//Profile picture component with a default image and text with name.

import React from 'react';
import styles from './ProfilePicture.module.scss';
import { useHistory } from "react-router-dom";

interface ProfilePictureProps {
	name: string;
}

const ProfilePicture = ({ name }: ProfilePictureProps) => {
	let history = useHistory();

	return (
		<div className={styles.ProfilePictureContainer} onClick={() => history.push('/account')}>
			<img className={styles.ProfilePicture} src="profile-placeholder.png" alt="Profile" />
			{name}
		</div>
	);
};

export default ProfilePicture;