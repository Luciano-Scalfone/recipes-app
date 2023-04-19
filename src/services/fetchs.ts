import { fetchURLSetter, searchParamSetter } from "../helpers/fetchURLSetter";
import {
  handleIngredientsAndMeasures,
  handleIntruction,
  handleLink,
} from "../helpers/fetchByIDHeHelper";
import { MealsType } from "../interfaces/filterInitialState";

export const fetchAllCategories = async <T>(filterClass: string, filterBy: string): Promise<T> => {
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

const fetchById = async <T>(id: string): Promise<T> => {
  return await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  )
    .then((response) => response.json())
    .then((data) => data.meals);
};

export const fetchByIDHelper = async (id: string): Promise<MealsType> => {
  // TODO: change any type
  const data = await fetchById<any>(id);

  return {
    id,
    image: data[0].strMealThumb,
    name: data[0].strMeal,
    instructions: handleIntruction(data[0].strInstructions),
    area: data[0].strArea,
    category: data[0].strCategory,
    ingredients: handleIngredientsAndMeasures(...data),
    videoLink: handleLink(data[0].strYoutube),
  };
};

export const fetchPostData = async <T extends {access_token: string}, D>(url: string, data: D): Promise<T> => {
  return await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const getUserInformation = async <T>(token: string, endPoint: string): Promise<T> => {
  const response = await fetch(`http://localhost:8080/auth/user-${endPoint}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authentication: `Bearer ${token}`,
    },
  });
  const data = response.json();

  return data;
};
