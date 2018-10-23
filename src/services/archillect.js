import axios from 'axios';

const BASE_URL = 'https://archillect-api.now.sh/visuals';

export default {
  getImage: async (imageId) => {
    const { data } = await axios.get(`${BASE_URL}/${imageId}`);
    return data.imageSource ? { url: data.imageSource } : { latestImageId: parseInt(data.error.match(/(?:\D*(\d+)){3}/)[1], 10) };
  },
};
