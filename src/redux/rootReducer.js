import { FETCH_CHARACTERS, REQUEST_CHARACTERS, PAGES_NUM } from './types';

const initialState = {
  characters: [],
  page: 1,
  loading: false,
  pagesNum: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state, 
        characters: [...state.characters, ...action.payload]
      };

    case REQUEST_CHARACTERS:
      return {
        ...state, 
        page: action.payload
      };

    case PAGES_NUM:
      return {
        ...state, 
        pagesNum: action.payload
      };
  
    default:
      return state;
  }
}