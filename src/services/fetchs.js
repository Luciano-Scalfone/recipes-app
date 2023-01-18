export const fetchAllCategories = async () => {
    const fetchAPI = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .then((response) => response.meals);

  return fetchAPI
};
