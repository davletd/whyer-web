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

import React, { useState } from 'react';
import { setupIonicReact, IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter, } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import HowOldAreYouPage from './pages/HowOldAreYouPage';
import ParentalControlsPage from './pages/ParentalControlsPage';
import QuestionsPage from './pages/QuestionsPage';
import styles from './App.module.scss';
import AuthenticationPage from './pages/AuthenticationPage';
import UserPage from './pages/UserPage';
import MembershipPage from './pages/MembershipPage';

setupIonicReact();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [yourAge, setYourAge] = useState(0);
  const [religionTopic, setReligionTopic] = useState(false);
  const [discriminationTopic, setDiscriminationTopic] = useState(false);
  const [otherTopic, setOtherTopic] = useState(false);
  const [otherTopicText, setOtherTopicText] = useState("");
  const [user, setUser] = useState({});
  
 
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <div className={styles.App}>
          <div className={styles.Content}>
          <Route path="/welcome" exact={true}>
            <WelcomePage />
          </Route>
          <Route path="/welcome/age" exact={true}>
            <HowOldAreYouPage yourAge={yourAge} setYourAge={setYourAge} />
          </Route>
          <Route path="/welcome/controls" exact={true}>
            <ParentalControlsPage 
              religionTopic={religionTopic}
              discriminationTopic={discriminationTopic}
              otherTopic={otherTopic}
              setReligionTopic={setReligionTopic}
              setDiscriminationTopic={setDiscriminationTopic}
              setOtherTopic={setOtherTopic} />
          </Route>
          <Route path="/questions" exact={true}>
            <QuestionsPage 
              yourAge={yourAge} 
              religionTopic={religionTopic} 
              discriminationTopic={discriminationTopic}
              otherTopic={otherTopic} 
              isAuthenticated={isAuthenticated} 
              user={user}
            /> 
          </Route>
          <Route path="/login" exact={true}>
            <AuthenticationPage 
              setIsAuthenticated={setIsAuthenticated}
              setUser={setUser}
              user={user}
            />
          </Route>
          <Route path="/account" exact={true}>
            <UserPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <Route path="/account/membership" exact={true}>
            <MembershipPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          </div>
          </div>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
    );
  }

export default App;
