import { call, put, takeLatest, select } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { v4 as uuidv4 } from "uuid";
import { Api } from "../../../entries/ApiTransport";

const api = Api.getInstance();

function* fetchAllArticles({ _, callback }) {
  try {
    const { data } = yield call(() => api.get("/articles"));
    yield put(actions.A_fetchArticlesSuccess(data));
  } catch (err) {
    yield put(actions.A_fetchArticlesFailure(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}

function* fetchArticle({ payload, callback }) {
  try {
    const article = yield select(selectors.getArticle(payload));
    yield put(actions.A_fetchArticleSuccess(article));
  } catch (err) {
    yield put(actions.A_fetchArticleFailure(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}

function* editArticle({ payload, callback }) {
  try {
    yield put(actions.A_editArticleSuccess(payload));
    yield put(actions.A_editArticleClear());
  } catch (err) {
    yield put(actions.A_editArticleFailure(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}

function* removeArticle({ payload, callback }) {
  try {
    yield put(actions.A_removeArticleSuccess(payload));
  } catch (err) {
    yield put(actions.A_removeArticleFailure(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}

function* addArticle({ payload, callback }) {
  try {
    const { data } = yield call(() => api.post("/articles", payload));
    yield put(actions.A_addArticleSuccess(data));
  } catch (err) {
    yield put(actions.A_addArticleFailure(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}

function* duplicateArticle({ payload, callback }) {
  try {
    const article = yield select(selectors.getArticle(payload));
    yield put(actions.A_duplicateArticleSuccess({ ...article, id: uuidv4() }));
  } catch (err) {
    yield put(actions.A_duplicateArticleFailure(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}

export default function*() {
  yield takeLatest(constants.FETCH_ARTICLES_REQUEST, fetchAllArticles);
  yield takeLatest(constants.FETCH_ARTICLE_REQUEST, fetchArticle);
  yield takeLatest(constants.EDIT_ARTICLE_REQUEST, editArticle);
  yield takeLatest(constants.REMOVE_ARTICLE_REQUEST, removeArticle);
  yield takeLatest(constants.ADD_ARTICLE_REQUEST, addArticle);
  yield takeLatest(constants.DUPLICATE_ARTICLE_REQUEST, duplicateArticle);
}
