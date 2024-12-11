import './style.scss';

import { useEffect, useState } from "react";

import LinkPage from "../../../component/linkPage";
import FormPayInfo from '../../../component/formPayInfo';


const PayPage = () => {
    // Lấy giá trị id từ URL
    const urlParamCart = new URLSearchParams(window.location.search);
    const id_client = urlParamCart.get('code');
    
    return <>
        <LinkPage titlePage={'Thanh toán'} linkPage={'Thanh toán'}/>
        <FormPayInfo />
    </>
    
}

export default PayPage;