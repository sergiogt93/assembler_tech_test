import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, GifReducer } from "./GifReducer";
import { useAuthContext } from "../Auth/AuthContext";
import { createGifAPI, getGifsAPI, getGifsByCategoryAPI } from "../../api/gifs";
import {
  addGifAction,
  getGifAction,
  getSearchGifsByCategoryAction,
} from "./GifActions";

const GifContext = createContext();

export function useGifContext() {
  return useContext(GifContext);
}

export function GifProvider({ children }) {
  const [state, dispatch] = useReducer(GifReducer, initialState);
  const { gifs } = state;
  const { currentUser } = useAuthContext();

  useEffect(() => {
    getGifsAPI()
      .then((response) => response.json())
      .then((data) => dispatch(getGifAction(data)));
  }, []);

  const addGif = async (gif) => {
    const res = await createGifAPI(currentUser.accessToken, gif);
    const json = await res.json();
    dispatch(addGifAction(json));
  };

  const searchGifsByCategory = async (category) => {
    const res = await getGifsByCategoryAPI(category);
    const json = await res.json();
    dispatch(getSearchGifsByCategoryAction(json));
  };

  const value = {
    gifs,
    addGif,
    searchGifsByCategory,
  };

  return <GifContext.Provider value={value}>{children}</GifContext.Provider>;
}
