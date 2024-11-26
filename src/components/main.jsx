import {vars} from '../data'
import {MainVar} from'./MainVar'

export function Main(){
    
    return(
        <div className="main">
          <p>Войны</p>
          <MainVar title={vars[0].title} text={vars[0].text}/>
          <MainVar title={vars[1].title} text={vars[1].text}/>
          <MainVar title={vars[2].title} text={vars[2].text}/>
          <MainVar title={vars[3].title} text={vars[3].text}/>
        </div>
    )
}