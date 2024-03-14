import React from 'react';

function Contents5({
    em, tit, img, desc, info, link, video, custom
}) {
    return <>
        <div className='contents contents5'>
            <div className='inner'>
                <div className='titWrap'>
                    <em>{em}</em>
                    <div className='conTit'>{tit}</div>
                </div>
                <div className='imgList'>
                    {img}
                </div>
                <p className='desc'>{desc}</p>
                {video}
                {custom}
                <div className='detailInfo'>
                    {info}
                </div>
                {link}
            </div>
        </div>
    </>
}

export default Contents5;