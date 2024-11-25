export function Main(){
    let text='hello text'
    let inputClick = ()=>console.log('click')
    return(
        <div className="main">
          <h1>{text}</h1>
          <input placeholder={text} onClick={inputClick} />
          <p>{text==='hello text'? 'кайф':'не кайф'}</p>
        </div>
    )
}