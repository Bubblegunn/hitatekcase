// actions/index.js

export const SET_ARTICLES = 'SET_ARTICLES';

export const setArticles = (articles) => ({
  type: SET_ARTICLES,
  payload: articles,
});

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});