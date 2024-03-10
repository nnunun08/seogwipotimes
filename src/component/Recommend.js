import React from 'react';

function Recommend({tit, recoCard}) {
    return (
        <>
            <div className='recommend'>
            <div className='inner'>
                <div className='tit'>{tit}</div>
                <div className='cardWrap'>{recoCard}</div>
            </div>
        </div>
        </>
    ) 
}

export default Recommend;