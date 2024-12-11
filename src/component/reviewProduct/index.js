import './style.scss';

import { useEffect, useState } from "react";

import ContentReviewProduct from "../contentReviewProduct";

import { FaEye, FaOpencart } from "react-icons/fa";

const ReviewProduct = () => {
    // lấy data
    const dataReviewProduct = [
        { topic: 'Màu sắc', purpose: `Chân: Trắng, đen, gỗ.
        Mặt: Trắng, đen, xám, hồng.` },
        { topic: 'Kích thước', purpose: `H80/45 x D40 x R48.` },
        { topic: 'Khối lượng thực tế', purpose: ` 5kg.` },
        { topic: 'Chất liệu', purpose: `Chân sắt sơn tĩnh điện, mặt nhựa MDS.` },
        { topic: 'Ý tưởng thiết kế', purpose: `Với những biến tấu đa dạng độc đáo, có thể nói Luxury là một trong những mẫu ghế hiện đại được ưa chuộng nhất hiện nay. Luxury có kiểu dáng DAW - một biểu tượng của thiết kế hiện đại ngày nay.
        Phần tựa lưng ghế bằng nhựa với độ cao và độ ngả hợp lí giúp hỗ trợ xương sống. Chân ghế gỗ tự nhiên và cấu trúc cân bằng trọng lượng và tạo ra nét khác biệt.      
        Sự kết hợp độc đáo và sáng tạo giữa các chất liệu gỗ, nhựa, đệm… tạo nên một chiếc ghế đẹp và thanh lịch cho ngôi nhà của bạn.` },
        { topic: 'Các đặc điểm nổi bật', purpose: 'Mặt ngồi ghế hõm sâu, dáng ghế như một thác nước đổ xuống giữ cho người ngồi thoải mái bằng cách giảm áp lực lên lưng và đùi. Qua đó bạn có thể ngồi lâu hơn trên ghế mà không cảm thấy mỏi.Sử dụng những chiếc ghế Luxury xinh xắn là giải pháp thông minh tiết kiệm diện tích cho ngôi nhà của bạn. Bạn có thể tha hồ lựa chọn kết hợp màu sắc, thoải mái thay đổi cho mọi không gian, ứng dụng. Chất liệu hiện đại, bền, chắc chắn. ' },
    ];
    const dataInforProduct = [
        { topic: 'Màu ssssắc', purpose: `Chân: Trắng, đen, gỗ.
        Mặt: Trắng, đen, xám, hồng.` },
        { topic: 'Kích tssshước', purpose: `H80/45 x D40 x R48.` },
        { topic: 'Khối lsssượng thực tế', purpose: ` 5kg.` },
        { topic: 'Chất lsssiệu', purpose: `Chân sắt sơn tĩnh điện, mặt nhựa MDS.` },
        { topic: 'Ý tưởng thiết kế', purpose: `Với những biến tấu đa dạng độc đáo, có thể nói Luxury là một trong những mẫu ghế hiện đại được ưa chuộng nhất hiện nay. Luxury có kiểu dáng DAW - một biểu tượng của thiết kế hiện đại ngày nay.
        Phần tựa lưng ghếsss bằng nhựa với độ cao và độ ngả hợp lí giúp hỗ trợ xương sống. Chân ghế gỗ tự nhiên và cấu trúc cân bằng trọng lượng và tạo ra nét khác biệt.      
        Sự kết hợp độc đáo và sáng tạo giữa các chất liệu gỗ, nhựa, đệm… tạo nên một chiếc ghế đẹp và thanh lịch cho ngôi nhà của bạn.` },
        { topic: 'Các đặc sssđiểm nổi bật', purpose: 'Mặt ngồi ghế hõm sâu, dáng ghế như một thác nước đổ xuống giữ cho người ngồi thoải mái bằng cách giảm áp lực lên lưng và đùi. Qua đó bạn có thể ngồi lâu hơn trên ghế mà không cảm thấy mỏi.Sử dụng những chiếc ghế Luxury xinh xắn là giải pháp thông minh tiết kiệm diện tích cho ngôi nhà của bạn. Bạn có thể tha hồ lựa chọn kết hợp màu sắc, thoải mái thay đổi cho mọi không gian, ứng dụng. Chất liệu hiện đại, bền, chắc chắn. ' },
    ];
    const dataDanhGiaProduct = [
        { topic: 'Màu ssssắc', purpose: `Chân: Trắng, đen, gỗ.
        Mặt: Trắng, đen, xám, hồng.` },
        { topic: 'Kíchước', purpose: `H80/45 x D40 x R48.` },
        { topic: 'Khối lsssượng thực tế', purpose: ` 5kg.` },
        { topic: 'Chất lsssiệu', purpose: `Chân sắt sơn tĩnh điện, mặt nhựa MDS.` },
        { topic: 'Ý tưởng thiết kế', purpose: `Với những biến tấu đa dlưnđáo và sáng tạo giữa các chất liệu gỗ, nhựa, đệm… tạo nên một chiếc ghế đẹp và thanh lịch cho ngôi nhà của bạn.` },
        { topic: 'Các bật', purpose: 'Mặt ngồi  Qua đó bạn có thể ngồi lâu hơn trên ghế mà không cảm thấy mỏi.Sử dụng những chiếc ghế Luxury xinh xắn là giải pháp thông minh tiết kiệm diện tích cho ngôi nhà của bạn. Bạn có thể tha hồ lựa chọn kết hợp màu sắc, thoải mái thay đổi cho mọi không gian, ứng dụng. Chất liệu hiện đại, bền, chắc chắn. ' },
    ];
    const [isChangeColorBtn, setIsChangeColorBtn] = useState('mo-ta');
    const btnMoTa = () => {
        setIsChangeColorBtn('mo-ta');
    }
    const btnThongTin = () => {
        setIsChangeColorBtn('thong-tin');
    }
    const btnDanhGia = () => {
        setIsChangeColorBtn('danh-gia');
    }
    let dataToShow;

    if (isChangeColorBtn === 'mo-ta') {
        dataToShow = dataReviewProduct;
    } else if (isChangeColorBtn === 'thong-tin') {
        dataToShow = dataInforProduct;
    } else if (isChangeColorBtn === 'danh-gia') {
        // Add data array for 'danh-gia'
        dataToShow = dataDanhGiaProduct;
    }
    return <>
        <div className="are_btn_review_product">
            <button id="btn_review_product" onClick={btnMoTa}  className={isChangeColorBtn === 'mo-ta' ? 'active' : ''}>MÔ TẢ</button>
            <button id="btn_review_product" onClick={btnThongTin}  className={isChangeColorBtn === 'thong-tin' ? 'active' : ''}>THÔNG TIN</button>
            <button id="btn_review_product" onClick={btnDanhGia}  className={isChangeColorBtn === 'danh-gia' ? 'active' : ''}>ĐÁNH GIÁ</button>
        </div>
        <hr style={{width: '1200px', margin:'0px auto'}}/>
        <div className="area_review_product">
            {dataToShow.map((item, key) => ( 
                <ContentReviewProduct key={key} topic={item.topic} purpose={item.purpose}/>
                ))
            }
        </div>
    </>
}

export default ReviewProduct;