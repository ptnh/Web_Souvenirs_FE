import './style.scss';

import { useEffect, useState } from "react";

import ChangeImage from "../changeImage";
import InfoProduct from "../infoProduct";
import { readApiProduct } from "../../api";

import { FaEye, FaOpencart } from "react-icons/fa";

const ViewProduct = ( {idProduct, imageUrl, isViewProduct, toggleViewProduct, store}) => {
   const [tagIdProduct, setTagIdProduct] = useState();
   const [infoProducts, setInfoProducts] = useState({});

    useEffect(() =>{
    if(isViewProduct){
        setTagIdProduct(idProduct);
        //lấy data sản phẩm
        const api = `http://localhost:8181/business_api/product_api/read.php?id_product=${tagIdProduct}`

        // setTagIdProduct(idProduct);
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                setInfoProducts(data);
            }); 
        console.log(infoProducts);
        }
    })

    return <>
        <div className={`toggleView ${isViewProduct ? 'visible' : ''}`}>
            <div id="screen-children-view-product" class="screen-children-view-product">
                <div class="overlay-content-view-product">
                    <span class="close-view-product" onClick={toggleViewProduct}>&times;</span>
                    <section class="component-view-info-product-view-product">
                        <ChangeImage idProduct={idProduct} imageUrl={imageUrl}/>
                      
                        <InfoProduct infoProducts={infoProducts} store={store}/>
                    </section>
                </div>
            </div>
        </div>
    </>
}

export default ViewProduct;