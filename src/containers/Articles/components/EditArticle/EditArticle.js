import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {push} from "connected-react-router"
import {RoutePath} from "../../../../router/constants"
import {getArticle} from "../../store/selectors";
import * as actions from "../../store/actions";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 10,
    },
});

export default ({match: {params: {id}}}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [article, changeArticle] = useState(null)
    // useEffect(() => {
    //     dispatch(actions.A_fetchArticleRequest((id)))
    // }, [dispatch])
    const chosenArticle = useSelector(getArticle(id))
    useEffect(() =>{
        changeArticle(chosenArticle)
    },[chosenArticle])

    const handleEditArticle = () =>{
        dispatch(actions.A_editArticleRequest(article))
        dispatch(push(RoutePath.ARTICLES))
    }
    const handleRemoveArticle = () =>{
        dispatch(actions.A_removeArticleRequest(id))
        dispatch(push(RoutePath.ARTICLES))
    }

    return (
        article ?
            <div>
                <div>{article.title}</div>
                <div>{article.description}</div>
                <p>
                    <img src={article.image} alt=""/>
                </p>
                <button onClick={handleEditArticle}>Edit</button>
                <button onClick={handleRemoveArticle}>Delete</button>
            </div> : null
    )
}