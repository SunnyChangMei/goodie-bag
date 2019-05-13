import axios from 'axios';

export const ALL_CANDIES = 'ALL_CANDIES';

export const allCandies = candies => ({
  type: ALL_CANDIES,
  candies
});

export const getAllCandies = () => async dispatch => {
  const { data } = await axios.get('/api/candies');
  dispatch(allCandies(data));
};

const initialState = {
  allCandies: [],
  singleCandy: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CANDIES:
      return { ...state, allCandies: action.candies };
    default:
      return state;
  }
};

export default rootReducer;
