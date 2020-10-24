import React, {useState} from "react";
import "./index.scss";

import {Article} from "../../components/Article";

export default () => {
    const [articles] = useState([
        {
            title: "Article 1",
            description:
                "Above example is the simple react class and not include any hooks. Look at there, first import the react native render elements from react-native.\n" +
                "\n" +
                "So how to do these kinds of stuff in react hook?",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--7JKP9dwh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/proxy/1%2AaGIXCeRQTGu41okryVyECw.png",
        },
        {
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
            title: "Article 3",
            description:
                "So look at the above examples, the same logic of time interval is split into multiple lifecycle methods. This is the one of example, you will have a lot of scenarios where splitting logic into different life cycle hook.\n" +
                "So how can we implement this with hooks?",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--dTVtt1ja--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/proxy/1%2AjPSe6JRUJ1PVHYnjyHtd3Q.png"
        },
        {
            title: "Article 4",
            description:
                "Now, what if I want to call this side effect only when for some state is changed? Let assume, If I have another state called isStarted and initial value of it is false.\n" +
                "\n" +
                "If I want to trigger this useEffect when only isStarted state variable is true, then we can pass the isStarted state instead of passing empty array.",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--GonmpiTj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/proxy/1%2Aydn7s31ud9PRdcbU6jbWBA.png",
        },
    ]);

    return (
        <div className="articles">
            {articles.map((article, idx) => (
                <Article article={article} key={`${article.title}-${idx}`}/>
            ))}
        </div>
    );
};
