import {Header} from './components/header'
import {Main} from './components/main'
import {Footer} from './components/footer'
  

export function App(){
    return( 
        <div className='name'>
          <Header/>
          <Main />
          <Footer />
        </div>
    )
}