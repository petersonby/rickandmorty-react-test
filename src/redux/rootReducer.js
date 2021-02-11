import { FETCH_CHARACTERS, FETCH_SINGLE_CHARACTER, PAGES_NUM, INCREMENT_NUM } from './types';

const initialState = {
  characters: [],
  singleCharacter: [],
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

    case FETCH_SINGLE_CHARACTER:
      return {
        ...state, 
        singleCharacter: [action.payload]
      };

    case PAGES_NUM:
      return {
        ...state, 
        pagesNum: action.payload
      };

    case INCREMENT_NUM:
      return {
        ...state, 
        page: state.page + 1
      };
  
    default:
      return state;
  }
}