import { fetchURLSetter, searchParamSetter } from "../helpers/fetchURLSetter";

export const fetchAllCategories = async (filterClass, filterBy) => {
  const { filterParams, queryParams } = fetchURLSetter(filterClass);
  let searchTerm = searchParamSetter(filterClass, filterBy);

  const fetchAPI = await fetch(
    `https://www.themealdb.com/api/json/v1/1/${filterParams}.php?${queryParams}=${searchTerm}`
  )
    .then((response) => response.json())
    .then((response) => response.meals);

  return fetchAPI;
};
