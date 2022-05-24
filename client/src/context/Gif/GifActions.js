import { ADD_GIF, GET_GIF } from "./GiftTypes";

export const addGifAction = (gif) => {
  return {
    type: ADD_GIF,
    gif,
  };
};

export const getGifAction = (gifs) => {
  return {
    type: GET_GIF,
    gifs,
  };
};

export const getSearchGifsByCategoryAction = (gifs) => {
  return {
    type: GET_GIF,
    gifs,
  };
};
