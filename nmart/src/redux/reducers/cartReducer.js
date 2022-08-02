const initialState = {
  cart: {
    content: [],
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.concat(action.payload),
        },
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          content: [
            ...state.cart.content.slice(0, action.payload),
            ...state.cart.content.slice(action.payload + 1),
          ],
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
