import { GET_CATEGORY, GET_ONE_CATEGORY } from "./CategoryTypes";

export const initialState = {
  categories: [],
  category: {},
};

//REDUCER
export const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return { ...state, categories: action.categories };
    case GET_ONE_CATEGORY:
      return { ...state, category: action.category };
    default:
      return state;
  }
};
