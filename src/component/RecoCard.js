import React from 'react';

function RecoCard({img, keyword, conTit, desc}) {
    return (
        <div className='card'>
            <div className='imgWrap'>
                <img src={img} alt="img"/>
            </div>
            <div className='rightCon'>
                <div className='keyword'>
                    {keyword}
                </div>
                <div>
                    <div className='conTit'>{conTit}</div>
                    <div className='desc'>{desc}</div>
                </div>
            </div>
        </div>
    ) 
}

export default RecoCard;