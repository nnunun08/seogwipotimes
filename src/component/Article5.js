
import React from 'react';
import ImgSlider from './ImgSlider';

function Article5({h3, tit, p, img}) {
    return (<>
        <div className='article5'>
            <div className='inner'>
                {h3}
                <div className="titWrap">
                    <div className='tit'>{tit}</div>
                    <p>{p} </p>
                </div>
                <div className='reactSlick'>{img}</div>
            </div>
        </div>
    </>)
}

export default Article5;
