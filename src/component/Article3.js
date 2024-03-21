
import React from 'react';

function Article3({em, tit, img, p, location, url , btn}) {
    return (<>
        <div className='article3'>
            <div className='inner'>
                <div className='em'>{em}</div>
                <div className='tit'>{tit}</div>
                <div className='imgWrap'>
                    <img src={img} alt="img"/>
                </div>
                <p>{p}</p>
                <div className='location'>{location}</div>

                <div className="orderOnline"><a href={url} target="_blank"><div className="orderBtn">{btn}</div></a></div>
            </div>
        </div>
    </>)
}

export default Article3;
