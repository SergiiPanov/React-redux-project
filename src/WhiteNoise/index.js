import React, {useState, useEffect} from "react";
import "./index.scss"

export default () => {

    const [arr, changeArr] = useState(Array(900).fill(0));
    const [active, changeActiveTrigger] = useState(true)


    useEffect(() => {
        if (active) {
            const interval = setInterval(() => changeArr(arr.map(() => Math.ceil(Math.random() * 5))), 150)
            return () => clearInterval(interval)
        } else {
            changeArr(Array(900).fill(0))
        }
    }, [active])

    return (
        <div className={"TV"}>
            {arr.map((item, index) => <NoisePaint key={index} item={item}/>)}
            <button onClick={() => changeActiveTrigger(!active)}>{active ? "TurnOff" : "TurnOn"}</button>
        </div>

    )
}

const NoisePaint = ({item}) => {
    return (
        item === 0 ? <div style={{background: "white"}} className={"square"}/> :
            item === 1 ? <div style={{background: "green"}} className={"square"}/> :
                item === 2 ? <div style={{background: "black"}} className={"square"}/> :
                    item === 3 ? <div style={{background: "yellow"}} className={"square"}/> :
                        item === 4 ? <div style={{background: "brown"}} className={"square"}/> :
                            item === 5 ? <div style={{background: "grey"}} className={"square"}/> :
                                null

    )
}