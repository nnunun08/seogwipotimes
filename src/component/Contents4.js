import React from 'react';

function Contents4({
    tit, imgSlide1, imgSlide2, imgSlide3, desc, info
}) {
    return <>
        <div className='contents contents4'>
            <div className='inner'>
                <div className='conTit'>{tit}</div>
                {imgSlide1}
                <p className='desc'>{desc}</p>
                <div className='detailInfo'>
                    {info}
                </div>
                {imgSlide2}
                {imgSlide3}
            </div>
        </div>
    </>
}

export default Contents4;