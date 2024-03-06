import React from 'react';

function Article1({tag, h2, p, img, tit, item}) {
    return <>
        <div className='article1'>
            <div className="inner">
                <div class="tagWrap">{tag}</div>
                <h2>{h2}</h2>
                <p className='subTit'>{p}</p>
                {img}
                <div className='infoBx'>
                    <div className='tit'>{tit}</div>
                    <div className='list'>
                        {item}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Article1;