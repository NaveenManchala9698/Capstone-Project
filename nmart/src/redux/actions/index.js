export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const addFavourite = (product) => ({
  type: ADD_FAVOURITE,
  payload: product,
});

export const removeFavourite = (product) => ({
  type: REMOVE_FAVOURITE,
  payload: product,
});
