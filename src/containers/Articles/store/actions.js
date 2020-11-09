import * as constants from "./constants";

export const A_fetchArticlesRequest = () => ({ type: constants.FETCH_ARTICLES_REQUEST });
export const A_fetchArticlesSuccess = articles => ({ type: constants.FETCH_ARTICLES_SUCCESS, payload: articles });
export const A_fetchArticlesFailure = err => ({ type: constants.FETCH_ARTICLES_FAILURE, payload: err });
export const A_fetchArticlesClear = () => ({ type: constants.FETCH_ARTICLES_CLEAR });

export const A_fetchArticleRequest = id => ({ type: constants.FETCH_ARTICLE_REQUEST, payload: id });
export const A_fetchArticleSuccess = article => ({ type: constants.FETCH_ARTICLE_SUCCESS, payload: article });
export const A_fetchArticleFailure = err => ({ type: constants.FETCH_ARTICLE_FAILURE, payload: err });
export const A_fetchArticleClear = () => ({ type: constants.FETCH_ARTICLE_CLEAR });

export const A_editArticleRequest = article => ({ type: constants.EDIT_ARTICLE_REQUEST, payload: article });
export const A_editArticleSuccess = article => ({ type: constants.EDIT_ARTICLE_SUCCESS, payload: article });
export const A_editArticleFailure = err => ({ type: constants.EDIT_ARTICLE_FAILURE, payload: err });
export const A_editArticleClear = () => ({ type: constants.EDIT_ARTICLE_CLEAR });

export const A_removeArticleRequest = id => ({ type: constants.REMOVE_ARTICLE_REQUEST, payload: id });
export const A_removeArticleSuccess = id => ({ type: constants.REMOVE_ARTICLE_SUCCESS, payload: id });
export const A_removeArticleFailure = err => ({ type: constants.REMOVE_ARTICLE_FAILURE, payload: err });
export const A_removeArticleClear = () => ({ type: constants.REMOVE_ARTICLE_CLEAR });

export const A_addArticleRequest = article => ({ type: constants.ADD_ARTICLE_REQUEST, payload: article });
export const A_addArticleSuccess = article => ({ type: constants.ADD_ARTICLE_SUCCESS, payload: article });
export const A_addArticleFailure = err => ({ type: constants.ADD_ARTICLE_FAILURE, payload: err });
export const A_addArticleClear = () => ({ type: constants.ADD_ARTICLE_CLEAR });

export const A_duplicateArticleRequest = id => ({ type: constants.DUPLICATE_ARTICLE_REQUEST, payload: id });
export const A_duplicateArticleSuccess = article => ({ type: constants.DUPLICATE_ARTICLE_SUCCESS, payload: article });
export const A_duplicateArticleFailure = err => ({ type: constants.DUPLICATE_ARTICLE_FAILURE, payload: err });
export const A_duplicateArticleClear = () => ({ type: constants.DUPLICATE_ARTICLE_CLEAR });
