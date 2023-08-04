// api.js
const API_BASE_URL = 'https://restcountries.com/v3.1/';

const searchCountryByName = (name, callback) => {
  let timer;
  const debouncedFetch = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      try {
        const response = await fetch(`${API_BASE_URL}name/${name}`);
        const data = await response.json();
        callback(data);
      } catch (error) {
        console.error('Error fetching country data:', error);
        callback([]);
      }
    }, 300); // 300ms debounce delay
  };

  debouncedFetch();
};

export { searchCountryByName };
