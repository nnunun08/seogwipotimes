import React from 'react';

function Recommend({tit, recoCard}) {
    return (
        <>
            <div className='recommend'>
            <div className='inner'>
                <div className='tit'>{tit}</div>
                {recoCard}
            </div>
        </div>
        </>
    ) 
}

export default Recommend;