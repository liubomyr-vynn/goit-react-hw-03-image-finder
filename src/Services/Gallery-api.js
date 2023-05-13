const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34845172-53e67b2f5b8cb8ccf3124ff1b';

const fetchImages = query => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(res => res.json());
};

const api = {
  fetchImages,
};

export default api;
