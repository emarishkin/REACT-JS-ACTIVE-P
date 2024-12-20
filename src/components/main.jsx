import {vars} from '../data'
import {MainVar} from'./MainVar'
import {ButtonMain} from './ButtonMain'
import { useState } from 'react'
import { Timer } from './Timer'

export function Main(){

  let [cont,setCont]=useState('') 

  function clickButtonMain(type){
    return setCont(type)
  }
  
    
    return(
      <section>
        <div className="main">
          <div className='main-info'>
          <p>Войны</p>
          <MainVar title={vars[0].title} text={vars[0].text}/>
          <MainVar title={vars[1].title} text={vars[1].text}/>
          <MainVar title={vars[2].title} text={vars[2].text}/>
          <MainVar title={vars[3].title} text={vars[3].text}/>
          </div>
        </div>
        <div className='p-main'>
        <p><strong>ИТОГИ</strong></p>
        </div>
        <div className='main-button'>
          <ButtonMain isActive={cont==='победа СССР'} onClick={()=>clickButtonMain('победа СССР')}><p>Великая Отечественная война</p></ButtonMain>
          <ButtonMain isActive={cont==='вывод советских войск'} onClick={()=>clickButtonMain('вывод советских войск')}><p>Афганская война</p></ButtonMain>
          <ButtonMain isActive={cont==='победа России'} onClick={()=>clickButtonMain('победа России')}><p>Гражданская война в Сирии</p></ButtonMain>
          <ButtonMain isActive={cont==='победа РФ'} onClick={()=>clickButtonMain('победа РФ')}><p>Вторая чеченская война</p></ButtonMain>
        </div>
        <div className='p-main'>
        <p>{cont}</p>
        </div>
        <Timer/>
        </section>
    )
}