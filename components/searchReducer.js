const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";

export const ActionCreators = {
  setSearchValue: payload => ({
    type: SET_SEARCH_VALUE,
    payload
  })
};

const setSearchValue = (state, value) => ({
  ...state,
  value,
  disabled: value.trim().length < state.minRequiredChars
});

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case SET_SEARCH_VALUE:
      return setSearchValue(state, payload);
    default:
      return state;
  }
};
