export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POST":
      return action.payload; // recall action.payload is the api response
    default:
      return state;
  }
};
