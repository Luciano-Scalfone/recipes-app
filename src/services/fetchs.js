import { fetchURLSetter, searchParamSetter } from "../helpers/fetchURLSetter";

export const fetchAllCategories = async (filterClass, filterBy) => {
  const { filterParams, queryParams } = fetchURLSetter(filterClass);
  let searchTerm = searchParamSetter(filterClass, filterBy);

  const fetchAPI = await fetch(
    `https://www.themealdb.com/api/json/v1/1/${filterParams}.php?${queryParams}=${searchTerm}`
  )
    .then((response) => response.json())
    .then((response) => response.meals)
    .catch((error) => console.log("Erro na Api", error));

  return fetchAPI;
};

export const fetchById = async (id) => {
  return await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
    .then((response) => response.json())
    .then((data) => data.meals);
};
