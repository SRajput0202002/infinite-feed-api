import axios from 'axios';

const API_URL = 'http://localhost:5000/api/feed';

export const fetchFeed = async (limit, offset) => {
  const response = await axios.get(API_URL, {
    params: { limit, offset },
  });
  return response.data; // Fix the typo here
};
