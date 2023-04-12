//getAuth

import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonPage, IonText } from '@ionic/react';
import { Capacitor } from '@capacitor/core';
import styles from './AuthenticationPage.module.scss';
import { 
	getAuth, 
	initializeAuth,
	indexedDBLocalPersistence
} from "firebase/auth";
import app from '../firebase';

const whichAuth = () => {
  let auth;
  if (Capacitor.isNativePlatform()) {
    auth = initializeAuth(app, {
      persistence: indexedDBLocalPersistence,
    });
  } else {
    auth = getAuth(app);
  }
  return auth;
};

export default whichAuth;