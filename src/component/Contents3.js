import React from 'react';

function Contents3({num, conTit, img, desc}) {
    return <>
        <div className='contents contents3'>
            <div className='inner'>
                <em>{num}</em>
                <div className='conTit'>{conTit}</div>
                <div class="imgWrap">
                    <img src={img} alt=''/>
                </div>
                <p className='desc'>{desc}</p>
            </div>
        </div>
    </>
}

export default Contents3;