import React from 'react';

function Contents2({
    cate, img1, img2, caption1, caption2, dog='dog', kiz='kiz', obs='obs', info, contTit, desc1, desc2, etc=false, imgSlide
    }) {
    return <>
        <div className='contents contents2'>
            <div className='inner'>
                {cate}
                <div className='conTit'>{contTit}</div>
                {imgSlide}
                <div className='itemWrap'>
                    <div className={`tag ${dog}`}>반려</div>
                    <div className={`tag ${kiz}`}>키즈</div>
                    <div className={`tag ${obs}`}>장애</div>
                </div>

                <div className="imgWrap">
                    <img src={img1} />
                    <div className='caption'>{caption1}</div>
                </div>

                <p className='desc'>{desc1}</p>

                <div className="imgWrap">
                    <img src={img2} />
                    <div className='caption'>{caption2}</div>
                </div>

                <p className='desc'>{desc2}</p>

                <div className='detailInfo'>
                    {info}
                </div>
                {etc}
            </div>
        </div>
    </>
}

export default Contents2;