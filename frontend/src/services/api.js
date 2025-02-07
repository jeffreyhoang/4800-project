import axios from 'axios';

const API_BASE_URL = "https://testing-production-a806.up.railway.app/api/meetings/";

// Ensure absolute URL by using `new URL()`
const getApiUrl = (endpoint = "") => {
    const fullUrl = new URL(endpoint, API_BASE_URL).toString();
    console.log("API Request URL:", fullUrl);  // ✅ Log the API URL
    return fullUrl;
};

export const fetchMeetings = async () => {
    try {
        const url = getApiUrl(); // Generates absolute URL
        console.log("API Request URL Before Axios:", url);

        const response = await axios({
            method: "get",
            url: url,
            baseURL: null, // Ensure Axios does not modify the URL
        });

        console.log("API Response:", response);
        return response.data;
    } catch (error) {
        console.error("Error fetching meetings:", error);
        return [];
    }
};


export const createMeeting = async (meetingData) => {
    try {
        const response = await axios.post(getApiUrl(), meetingData);
        return response.data;
    } catch (error) {
        console.error("Error creating meeting:", error);
        throw error;
    }
};

export const updateMeeting = async (id, meetingData) => {
    try {
        const response = await axios.put(getApiUrl(`${id}/`), meetingData);
        return response.data;
    } catch (error) {
        console.error("Error updating meeting:", error);
        throw error;
    }
};

export const deleteMeeting = async (id) => {
    try {
        await axios.delete(getApiUrl(`${id}/`));
    } catch (error) {
        console.error("Error deleting meeting:", error);
        throw error;
    }
};
