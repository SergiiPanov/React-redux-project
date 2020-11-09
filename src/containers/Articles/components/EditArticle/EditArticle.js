import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { RoutePath } from "../../../../router/constants";
import { getArticle } from "../../store/selectors";
import * as actions from "../../store/actions";
import { Formik } from "formik";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
});

export default ({
  match: {
    params: { id },
  },
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [article, changeArticle] = useState(null);
  useEffect(() => {
    dispatch(actions.A_fetchArticleRequest(id));
  }, [dispatch]);
  const chosenArticle = useSelector(getArticle(id));
  useEffect(() => {
    changeArticle(chosenArticle);
  }, [chosenArticle]);

  const handleEditArticle = () => {
    dispatch(push(RoutePath.ARTICLES));
  };
  const handleRemoveArticle = () => {
    dispatch(actions.A_removeArticleRequest(id));
    dispatch(push(RoutePath.ARTICLES));
  };

  return article ? (
    <div>
      <div>{article.title}</div>
      <div>{article.description}</div>
      <p>
        <img src={article.image_url} alt="" />
      </p>
      <Formik
        initialValues={article}
        onSubmit={object => {
          dispatch(actions.A_editArticleRequest(object));
          dispatch(push(RoutePath.ARTICLES));
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <textarea
                cols={30}
                name={"title"}
                id={"title"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                cols={40}
                rows={10}
                id={"description"}
                name={"description"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
            </div>
            <div>
              <label htmlFor="image_url">Image</label>
              <textarea
                cols={40}
                rows={10}
                id={"image_url"}
                name={"image_url"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
              />
            </div>
            <button type={"submit"}>EDIT</button>
          </form>
        )}
      </Formik>
      <button onClick={handleEditArticle}>Return</button>
      <button onClick={handleRemoveArticle}>Delete</button>
    </div>
  ) : null;
};
