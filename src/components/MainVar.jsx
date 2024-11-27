
export function MainVar({title,text}){
    return(
        <ul>
            <li className='var-item'>
              <p><strong>{title}</strong>{text}
              </p>
            </li>
        </ul>
    )
}