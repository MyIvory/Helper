import i from "./infoBoard_info.module.css"
import InfoBoardInfoSegment from "./infoBoard_info_segment/infoBoard_info_segment"

const InfoBoardInfo = (props) =>{
    return (
        <div className = {i.main}>
           <InfoBoardInfoSegment name = "1"/>
           <InfoBoardInfoSegment name  = "2"/>
           <InfoBoardInfoSegment name = "3"/>
        </div>
    )
}
export default InfoBoardInfo