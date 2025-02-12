import React, { useState } from 'react';
import MeetingList from './components/MeetingList';
import MeetingForm from './components/MeetingForm';
import "./App.css";

function App() {
    const [activeTab, setActiveTab] = useState("topicProposal");
    const members = [
        {
            name: "Jeffrey Hoang",
            role: "CEO",
            experience: ["Java", "Python", "HTML/CSS/JavaScript", "Django", "React.js", "PostgreSQL"]
        },
        {
            name: "Alexander Lee",
            role: "Frontend Developer",
            experience: ["Java", "Python", "React.js / React Native", "CSS", "JavaScript", "Node.js", "SQL"]
        },
        {
            name: "Elizabeth Dominguez",
            role: "Frontend Developer",
            experience: ["Java", "HTML", "Python", "SQL", "C/C#"]
        },
        {
            name: "Joan Fernandez",
            role: "Backend Developer",
            experience: ["Python", "Java", "C#", "HTML", "JavaScript", "React.js / React Native", "CSS"]
        }, 
        {
            name: "Evan Cheng",
            role: "Backend Developer",
            experience: ["Python", "Java", "C/C++", "HTML", "CSS"]
        }
    ];

    return (
        <div>
            <h1>Flix4U</h1>

            {/* Navigation Tabs */}
            <nav className="nav-container">
                <div className="nav-item" onClick={() => setActiveTab("topicProposal")}>
                    <h2>📜 Topic Proposal</h2>
                </div>
                <div className="nav-item" onClick={() => setActiveTab("members")}>
                    <h2>👥 Members</h2>
                </div>
                <div className="nav-item" onClick={() => setActiveTab("meetings")}>
                    <h2>📅 Meetings</h2>
                </div>
            </nav>

            <hr />

            {/* Content based on selected tab */}
            {activeTab === "topicProposal" && (
                <div>
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
                </div>
            )}

            {activeTab === "members" && (

                <div className="members-container">
                    <div className="members-list">
                        {members.map((member, index) => (
                            <div key={index} className="member-card">
                                <h3>{member.name}, {member.role}</h3>
                                <p>Experience working with:</p>
                                <ul>
                                    {member.experience.map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === "meetings" && (
                <div>
                    <MeetingForm onAdd={() => window.location.reload()} />
                    <MeetingList />
                </div>
            )}
        </div>
    );
}

export default App;