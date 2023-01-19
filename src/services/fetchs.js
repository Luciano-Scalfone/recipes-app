import { fetchURLSetter, searchParamSetter } from "../helpers/fetchURLSetter";

export const fetchAllCategories = async (filterClass, filterBy) => {
  let filterParams = "";
  let queryParams = "";
  let searchTerm = searchParamSetter(filterClass, filterBy);

  switch (filterClass) {
    case "name":
      filterParams = "search";
      queryParams = "s";
      break;
    case "first-letter":
      filterParams = "search";
      queryParams = "f";
      break;
    case "ingredients":
      filterParams = "filter";
      queryParams = "i";
      break;
    case "category":
      filterParams = "filter";
      queryParams = "c";
      break;
    case "area":
      filterParams = "filter";
      queryParams = "a";
      break;
  }

  const fetchAPI = await fetch(
    `https://www.themealdb.com/api/json/v1/1/${filterParams}.php?${queryParams}=${searchTerm}`
  )
    .then((response) => response.json())
    .then((response) => response.meals);

  return fetchAPI;
};
