import { Button } from "./Button"
import { useState } from "react"

export function Header(){
    const [content,setContent] = useState('нажми')
    

    function handleClick(type){
        console.log('click',type)
        setContent(type)
      
    }
    return(
        <div className="header">
        <img src="./img/смаилик.jpg" alt="" />
        <Button onClick={()=>handleClick('не нажимай')}>{content} </Button>
        </div>
    )
}