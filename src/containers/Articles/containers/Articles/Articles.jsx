import React from "react";
import { Article } from "../../components/Article";
import useStyles from "./style";
import { useSelector } from "react-redux";
import { getAllArticles } from "../../store/selectors";

export default () => {
  const classes = useStyles();
  const articles = useSelector(getAllArticles());

  return (
      <div className={classes.articles}>
        {articles.map(article => (
          <Article article={article} key={article.id} />
        ))}
      </div>
  );
};
