import React from 'react';
import MeetingList from './components/MeetingList';
import MeetingForm from './components/MeetingForm';

function App() {
    return (
        <div>
              <h1>Group 10</h1>

              <h2>Group Members</h2>
              <ul>
                  <li>Jeffrey Hoang</li>
                  <li>Evan Cheng</li>
                  <li>Joan Fernandez</li>
                  <li>Alexander Lee</li>
              </ul>

              <h2>CS 4800 Topic Proposal</h2>
              <p>
                  This team will be working on a movie streaming service web and mobile application. 
                  This streaming service will utilize recommender systems by observing the user's viewing behavior 
                  in order to recommend other shows to watch. Some of the other features of this streaming application 
                  would be an offline mode, user customization, and more.
              </p>
              <p>
                  The application will have the frontend handled by React.js and the backend handled by Django. 
                  The connection between React.js and Django will be handled by Axios, which will be used to send 
                  requests to the backend. The server that holds user information will be stored on PostgreSQL, while 
                  video storage will be handled by Google Cloud. For the mobile application, Android Studio will be used.
                </p>

            <MeetingForm onAdd={() => window.location.reload()} />
            <MeetingList />
        </div>
    );
}

export default App;
