import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, CategoryReducer } from "./CategoryReducer";
import { getCategoriesAPI } from "../../api/categories";
import {
  getCategoriesAction,
  getOneCategoryAction,
} from "../../context/Category/CategoryActions";

const CategoryContext = createContext();

export function useCategoryContext() {
  return useContext(CategoryContext);
}

export function CategoryProvider({ children }) {
  const [state, dispatch] = useReducer(CategoryReducer, initialState);
  const { categories, category } = state;

  useEffect(() => {
    getCategoriesAPI()
      .then((response) => response.json())
      .then((data) => dispatch(getCategoriesAction(data)));
  }, []);

  const setOneCategory = (category) => dispatch(getOneCategoryAction(category));

  const value = {
    categories,
    category,
    dispatch,
    setOneCategory,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
