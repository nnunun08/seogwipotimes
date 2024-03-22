import React from "react";
function ImgCap({img, cap, left}) {
    const style = {
        textAlign : left ? 'left' : null
    }
    return (
        <div className={`imgWrap`} style={style}>
            <img src={img} alt='img' />
            <div className='caption'>{cap}</div>
        </div>
    )
}
export default ImgCap;