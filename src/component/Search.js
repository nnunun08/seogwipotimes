import React from 'react';

function Search() {
    const click = () => {
        alert('search')
    }
    return <>
        <div className="search d-pc">
            <input type='text' placeholder='검색어를 입력하세요' />
            <button className='btn' onClick={click}>검색</button>    
        </div>
        <div className="search d-mobile">
            <button className='btn' onClick={click}>검색</button>    
        </div>
    </>
}

export default Search;