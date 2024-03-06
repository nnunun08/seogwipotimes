import React from 'react';

function Contents({
    color, img1, img2, caption, dog, kiz, obs, contTit, location,
    desc, checkList, stayBtn, url
    }) {
    return <>
        <div className='contents'>
            <div className='inner'>
                <div class="imgWrap">
                    <img src={img1} />
                    <div className='caption'>{caption}</div>
                </div>
                <div class="imgWrap">
                    <img src={img2} />
                    <div className='caption'>{caption}</div>
                </div>
                <div className='tagWrap'>
                    <div className={`tag ${dog}`}>반려 (대형견X)</div>
                    <div className={`tag ${kiz}`}>키즈</div>
                    <div className={`tag ${obs}`}>장애</div>
                </div>
                <div className='conTit'>{contTit}</div>
                <div className='location'>{location}</div>
                <p className='desc'>{desc}</p>
                <div className='checkList'>
                    <div className='tit'>Check list</div>
                    <div className="listWrap">
                        {checkList}
                    </div>
                </div>
                <div className={`stayLink ${color}`}>
                    <a href={url} target='_blank'>
                        <div className='stayBtn'>{stayBtn}</div>
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default Contents;