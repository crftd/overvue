import axios from 'axios';

const BASE_URL = 'https://archillect-api.now.sh/visuals';

export default {
  getImage: async (imageId) => {
    const response = await axios.get(`${BASE_URL}/${imageId}`);
    return response.imageSource ? { url: response.imageSource } : { latestImageId: parseInt(response.error.match(/(?:\D*(\d+)){3}/)[1], 10) };
  },
};
