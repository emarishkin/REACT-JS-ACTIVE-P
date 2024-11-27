export function ButtonMain({children,onClick,isActive}){
    return(
        <div className="main-button">
        <button className={isActive?'button active':'button'} onClick={onClick}>{children}</button>
        </div>
    )
}