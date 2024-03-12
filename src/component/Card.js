import React from "react";
function Card({card='card',keyword, h3, p, img}) {
    return(
        <div className={card}>
            <div className='imgWrap'>
                <img src={img} alt='img'/>
                <div class="badgeWrap">
                    <i className='badge kiz'></i>
                </div>
            </div>
            <div className="keywordWrap">
                <div className='keyword'>
                    {keyword}
                </div>
            </div>
            <h3>{h3}</h3>
            <p>{p}</p>
        </div>
    )
}
export default Card;