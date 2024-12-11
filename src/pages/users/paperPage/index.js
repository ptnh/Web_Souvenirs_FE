import './style.scss';

import { useEffect, useState } from "react";

import NewsPaper from "../../../component/newsPaper";
import LinkPage from "../../../component/linkPage";

import { FaEye, FaOpencart } from "react-icons/fa";

const PaperPage = () => {

    const [papers, setPapers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8181/business_api/paper_api/read.php')
            .then((response) => response.json())
            .then((data) => {
                setPapers(data);
            });
    }, [setPapers]);

    return <>
        <LinkPage titlePage={'Tin tức'} linkPage={'Tin tức'}/>
        <section class="title-type-paper">
            <div class="content-type-paper">
                <span>SẢN PHẨM NỔI BẬT</span>
            </div>
        </section>
        <div className="list-papers">
            {papers.map((item, key) => ( 
                <NewsPaper className="area-paper" idPaper={item.id_paper} namePaper={item.name_paper} imgPaper={item.image_paper} dayPaper={item.day_paper} actorPaper={item.actor_paper} paragraph={item.paragrap_1_paper}/>        
            ))
                }           
        </div>
    </>
}

export default PaperPage;