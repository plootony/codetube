import axios from 'axios';

export const getCategories = () => {
  return axios
    .get('http://localhost:5000/categories')
    .then((categories) => categories.data)
    .catch((error) => {
      throw new Error(error);
    });
};
