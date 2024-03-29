import { ReactNode } from "react";

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

export type CardType = {
  name: string;
  imageSrc: string;
  id: string;
  onCardClick: (id: string) => void;
};

export type InputTargetType = {
  target: HTMLInputElement;
};

export type UserType = {
  email: string;
  password: string;
};

export type InputProps = {
  type: string;
  placeholder: string;
  name: string;
  handleChange: (arg: InputTargetType) => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  testId: string;
};

export type RecipeType<MealsType> = {
  recipe: {
    name: string;
    area: string;
    category: string;
  };
};

export type MealType<T> = {
  meal: T;
};
