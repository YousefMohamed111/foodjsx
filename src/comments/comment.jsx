import React from 'react';
import './comment.css';
import img1 from './img/review_1.png';
import img2 from './img/review_2.png';
import img3 from './img/review_3.png';
import img4 from './img/review_4.png';
import { useTranslation } from 'react-i18next';

function Comment() {
    const { t } = useTranslation();
    const array = [
        {
            img: img1,
            title: "John Doe",
            comment: t("comments")

        },
        {
            img: img2,
            title: "Michael Johnson",
            comment: t("comments")
        },
        {
            img: img3,
            title: "Jane Smith",
            comment: t("comments")
        },
        {
            img: img4,
            title: "Sarah Brown",
            comment: t("comments")
        },
    ];

    return (
        <>
            <h1 className='q'>{t("clien")}</h1>
            <div className='container cards'>
                <div className='row'>
                    {array.map((item, index) => (
                        <div className="card mb-3 col-12 col-lg-3 " key={index} style={{ width: '18rem' }}>
                            <div className="card-body">
                                <p className="card-text">{item.comment}</p>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={item.img} className='teamimg' alt={item.title} />
                                    <p className='ms-3'>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Comment;
