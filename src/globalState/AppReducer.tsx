const AppReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "GET_OFFERS":
      return {
        ...state,
      };
    case "SELECT_OFFER":
      return {
        Offers: state.Offers,
        Offer: state.Offers.filter((i: any) => i.id === action.payload),
      };
    default:
      return state;
  }
};

export default AppReducer;
