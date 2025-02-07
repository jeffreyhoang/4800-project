import React, { useEffect, useState } from 'react';
import { fetchMeetings, deleteMeeting } from '../services/api';

const MeetingList = () => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        loadMeetings();
    }, []);

    const loadMeetings = async () => {
        const data = await fetchMeetings();
        setMeetings(data);
    };

    const handleDelete = async (id) => {
        await deleteMeeting(id);
        loadMeetings();
    };

    return (
        <div>
            <h2>Team Meetings</h2>
            <ul>
                {meetings.map(meeting => (
                    <li key={meeting.id}>
                        <h3>{meeting.title}</h3>
                        <p><strong>Date:</strong> {meeting.date}</p>
                        <p><strong>Attendees:</strong> {meeting.attendees}</p>
                        <p><strong>Topics Discussed:</strong> {meeting.topics_discussed}</p>
                        <p><strong>Future Actions:</strong> {meeting.action_items}</p>
                        <button onClick={() => handleDelete(meeting.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MeetingList;
