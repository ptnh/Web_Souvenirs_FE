import './style.scss';

import { useEffect, useState } from "react";

import ViewProduct from "../viewProduct";
import { createApiCart } from "../../api";

import { FaEye, FaOpencart } from "react-icons/fa";

const BigProduct = ({idProduct, imageUrl, nameProduct, price, store}) => {
    // const [idViewProduct, setIdViewProduct] = useState(1);
    const [isShowMini, setShowMini] = useState(false);

    const toggleShowMini = (e) => {
        e.preventDefault();
        // setIdViewProduct(idProduct);
        // alert(idViewProduct);
        setShowMini(!isShowMini); 
    };
    
    const toggleAddBigProduct = (e) => {
        e.preventDefault();
        const addProduct = new FormData();
        addProduct.append('id_cart', 0);
        addProduct.append('id_owner', 1);
        addProduct.append('id_product', idProduct);
        addProduct.append('name_product', nameProduct);
        addProduct.append('image_represent', imageUrl);
        addProduct.append('price_product', price);
        addProduct.append('quantity', 1);
        fetch(createApiCart, {
            method: 'POST',
            body: addProduct,
        })
            .then((response) => {
                if (response.ok) {
                    alert('ôk');
                } else {
                    alert('no');
                }
            })
        .catch((error) => console.error('Error deleting product:', error));
    };

    return <>
        <section class="component-advertiver">
            <div class="image-represent">
                <div class="position-ticket">
                    <img src={imageUrl} class="ticket-image"/>
                    <span class="ticket">Hot</span>
                    <span class="hide">
                        <div class="transform-buy">
                            <button  class="btn-view-product"  onClick={toggleShowMini}><FaEye /></button> 
                            <button  class="btn-view-more" onClick={toggleAddBigProduct}><FaOpencart /></button>
                        </div>
                    </span>
                </div>
            </div>
            <div class="detail-info-represent">
                <div class="name-product">{nameProduct}</div>
                <div class="type-product">{store}</div>
                <div class="price-product">{price} <span class="vnd">đ</span></div>
            </div>
        </section> 
        <ViewProduct idProduct={idProduct} imageUrl={'imgProduct/DongHoCitizen.jpg'} isViewProduct={isShowMini} toggleViewProduct={toggleShowMini} store={store}/>
    </>
    
}

export default BigProduct;