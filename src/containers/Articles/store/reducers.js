import * as constants from "./constants";

const initialState = {
  articles: [],
  loading: false,
  error: false,
  activeArticle: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.EDIT_ARTICLE_CLEAR:
      return {
        ...state,
        activeArticle: null,
      };
    case constants.EDIT_ARTICLE_FAILURE:
    case constants.FETCH_ARTICLE_FAILURE:
    case constants.REMOVE_ARTICLE_FAILURE:
    case constants.ADD_ARTICLE_FAILURE:
    case constants.FETCH_ARTICLES_FAILURE:
    case constants.DUPLICATE_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case constants.EDIT_ARTICLE_REQUEST:
    case constants.FETCH_ARTICLE_REQUEST:
    case constants.REMOVE_ARTICLE_REQUEST:
    case constants.ADD_ARTICLE_REQUEST:
    case constants.FETCH_ARTICLES_REQUEST:
    case constants.DUPLICATE_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case constants.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
        error: null,
      };
    case constants.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        activeArticle: action.payload,
        error: null,
      };
    case constants.EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: [...state.articles.map(article => (article.id === action.payload.id ? action.payload : article))],
        error: null,
      };
    case constants.REMOVE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: [...state.articles.filter(article => String(article.id) !== String(action.payload))],
        error: null,
      };
    case constants.ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: [...state.articles, action.payload],
        error: null,
      };
    case constants.DUPLICATE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: [action.payload, ...state.articles],
        error: null,
      };
    default:
      return { ...state };
  }
};
