import axios from 'axios';

export const getCards = () => {
  return axios
    .get('http://localhost:5000/cards')
    .then((cards) => cards.data)
    .catch((error) => {
      throw new Error(error);
    });
};
