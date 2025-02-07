import axios from 'axios';

const API_URL = 'https://testing-production-a806.up.railway.app/api/meetings/';

export const fetchMeetings = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createMeeting = async (meetingData) => {
    const response = await axios.post(API_URL, meetingData);
    return response.data;
};

export const updateMeeting = async (id, meetingData) => {
    const response = await axios.put(`${API_URL}${id}/`, meetingData);
    return response.data;
};

export const deleteMeeting = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
};
