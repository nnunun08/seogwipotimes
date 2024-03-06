import React from 'react';
import Contents from './Contents'

function Article2({color, tit, desc}) {
    return <>
        <div className={`article2 ${color}`}>
            <div className="inner">
                <div class="titWrap">
                    <h3>{tit}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    </>
}

export default Article2;