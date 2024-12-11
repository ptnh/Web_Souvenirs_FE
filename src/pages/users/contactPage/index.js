import "./style.scss"

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import LinkPage from "../../../component/linkPage";
import InfoContact from "../../../component/infoContact";

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart, FaChevronRight} from "react-icons/fa";
import { CgPlayListSearch } from "react-icons/cg";

const ContactPage = () => {
    return (
        <>
            <LinkPage titlePage={'LIÊN HỆ'} linkPage={'Liên hệ'}/>
            <InfoContact />
        </>        
    )
}

export default ContactPage;