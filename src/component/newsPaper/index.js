import './style.scss';

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import { SlCalender } from "react-icons/sl";
import { FaEye, FaOpencart, FaChevronRight} from "react-icons/fa";

const NewsPaper = ({idPaper, namePaper, imgPaper, dayPaper, actorPaper,paragraph}) => {
    

    return <>
        <div className="newspaper">
            <Link to={`/noi-dung-bao?idPaper=${idPaper}`}>
                <img className="img-main" src={imgPaper}/> 
            </Link>
        
            <div className="time-paper" style={{fontWeight:'bold'}}>
                <div className="day" style={{marginRight:'30px'}}>
                <SlCalender style={{marginRight:'5px', cursor:'pointer'}}/>
                    {dayPaper}
                </div>
                <div className="actor" style={{cursor:'pointer'}}>
                    Đăng bởi: {actorPaper}
                </div>
            </div>
            <div className="content-paper">
                <h4 className="title-paper">{namePaper}</h4>
                <p className="paragraph">{paragraph}</p>
            </div>
        </div>
    </>  
}

export default NewsPaper;