import i from "./infoBoard_info_segment.module.css"

const InfoBoardInfoSegment = (props) =>{
    return (
        <div className = {i.main}>
           Segment {props.name}
        </div>
    )
}
export default InfoBoardInfoSegment