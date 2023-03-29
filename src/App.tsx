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


import WelcomePage from './pages/WelcomePage';
import HowOldAreYouPage from './pages/HowOldAreYouPage';
import ParentalControlsPage from './pages/ParentalControlsPage';
import QuestionsPage from './pages/QuestionsPage';
import styles from './App.module.scss';
import AuthenticationPage from './pages/AuthenticationPage';

setupIonicReact();

const App = () => {
  const [seenWelcomePage, setSeenWelcomePage] = useState(false);
  const [confirmAge, setConfirmAge] = useState(false);
  const [seenParentalControlsPage, setSeenParentalControlsPage] = useState(false);
  const [seenAuthenticationPage, setSeenAuthenticationPage] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [yourAge, setYourAge] = useState(0);
  const [religionTopic, setReligionTopic] = useState(false);
  const [discriminationTopic, setDiscriminationTopic] = useState(false);
  const [otherTopic, setOtherTopic] = useState(false);
  const [otherTopicText, setOtherTopicText] = useState("");
  const [user, setUser] = useState({});
 
  return (
    <div className={styles.App}>
      <div className={styles.Content}>
        {!seenWelcomePage ? <WelcomePage setSeenWelcomePage={setSeenWelcomePage} /> 
        : !confirmAge ? <HowOldAreYouPage yourAge={yourAge} setYourAge={setYourAge} setConfirmAge={setConfirmAge} /> 
        : !seenParentalControlsPage? 
          <ParentalControlsPage 
            setSeenParentalControlsPage={setSeenParentalControlsPage} 
            religionTopic={religionTopic}
            discriminationTopic={discriminationTopic}
            otherTopic={otherTopic}
            setReligionTopic={setReligionTopic}
            setDiscriminationTopic={setDiscriminationTopic}
            setOtherTopic={setOtherTopic} /> 
        : !seenAuthenticationPage ?
          <AuthenticationPage 
            setSeenAuthenticationPage={setSeenAuthenticationPage} 
            setIsAuthenticated={setIsAuthenticated}
            setUser={setUser}
          />
        : <QuestionsPage 
            yourAge={yourAge} 
            religionTopic={religionTopic} 
            discriminationTopic={discriminationTopic}
            otherTopic={otherTopic} 
            isAuthenticated={isAuthenticated} 
            user={user}
            /> 
          }
      </div>
    </div>);
  }

export default App;
