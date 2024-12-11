import './style.scss';

import { FaEye, FaOpencart } from "react-icons/fa";
import { useState, useEffect } from "react";

import LinkPage from '../../../component/linkPage';
import OptionLinkProduct from '../../../component/optionLinkProduct';
import PriceRange from '../../../component/priceRange';
import OptionStore from '../../../component/optionStore';
import OptionColor from '../../../component/optionColor';
import Product from '../../../component/product';
const AllProductPage = () => {
    // Lấy giá trị id từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const typeProduct = urlParams.get('type');

    
    const [typeProducts, setTypeProducts] = useState([]);
    const [nameTypeProduct, setNameTypeProduct] = useState('rong');

    const [selectedPrice, setSelectedPrice] = useState('0-100000000');
    const [selectedStore, setSelectedStore] = useState('Luxutry');


    console.log(selectedPrice);
    useEffect(() => {
          const readAPI = `http://localhost:8181/business_api/product_api/read.php?type=${typeProduct}&price=${selectedPrice}&store=${selectedStore}`;
          console.log(readAPI);
          fetch(readAPI)
            .then((response) => response.json())
            .then((data) => {
                if(data.length > 0){
                    setNameTypeProduct(data[0].name_type_product);
                } else {
                    setNameTypeProduct('Lựa chọn tìm kiếm');
                }
               
                setTypeProducts(data);
            });
        }, [typeProduct, selectedPrice, selectedStore]);

    return <>
        <LinkPage titlePage={'SẢN PHẨM'} linkPage={nameTypeProduct}/>
            
        <div class="products-list">
            <div class="option-left">
                <OptionLinkProduct />

                <OptionStore setSelectedStore={setSelectedStore} />

                <PriceRange setSelectedPrice={setSelectedPrice} />

                {/* <OptionColor /> */}
            </div>
            <div class="option-right">
                <div class="name-type-product-sort">
                    <div class="name-type-product">{nameTypeProduct}</div>
                    <div class="sort-by">Sắp xếp theo:<span class="select-db">Mặc định</span></div>
                </div>
                <div class="list-product-order-by-type">  
                {typeProducts.length > 0 ? (
                    typeProducts.map((item, key) => ( 
                        <Product key={key} idProduct={item.id_product} imgProduct={item.picture_product} nameProduct={item.name_product} price={item.price_product} store={item.store_product}/>
                    ))
                ) : (
                    <p>Không tìm thấy sản phẩm phù hợp.</p>
                )}
                </div>
            </div>
    </div>
    </>
}

export default AllProductPage;
