import './style.scss';

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { FaEye, FaOpencart, FaChevronRight} from "react-icons/fa";

const LinkPage = ({titlePage, linkPage}) => {
    return <>
    <section class="background">
        <img class="img-background" src="background.png"/>
        <div class="content-link">
            <div class="link-main">{titlePage}</div>
            <div class="link-detail">
                <Link class="link-first" to="#">Trang chủ</Link>
                <p class="icon-link"><FaChevronRight /></p>
                <p class="link-second">{linkPage}</p>
            </div>
        </div>
        
    </section>
</>  
}

export default LinkPage;