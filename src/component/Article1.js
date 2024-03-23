import React from 'react';

function Article1({keyword, h2, p, img, tit, item, dis, inner='inner', push, style}) {
    return <>
        <div className='article1' style={style}>
            <div className={inner}>
                <div className="keyword">{keyword}</div>
                <h2>{h2}</h2>
                <p className='subTit'>{p}</p>
                {img}
                {push}
                <div className={`infoBx ${dis}`}>
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