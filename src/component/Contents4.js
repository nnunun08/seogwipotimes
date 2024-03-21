import React from 'react';

function Contents4({
    tit, imgSlide1, imgSlide2, imgSlide3, desc, detailInfo, oldAndNew
}) {
    return <>
        <div className='contents contents4'>
            <div className='inner innerFlex'>
                <div className='conTit'>{tit}</div>
                {imgSlide1}
                {oldAndNew}
                <p className='desc'>{desc}</p>
                {detailInfo}
                {imgSlide2}
                {imgSlide3}
            </div>
        </div>
    </>
}

export default Contents4;