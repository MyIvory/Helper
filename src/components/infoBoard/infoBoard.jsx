import i from "./infoBoard.module.css"
import InfoBoardInfo from "./infoBoard_info/infoBoard_info"
import InfoBoardLogin from "./infoBoard_login/infoBoard_login"

const InfoBoard = (props) => {
    return (
        <div className={i.main}>
            <InfoBoardLogin/>
            <InfoBoardInfo/>
        </div>
    )
}
export default InfoBoard