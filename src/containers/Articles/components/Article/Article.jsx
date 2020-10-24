import React from "react";
import "./index.scss";
import {Button} from "@material-ui/core";

export default ({ article: { image, title, description } }) => {
  return (
    <div className="article">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div>{description}</div>
      <div className="article__button">
        <Button color="primary" variant="contained">View</Button>
        <Button color="primary" variant="contained">Edit</Button>
        <Button color="primary" variant="contained">Remove</Button>
      </div>
    </div>
  );
};
