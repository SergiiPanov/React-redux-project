import React, {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import {push} from "connected-react-router"
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import {RoutePath} from "../../../../router/constants"
import {actions} from "../../store";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 10,
    },
});

export default ({ article: { image, title, description, id } }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={()=>dispatch(push(`${RoutePath.ARTICLES}/${id}`))} size="small" color="primary">
                    Edit
                </Button>
                <Button onClick={()=>dispatch(actions.A_removeArticleRequest(id))} size="small" color="primary">
                    Delete
                </Button>
                <Button onClick={()=>dispatch(actions.A_duplicateArticleRequest(id))} size="small" color="primary" >
                    Duplicate
                </Button>
            </CardActions>
        </Card>
    )
}