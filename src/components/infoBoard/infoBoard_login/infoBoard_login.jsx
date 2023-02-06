import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import i from "./infoBoard_login.module.css"
import {faUser,faLock } from '@fortawesome/free-solid-svg-icons'

const InfoBoardLogin = (props) => {
    return (
        <form className={i.main}>
            <div className={i.user}>
                <FontAwesomeIcon icon={faUser}  className ={i.icon}/>
                <input name="user_input" type="text" placeholder="User" className={i.user_input}></input>
            </div>
            <div className={i.pass}>
                <FontAwesomeIcon icon={faLock} className ={i.icon}/>
                <input name="pass_input" type="password" placeholder="Password" className={i.pass_input}></input>
            </div>
            <div className={`${i.but} ${i.but_login}`}><span>Увійти</span></div>
            <div className={`${i.but} ${i.but_pass}`}><span>реєстрація</span></div>

        </form>
    )
}
export default InfoBoardLogin