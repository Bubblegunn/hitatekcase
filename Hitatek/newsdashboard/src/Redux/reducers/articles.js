// reducers/articles.js

import { SET_ARTICLES } from '../actions';
import { SET_CURRENT_PAGE } from '../actions';


const initialState = {
  articles: [],
  currentPage: 1,
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
      case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default articlesReducer;