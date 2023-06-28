import axios from 'axios';

export const getTags = () => {
  return axios
    .get('http://localhost:5000/tags')
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};
