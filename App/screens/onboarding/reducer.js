const initialState = {
  info: {},
  url: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        info: action.data,
      };
    case 'UPDATE_APPURL':
      return {
        ...state,
        url: action.data,
      };
    default:
      return state;
  }
}
