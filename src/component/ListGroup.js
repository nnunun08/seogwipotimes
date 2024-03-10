import React from 'react';

function ListGroup ({num, tit, desc}) {
    return (<>
        <div className='listGroup'>
            <div className='listTit'>
                <span className='num'>{num}</span>
                <div className='tit'>{tit}</div>
            </div>
            <div className='listDesc'>{desc}</div>
        </div>
    </>)
}

export default ListGroup;