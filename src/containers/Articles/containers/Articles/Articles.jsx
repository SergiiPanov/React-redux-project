import React from "react";
import {Article} from "../../components/Article";
import useStyles from "./style"
import {useSelector} from "react-redux";
import {getAllArticles} from "../../store/selectors";
import {useDispatch} from "react-redux";
import * as actions from "../../store/actions"
import {v4 as uuidv4} from "uuid"


export default () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const articles = useSelector(getAllArticles())
    const handleAddPost = () =>{
        dispatch(actions.A_addArticleRequest({
            id : uuidv4(),
            title: `Article ${uuidv4()}`,
            description:
                "Now, what if I want to call this side effect only when for some state is changed? Let assume, If I have another state called isStarted and initial value of it is false.\n" +
                "\n" +
                "If I want to trigger this useEffect when only isStarted state variable is true, then we can pass the isStarted state instead of passing empty array.",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--GonmpiTj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/proxy/1%2Aydn7s31ud9PRdcbU6jbWBA.png",
        },))
    }

    return (
        <>
            <p><button onClick={handleAddPost}>ADD</button></p>
            <div className={classes.articles}>
                {articles.map((article) => (
                    <Article article={article} key={article.id}/>
                ))}
            </div>
        </>
    );
};
