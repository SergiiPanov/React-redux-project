import { call, put, takeLatest, select } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import * as selectors from "./selectors";
import {v4 as uuidv4} from "uuid"

function* fetchAllArticles ({ callback }) {
    try{
        const data = [
            {
                id : 1,
                title: "Article 1",
                description:
                    "Above example is the simple react class and not include any hooks. Look at there, first import the react native render elements from react-native.\n" +
                    "\n" +
                    "So how to do these kinds of stuff in react hook?",
                image: "https://res.cloudinary.com/practicaldev/image/fetch/s--7JKP9dwh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/proxy/1%2AaGIXCeRQTGu41okryVyECw.png",
            },
            {
                id : 2,
                title: "Article 2",
                description: "Above example, simply import the useState from react other than react elements. This is the JavaScript function and not the react class component where I showed you an early example.\n" +
                    "\n" +
                    "setEffect is used to replace the lifecycle hooks such as componentDidMount, componentDidUpdate and componentWillUnmount.\n" +
                    "\n" +
                    "For an example, if your goal is to trigger data fetching upon clicking on a button, then there’s no need to use useEffect.\n" +
                    "Before move into the effect hook code, just look at this following example",
                image: "https://res.cloudinary.com/practicaldev/image/fetch/s--kh7sBSgw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/proxy/1%2AxGHdt-0F2jtUUNSB93O3JQ.png",
            },
            {
                id : 3,
                title: "Article 3",
                description:
                    "So look at the above examples, the same logic of time interval is split into multiple lifecycle methods. This is the one of example, you will have a lot of scenarios where splitting logic into different life cycle hook.\n" +
                    "So how can we implement this with hooks?",
                image: "https://res.cloudinary.com/practicaldev/image/fetch/s--dTVtt1ja--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/proxy/1%2AjPSe6JRUJ1PVHYnjyHtd3Q.png"
            },
            {
                id : 4,
                title: "Article 4",
                description:
                    "Now, what if I want to call this side effect only when for some state is changed? Let assume, If I have another state called isStarted and initial value of it is false.\n" +
                    "\n" +
                    "If I want to trigger this useEffect when only isStarted state variable is true, then we can pass the isStarted state instead of passing empty array.",
                image: "https://res.cloudinary.com/practicaldev/image/fetch/s--GonmpiTj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/proxy/1%2Aydn7s31ud9PRdcbU6jbWBA.png",
            },
            {
                id : 5,
                title: "Article 4",
                description:
                    "Now, what if I want to call this side effect only when for some state is changed? Let assume, If I have another state called isStarted and initial value of it is false.\n" +
                    "\n" +
                    "If I want to trigger this useEffect when only isStarted state variable is true, then we can pass the isStarted state instead of passing empty array.",
                image: "https://res.cloudinary.com/practicaldev/image/fetch/s--GonmpiTj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/proxy/1%2Aydn7s31ud9PRdcbU6jbWBA.png",
            },
        ];
        yield put(actions.A_fetchArticlesSuccess(data))
    } catch (err){
        yield put(actions.A_fetchArticlesFailure(err))
    } finally {
        callback & (typeof callback === "function") && callback();
    }
}

function* fetchArticle ({ payload ,callback }) {
    try{
        const article = yield select(selectors.getArticle(payload))
        yield put(actions.A_fetchArticleSuccess(article))
    }catch (err){
        yield put(actions.A_fetchArticleFailure(err))
    }finally {
        callback & (typeof callback === "function") && callback();
    }
}

function* editArticle ({ payload, callback}) {
    try{
        yield put(actions.A_editArticleSuccess(payload))
        yield put(actions.A_editArticleClear())
    }catch(err){
        yield put(actions.A_editArticleFailure(err))
    }finally {
        callback & (typeof callback === "function") && callback();
    }
}

function* removeArticle ({ payload, callback}) {
    try{
        yield put(actions.A_removeArticleSuccess(payload))
    }catch(err){
        yield put(actions.A_removeArticleFailure(err))
    }finally {
        callback & (typeof callback === "function") && callback();
    }
}

function* addArticle ({payload , callback}){
    try{
        yield put(actions.A_addArticleSuccess(payload))
    }catch(err){
        yield put(actions.A_addArticleFailure(err))
    }finally {
        callback & (typeof callback === "function") && callback();
    }
}

function* duplicateArticle ({payload, callback}){
    try{
        const article = yield select(selectors.getArticle(payload))
        yield put(actions.A_duplicateArticleSuccess({...article,id:uuidv4()}))
    }catch(err){
        yield put(actions.A_duplicateArticleFailure(err))
    }finally {
        callback & (typeof callback === "function") && callback();
    }
}



export default function* () {
    yield takeLatest(constants.FETCH_ARTICLES_REQUEST, fetchAllArticles);
    yield takeLatest(constants.FETCH_ARTICLE_REQUEST, fetchArticle);
    yield takeLatest(constants.EDIT_ARTICLE_REQUEST, editArticle);
    yield takeLatest(constants.REMOVE_ARTICLE_REQUEST, removeArticle);
    yield takeLatest(constants.ADD_ARTICLE_REQUEST, addArticle);
    yield takeLatest(constants.DUPLICATE_ARTICLE_REQUEST, duplicateArticle);
}