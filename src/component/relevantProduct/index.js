import {meno} from "react";
import './style.scss';

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import ViewProduct from "../viewProduct";
import Product from "../product";

import { FaEye, FaOpencart } from "react-icons/fa";
import { readApiProduct } from "../../api";
const RelevantProduct = ({titleRelevantProduct}) => {
     //lấy data sản phẩm
     const [productss, setProductss] = useState([]);
     useEffect(() => {
         fetch(readApiProduct)
             .then((response) => response.json())
             .then((data) => {
                 setProductss(data);
             });
     }, [setProductss]);

    return <>
        <section class="new-product">
            <section class="component-mini-select-new-product">
                <div class="title-mini-select-new-product">
                    <span>{titleRelevantProduct}</span>
                </div>
        
                <div class="mini-right-new-product">
                    <div class="mini-menu-new-product">
        
                    </div>
                    {/* <div class="repair-poisition-new-product">
                        <button onclick="nextImageNewProducts()" class="dis-new-product"><FaEye/></button>
                        <button onclick="previousImageNewProducts()" class="add-new-product"><FaEye/></button>
                    </div> */}
                </div>
            </section>
            <div class="area-show-option-new-product">
                {productss.map((item, key) => ( 
                    <Product key={key} idProduct={item.id_product} imgProduct={item.picture_product} nameProduct={item.name_product} price={item.price_product} store={item.store_product}/>
                ))}
            </div>
        </section>
    </>
}

export default RelevantProduct;