export type FILTER_INITIAL_STATE = {
  filterClass: string;
  filterBy: string;
};

export type MealsType = {
  id: string;
  image: string;
  name: string;
  instructions: string[];
  area: string;
  category: string;
  ingredients: string[];
  videoLink: string;
};