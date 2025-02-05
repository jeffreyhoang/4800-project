import React, { useState } from 'react';
import { createMeeting } from '../services/api';
import './MeetingForm.css'; // Import CSS file

const MeetingForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        attendees: '',
        topics_discussed: '',
        action_items: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createMeeting(formData);
        onAdd();
    };

    return (
        <form className="meeting-form" onSubmit={handleSubmit}>
            <h2>Log a New Meeting</h2>
            <input type="text" name="title" placeholder="Meeting Title" onChange={handleChange} required />
            <input type="date" name="date" onChange={handleChange} required />
            <textarea name="attendees" placeholder="Attendees (comma-separated)" onChange={handleChange} required />
            <textarea name="topics_discussed" placeholder="Information Discussed" onChange={handleChange} required />
            <textarea name="action_items" placeholder="Action Steps" onChange={handleChange} required />
            <button type="submit">Add Meeting</button>
        </form>
    );
};

export default MeetingForm;
