import './style.scss';

import { useEffect, useState } from "react";

import ViewProduct from "../viewProduct";

import { FaEye, FaOpencart } from "react-icons/fa";
const ChangeImage = ({idProduct, imageUrl}) => {
    // thay đổi ảnh
    const [currentImage, setCurrentImage] = useState(imageUrl);
    const [currentDescription, setCurrentDescription] = useState('Description 1');
 
    const changeImageInfoProduct = (image, description) => {
        setCurrentImage(image);
        setCurrentDescription(description);
    };
 
    // cuộn ngang ảnh
    const [currentPositionPictureDetail, setCurrentPositionPictureDetail] = useState(0);
 
    const nextImagePictureSmall = () => {
        setCurrentPositionPictureDetail(currentPositionPictureDetail+110);
    };
     
    const previousImagePictureSmall = () => {
        setCurrentPositionPictureDetail(currentPositionPictureDetail-110)
    };

    const [imageProduct, setImageProduct] = useState({});
    useEffect(() =>{
        
            const apiInfoProduct = `http://localhost:8181/business_api/infoProduct_api/read.php?id_product=${idProduct}`
    
            // setTagIdProduct(idProduct);
            fetch(apiInfoProduct)
                .then((response) => response.json())
                .then((data) => {
                    setImageProduct(data);
                }); 
           
        })

    return <>
        <div>
            <img id="product-image" src={currentImage} class="image-info-product-view-product" />
            <div class="image-container-view-product">
                <div class="image-slider-view-product">
                    <div class="image-slide" style={{display:`flex`,justifyContent:`space-around`, transform: `translateX(${currentPositionPictureDetail}px)`, transition: 'transform 0.3s ease-in-out' }}>
                        <img src={imageUrl} alt="Image 1" class="small-image-view-product" onClick={() => changeImageInfoProduct(imageProduct.picture_other_1, 'Description 1')}/>
                        <img src={imageProduct.picture_other_1} alt="Image 1" class="small-image-view-product" onClick={() => changeImageInfoProduct(imageProduct.picture_other_1, 'Description 1')}/>
                        <img src={imageProduct.picture_other_2} alt="Image 2" class="small-image-view-product" onClick={() => changeImageInfoProduct(imageProduct.picture_other_2, 'Description 1')}/>
                        <img src={imageProduct.picture_other_3} alt="Image 3" class="small-image-view-product" onClick={() => changeImageInfoProduct(imageProduct.picture_other_3, 'Description 1')}/>
                        {/* <img src="background.jpg" alt="Image 4" class="small-image-view-product" onClick={() => changeImageInfoProduct('slider_2.png', 'Description 1')}/>
                        <img src="slider_1.png" alt="Image 5" class="small-image-view-product" onClick={() => changeImageInfoProduct('slider_1.png', 'Description 1')} />
                        <img src="background.jpg" alt="Image 6" class="small-image-view-product" onClick={() => changeImageInfoProduct('slider_2.png', 'Description 1')}/> */}
                    </div>
                </div>
                {/* chức năng tạm hoãn */}
                {/* <button class="btn-prev-button-view-product" onClick={previousImagePictureSmall}><FaEye/></button>
                <button class="btn-next-button-view-product" onClick={nextImagePictureSmall}><FaEye/></button> */}
            </div>
        </div>                   
    </>
}
export default ChangeImage;