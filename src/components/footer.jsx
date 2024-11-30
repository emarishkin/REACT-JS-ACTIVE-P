import { ButtonFooter } from "./Button-Footer"


export function Footer(){

    function handleClickFooter(){
        alert('норм')
    }
    
    return(
        <div className="footer">
            <form action="">
            <input placeholder="Введите имя" type="text" />
            <input placeholder="Введите фамилию" type="text" />
            <input placeholder="Введите номер телефона" type="number" />
            </form>
            <ButtonFooter onClick={handleClickFooter}>отправить</ButtonFooter>
        </div>
    )
}