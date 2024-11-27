import {vars} from '../data'
import {MainVar} from'./MainVar'
import {ButtonMain} from './ButtonMain'
import { useState } from 'react'

export function Main(){

  let [cont,setCont]=useState('') 

  function clickButtonMain(type){
    return setCont(type)
  }
  
    
    return(
      <section>
        <div className="main">
          <p>Войны</p>
          <MainVar title={vars[0].title} text={vars[0].text}/>
          <MainVar title={vars[1].title} text={vars[1].text}/>
          <MainVar title={vars[2].title} text={vars[2].text}/>
          <MainVar title={vars[3].title} text={vars[3].text}/>
        </div>
        <div className='p-main'>
        <p><strong>ИТОГИ</strong></p>
        </div>
        <div className='main-button'>
          <ButtonMain onClick={()=>clickButtonMain('победа СССР')}>Великая Отечественная война</ButtonMain>
          <ButtonMain onClick={()=>clickButtonMain('вывод советских войск')}>Афганская война</ButtonMain>
          <ButtonMain onClick={()=>clickButtonMain('победа России')}>Гражданская война в Сирии</ButtonMain>
          <ButtonMain onClick={()=>clickButtonMain('пока неизвестно')}>Вторая чеченская война</ButtonMain>
        </div>
        <div className='p-main'>
        <p>{cont}</p>
        </div>
        </section>
    )
}