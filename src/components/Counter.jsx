import {useState } from "react";

export function CounterAndModal(){
    
    const [count,setCount]= useState(0)
    const [modal,setModal]=useState(false)

   


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
    <section className="footer-sec">
        <div className="counter_footer">
            <h1>Счетчик</h1>
            <p>{count}</p>
            <div className="buttons-counter">
            <button onClick={clickPlus} className="button_plus">+</button>
            <button onClick={clickMinus} className="button_minus">-</button>
            <button onClick={clickKvadrat} className="button_Kvadrat">^2</button>
            </div>
        </div>



        <div className="modal-blog">
           <button onClick={()=>setModal(true)}>Фото</button>
           {modal && (
            <div className="modal-footer">
            <img src="https://msk.kprf.ru/wp-content/uploads/2021/07/1462779005_1.jpg" alt="берлин1945" />
            <button className="button-modal-cancel" onClick={()=>setModal(false)}>Закрыть</button>
         </div>
           )}
        </div>

    </section>
    )
}