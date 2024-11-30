export function ButtonFooter({children,onClick}){
    return (
        <div className="button-footer">
            <button onClick={onClick}>{children}</button>
        </div>
    )
}