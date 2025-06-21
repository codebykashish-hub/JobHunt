import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const saveJobPreferences = async (preferences) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/job/preferences`, preferences);
    return response.data;
  } catch (error) {
    console.error('Error saving job preferences:', error);
    throw error;
  }
};

