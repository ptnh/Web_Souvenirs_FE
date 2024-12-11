import './style.scss';

import { useEffect, useState } from "react";

import NewsPaper from "../../../component/newsPaper";
import LinkPage from "../../../component/linkPage";

import { FaEye, FaOpencart } from "react-icons/fa";

const ContentPaperPage = () => {
    // Lấy giá trị id từ URL
    const urlParamsPaper = new URLSearchParams(window.location.search);
    const idPaper = urlParamsPaper.get('idPaper');

    const [paper, setPaper] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8181/business_api/paper_api/read.php?idPaper=${idPaper}`)
            .then((response) => response.json())
            .then((data) => {
                setPaper(data);
            });
    }, [paper]);

    return <>
        <LinkPage titlePage={'Tin tức'} linkPage={'Tin tức'}/>
        <h3 className='title_paper_page'>{paper.name_paper}</h3>
        <p className='paragraph_1_paper_page'>{paper.paragrap_1_paper}
        </p>
        <img className='image_paper_page' src={paper.image_paper}/>
        <p className='paragraph_2_paper_page'>{paper.paragrap_2_paper}</p>
    </>
}

export default ContentPaperPage;