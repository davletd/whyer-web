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
import axios from "axios";
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
  const [confirmAge, setConfirmAge] = useState(false);
  const [seenParentalControlsPage, setSeenParentalControlsPage] = useState(false);
  const [seenAuthenticationPage, setSeenAuthenticationPage] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [yourAge, setYourAge] = useState(0);
  const [religionTopic, setReligionTopic] = useState(false);
  const [discriminationTopic, setDiscriminationTopic] = useState(false);
  const [otherTopic, setOtherTopic] = useState(false);
  const [shouldSeeUserPage, setShouldSeeUserPage] = useState(false);
  const [shouldSeeMembershipPage, setShouldSeeMembershipPage] = useState(false);
  const [otherTopicText, setOtherTopicText] = useState("");
  const [user, setUser] = useState({});
 
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/welcome" exact={true}>
            <WelcomePage />
          </Route>
          <Route path="/welcome/age" exact={true}>
            <HowOldAreYouPage yourAge={yourAge} setYourAge={setYourAge} />
          </Route>
          <Route path="/welcome/controls" exact={true}>
            <ParentalControlsPage />
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
          <Route path="/account" exact={true}>
            <UserPage setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
          </Route>
          </Route>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
    // <div className={styles.App}>
    //   <div className={styles.Content}>
    //     {
    //       shouldSeeMembershipPage ?
    //       <MembershipPage
    //         setShouldSeeMembershipPage={setShouldSeeMembershipPage}
            
    //       /> 
    //       : shouldSeeUserPage ? 
    //       <UserPage 
    //         setIsAuthenticated={setIsAuthenticated} 
    //         setSeenAuthenticationPage={setSeenAuthenticationPage} 
    //         setUser={setUser}
    //         setShouldSeeUserPage={setShouldSeeUserPage}
    //         setShouldSeeMembershipPage={setShouldSeeMembershipPage}
    //       /> 
    //       : !seenWelcomePage ? <WelcomePage setSeenWelcomePage={setSeenWelcomePage} /> 
    //       : !confirmAge ? <HowOldAreYouPage yourAge={yourAge} setYourAge={setYourAge} setConfirmAge={setConfirmAge} /> 
    //       : !seenParentalControlsPage? 
    //         <ParentalControlsPage 
    //           setSeenParentalControlsPage={setSeenParentalControlsPage} 
    //           religionTopic={religionTopic}
    //           discriminationTopic={discriminationTopic}
    //           otherTopic={otherTopic}
    //           setReligionTopic={setReligionTopic}
    //           setDiscriminationTopic={setDiscriminationTopic}
    //           setOtherTopic={setOtherTopic} /> 
    //       : !seenAuthenticationPage ?
    //         <AuthenticationPage 
    //           setSeenAuthenticationPage={setSeenAuthenticationPage} 
    //           setIsAuthenticated={setIsAuthenticated}
    //           setUser={setUser}
    //           user={user}
    //         />
    //       : <QuestionsPage 
    //           yourAge={yourAge} 
    //           religionTopic={religionTopic} 
    //           discriminationTopic={discriminationTopic}
    //           otherTopic={otherTopic} 
    //           isAuthenticated={isAuthenticated} 
    //           user={user}
    //           setShouldSeeUserPage={setShouldSeeUserPage}
    //           /> 
    //       }
    //   </div>
    // </div>);
    );
  }

export default App;
