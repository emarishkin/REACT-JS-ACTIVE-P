import {useState } from "react";

export function Counter(){
    
    const [count,setCount]= useState(0)

    function clickPlus(){
        return setCount(count+1)  
    }
    function clickMinus(){
        return setCount(count-1)  
    }
    function clickKvadrat(){
        return setCount(count*count)  
    }

    return (
        <div className="counter_footer">
            <h1>Счетчик(простой)</h1>
            <p>{count}</p>
            <div className="buttons-counter">
            <button onClick={clickPlus} className="button_plus">+</button>
            <button onClick={clickMinus} className="button_minus">-</button>
            <button onClick={clickKvadrat} className="button_Kvadrat">^2</button>
            </div>
        </div>
    )
}