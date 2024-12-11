import './style.scss';

import { useEffect, useState } from "react";

import ViewProduct from "../../../component/viewProduct";
import LinkPage from "../../../component/linkPage";
import ChangeImage from "../../../component/changeImage";
import InfoProduct from "../../../component/infoProduct";
import ReviewProduct from "../../../component/reviewProduct";
import RelevantProduct from "../../../component/relevantProduct";

const ProductPage = () => {
    const productsData = [
        {
          id_product: '5',
          name_product: 'Đồng hồ Citizen',
          imageUrl: 'imgProduct/DongHoCitizen.jpg',
          price_product: 220000,
          describe_product: 'Sản phẩm độc quyền',
          store: 'Citizen',
        },
        // Thêm các sản phẩm khác nếu cần
      ];
    const sanPhamA = productsData[0];

    return <>
        <LinkPage titlePage={'Sản phẩm'} linkPage={'Sản phẩm'}/>
        <div className="detail-info-product" >
            <div  style={{margin: '20px 40px 0px 0px'}}>
                <ChangeImage imageUrl={'imgProduct/DongHoCitizen.jpg'}/>
               
            </div>
            <InfoProduct infoProducts={sanPhamA} store={'luxury'} />
        </div>
        <ReviewProduct/>
        <RelevantProduct titleRelevantProduct={'SẢN PHẨM LIÊN QUAN'}/>
    </>
    
}

export default ProductPage;