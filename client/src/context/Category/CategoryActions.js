import { GET_CATEGORY, GET_ONE_CATEGORY } from "./CategoryTypes";

export const getCategoriesAction = (categories) => {
  return {
    type: GET_CATEGORY,
    categories: categories,
  };
};

export const getOneCategoryAction = (category) => {
  return {
    type: GET_ONE_CATEGORY,
    category,
  };
};
