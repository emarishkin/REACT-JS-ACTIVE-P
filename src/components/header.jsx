import { Button } from "./Button"
import { useState } from "react"

export function Header(){
    const obj={
        img:'смаилик.jpg'
    }

    let [content,setContent]=useState('нажми сначала на 1 кнопку')
    let [content2,setContent2]=useState('теперь на 2 кнопку')
    let [content3,setContent3]=useState('и на меня')
    
    function handleclick1(type1){
        setContent(type1)
    }
    function handleclick2(type2){
        setContent2(type2)
    }
    function handleclick3(type3){
        setContent3(type3)
    }
    
    return(
        <div className="header">
          <img src="./img/смаилик.jpg" alt="" />
          <div className="header-button">
             <Button isActive={content==='поздравляю'} onClick={()=>handleclick1('поздравляю')}>{content}</Button>
             <Button isActive={content2==='тебя'} onClick={()=>handleclick2('тебя')}>{content2}</Button>
             <Button isActive={content3===obj.img} onClick={()=>handleclick3(obj.img)}>{content3}</Button>
          </div>
        </div>
    )
}