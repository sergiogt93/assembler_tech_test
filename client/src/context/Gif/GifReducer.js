import { ADD_GIF, GET_GIF } from "./GiftTypes";

export const initialState = {
  gifs: [],
  gifSelected: "",
};

export const GifReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GIF:
      return { ...state, gifs: state.gifs.push(action.gift) };
    case GET_GIF:
      return { ...state, gifs: action.gifs };
    default:
      return state;
  }
};
