import './style.scss';

import LinkPage from "../../../component/linkPage";

import { FaEye, FaOpencart } from "react-icons/fa";

const IntroPage = () => {

    return <>
        <LinkPage titlePage={'Giới thiệu'} linkPage={'Giới thiệu'}/>
        <div className="container-intro">
            <h3 className="title-intro">Giới thiệu</h3>
            <p className="para-intro">Chào mừng bạn đến với trang web trang trí nội thất đẳng cấp, nơi chúng tôi tự hào mang đến những sản phẩm độc đáo và sang trọng để làm mới không gian sống của bạn. Tại đây, chúng tôi cung cấp đa dạng mặt hàng trang trí nội thất, từ bàn ghế salong, ghế gỗ, kệ sách, tivi, đồng hồ treo tường và nhiều sản phẩm khác, giúp tạo nên không gian sống ấn tượng và đẳng cấp.

Chúng tôi tự hào với bộ sưu tập đa dạng về kiểu dáng và chất liệu, từ thiết kế hiện đại, cổ điển đến phong cách đương đại, phục vụ mọi sở thích và yêu cầu của khách hàng. Sự chú ý đặc biệt đến chi tiết và chất lượng là điểm mạnh của chúng tôi, đảm bảo rằng mỗi sản phẩm đều là một tác phẩm nghệ thuật độc đáo, thể hiện sự tinh tế và sự chăm sóc tận tâm từ đội ngũ nghệ nhân và nhà thiết kế chuyên nghiệp.

Hãy trải nghiệm sự thú vị của việc trang trí nội thất với chúng tôi và biến không gian sống của bạn thành một tuyệt tác nghệ thuật đầy ấn tượng. Đến với chúng tôi, bạn sẽ không chỉ mua sắm mà còn khám phá nhiều ý tưởng trang trí sáng tạo và phong cách mới nhất.</p>
            <ol className="list-hint">
                <li>Đa dạng sản phẩm và phong cách</li>
                <li>Chất lượng và sự tinh tế</li>
                <li>Dịch vụ tư vấn chuyên nghiệp</li>
                <li>Tiện lợi mua sắm trực tuyến</li>
                <li>Chính sách đổi trả linh hoạt</li>
                <li>Khám phá xu hướng mới nhất</li>
            </ol>
        </div>
    </>
}

export default IntroPage;