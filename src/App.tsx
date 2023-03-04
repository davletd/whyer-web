import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { setupIonicReact } from '@ionic/react';


import React, { useState } from 'react';
import axios from "axios";

import './App.scss';
import WelcomePage from './pages/WelcomePage';
import HowOldAreYouPage from './pages/HowOldAreYouPage';
import QuestionsPage from './pages/QuestionsPage';

setupIonicReact();

const App = () => {
  const [seenWelcomePage, setSeenWelcomePage] = useState(false);
  const [confirmAge, setConfirmAge] = useState(false);
  const [yourAge, setYourAge] = useState(0);
 
  if (!seenWelcomePage) {
    return <WelcomePage setSeenWelcomePage={setSeenWelcomePage} />
  }

  if (!confirmAge) {
    return <HowOldAreYouPage yourAge={yourAge} setYourAge={setYourAge} setConfirmAge={setConfirmAge} />
  }


  return <QuestionsPage />;
}

export default App;
