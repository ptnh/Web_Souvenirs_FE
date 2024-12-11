import {meno} from "react";
import './style.scss';

import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import Product from "../../../component/product";
import BigProduct from "../../../component/bigProduct";
import RelevantProduct from"../../../component/relevantProduct";
import ViewProduct from "../../../component/viewProduct";

import { readApiProduct } from "../../../api";

import { FaEye, FaOpencart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
const HomePage = () => {
    //lấy data sản phẩm
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${readApiProduct}?type_list=Clock`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, [setProducts]);

    // const data = [
    //     { imageUrl: 'imgProduct/Alies.jpg', productName: 'Bàn Alies', price:'100,000', store:'Luxury' },
    //     { imageUrl: 'imgProduct/Binas.jpg', productName: 'Bàn Binas', price:'100,000', store:'Luxury' },
    //     { imageUrl: 'imgProduct/DongHoMiSo.png', productName: 'Đồng hồ Miso', price:'100,000', store:'Luxury' },
    //     { imageUrl: 'imgProduct/DongHoTabu.png', productName: 'Đồng hồ Tabu', price:'100,000', store:'Luxury' },
    //     { imageUrl: 'imgProduct/Euro.jpg', productName: 'Ghế Euro', price:'100,000', store:'Luxury' },
    //     { imageUrl: 'imgProduct/Euro02.jpg', productName: 'Ghế Euro 02', price:'100,000', store:'Luxury' },
    //     { imageUrl: 'imgProduct/Luxury.jpg', productName: 'Ghế Luxury', price:'100,000', store:'Luxury' },
    //     { imageUrl: 'imgProduct/Sofa Alice.jpg', productName: 'Sofa đơn Alice', price:'100,000', store:'Luxury' },
    //     { imageUrl: 'imgProduct/Woody Pink.jpg', productName: 'Ghế Woody Pink', price:'100,000', store:'Luxury' },
    //     { imageUrl: 'imgProduct/Woody.jpg', productName: 'Ghế Woody', price:'100,000' },
    //   ];
    // const selectedDataBigProduct = data[1]; // Chọn chỉ số phù hợp
    
    //lấy data sản phẩm bán chạy nhất
    const [sellerProduct, setSellerProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8181/business_api/product_api/read.php?id_product=10`)
            .then((response) => response.json())
            .then((data) => {
                setSellerProduct(data);
            });
        }, [setSellerProduct]);

    const [currentPosition, setCurrentPosition] = useState(0);
    const previousImageOutstandingProducts = () => {
        setCurrentPosition(currentPosition + 213);
    };
    
    const nextImageOutstandingProducts = () => {
        setCurrentPosition(currentPosition - 213);
    };

    return <>
    <img class="size-img" src="background.png" alt="Logo"></img>
    <section class="component-menu-picture">
        <div class="opop1">
            <div class="rectangle">
                <Link to="/all-sp?type=Bear" className="link_rectangle">
                    <img src="icongau.jpg" alt="Sofa" width="100" height="100" class="rotate-on-hover"/>
                    <div class="label">Gấu bông</div>
                </Link>        
            </div>
            <div class="rectangle">
                <Link to="/all-sp?type=Painting"  className="link_rectangle">
                    <img src="icontranh.jpg" alt="Sofa" width="100" height="100" class="rotate-on-hover"/>
                    <div class="label">Tranh</div>
                </Link>
            </div>
            <div class="rectangle">
                <Link to="/all-sp?type=Clock"  className="link_rectangle">
                    <img src="icondongho.jpg" alt="Sofa" width="100" height="100" class="rotate-on-hover"/>
                    <div class="label">Đồng hồ</div>
                </Link>
            </div>
            <div class="rectangle">
                <Link to="/all-sp?type=ToyModel"  className="link_rectangle">
                    <img src="iconmohinh.jpg" alt="Sofa" width="100" height="100" class="rotate-on-hover"/>
                    <div class="label">Mô hình</div>
                </Link>
            </div>
            <div class="rectangle">
                <Link to="/all-sp?type=Glass"  className="link_rectangle">
                    <img src="iconphale.jpg" alt="Sofa" width="100" height="100" class="rotate-on-hover"/>
                    <div class="label">Pha lê</div>
                </Link>
            </div>
            <div class="rectangle">
                <Link to="/all-sp?type=Diversity"  className="link_rectangle">
                    <img src="iconkhac.jpg" alt="Sofa" width="100" height="100" class="rotate-on-hover"/>
                    <div class="label">Khác</div>
                </Link>
            </div>
        </div>
    </section>

    <section class="body-web">
        <BigProduct idProduct={sellerProduct.id_product} 
            imageUrl={sellerProduct.picture_product}
            productName={sellerProduct.name_product}
            price={sellerProduct.price_product}
            store={sellerProduct.store_product}
        />       

        <section class="show-list-mini-product" >
            <section class="component-mini-select" style={{marginLeft:'2px'}}>
                <div class="title-mini-select">
                    <span>SẢN PHẨM NỔI BẬT</span>
                </div>
                <div class="mini-right">
                    <div class="mini-menu">
                        <a href="/all-sp?type=Bear">Gấu bông</a>
                        <a href="/all-sp?type=Painting">Tranh</a>
                        <a href="/all-sp?type=Clock">Đồng hồ</a>
                        <a href="/all-sp?type=ToyModel">Mô hình</a>
                        <a href="/all-sp?type=Glass">Pha lê</a>
                        <a href="/all-sp?type=Diversity">Xem tất cả</a>
                    </div>
                    {/* <div class="repair-poisition">
                        <button onClick={previousImageOutstandingProducts} class="dis"><FaChevronLeft /></button>
                        <button onClick={nextImageOutstandingProducts} class="add"><FaChevronRight /></button>
                    </div> */}
                </div>
            </section>
            {/* <div class="area-show-option" style={{ width: '210px', display:`flex`, transform: `translateX(${currentPosition}px)`, transition: 'transform 0.3s ease-in-out' }}> */}
            <div class="area-show-option" style={{marginLeft:'2px'}}>
                
                {products.map((item, key) => ( 
                    <Product key={key} idProduct={item.id_product} imgProduct={item.picture_product} nameProduct={item.name_product} price={item.price_product} store={item.store_product}/>
                ))
                }
             
            </div>
            <div class="area-show-option" style={{marginLeft:'2px'}}>
                {products.map((item, key) => ( 
                    <Product key={key} idProduct={item.id_product} imgProduct={item.picture_product} nameProduct={item.name_product} price={item.price_product} store={item.store_product}/>
                ))}
            </div>
           
        </section>
    </section>
   
    <section class="room-advertisement">
        <section class="component-image-adverticer">
            <div class="pareant-img">
                <img src="slider_1.png" class="image-adverticer-menu"/>
            </div>
            <p class="text-menu">PHÒNG BẾP</p>
        </section>
        <section class="component-image-adverticer">
            <div class="pareant-img">
                <img src="slider_1.png" class="image-adverticer-menu"/>
            </div>
            <p class="text-menu">PHÒNG BẾP</p>
        </section>   
    </section>

    <section class="body-web">
               

               <section class="show-list-mini-product">
                   <section class="component-mini-select">
                       <div class="title-mini-select">
                           <span>SẢN PHẨM NỔI BẬT</span>
                       </div>
                       <div class="mini-right">
                            <div class="mini-menu">
                                <a href="/all-sp?type=Bear">Gấu bông</a>
                                <a href="/all-sp?type=Painting">Tranh</a>
                                <a href="/all-sp?type=Clock">Đồng hồ</a>
                                <a href="/all-sp?type=ToyModel">Mô hình</a>
                                <a href="/all-sp?type=Glass">Pha lê</a>
                                <a href="/all-sp?type=Diversity">Xem tất cả</a>
                            </div>
                           {/* <div class="repair-poisition">
                               <button onClick={previousImageOutstandingProducts} class="dis"><FaChevronLeft /></button>
                               <button onClick={nextImageOutstandingProducts} class="add"><FaChevronRight /></button>
                           </div> */}
                       </div>
                   </section>
                   {/* <div class="area-show-option" style={{ width: '210px', display:`flex`, transform: `translateX(${currentPosition}px)`, transition: 'transform 0.3s ease-in-out' }}> */}
                   <div class="area-show-option" style={{}}>
                       
                       {products.map((item, key) => ( 
                           <Product key={key} idProduct={item.id_product} imgProduct={item.picture_product} nameProduct={item.name_product} price={item.price_product} store={item.store_product}/>
                       ))
                       }
                    
                   </div>
                   <div class="area-show-option">
                       {products.map((item, key) => ( 
                           <Product key={key} idProduct={item.id_product} imgProduct={item.picture_product} nameProduct={item.name_product} price={item.price_product} store={item.store_product}/>
                       ))}
                   </div>
                  
               </section>
               <BigProduct idProduct={sellerProduct.id_product} 
                   imageUrl={sellerProduct.picture_product}
                   productName={sellerProduct.name_product}
                   price={sellerProduct.price_product}
                   store={sellerProduct.store_product}
               />
           </section>
       

    <RelevantProduct titleRelevantProduct={'SẢN PHẨM MỚI VỀ'}/>
    </>
}

export default HomePage;