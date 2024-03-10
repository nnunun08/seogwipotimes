import React from 'react';
import Search from './Search';

function Header() {
    return <>
        <header className='header'>
            <div className="inner">
                <div className='left'>
                    <div className='hamburger'></div>
                    <div className='tit'>SEOGWIPO TIMES</div>
                </div>
                <Search />
            </div>

        </header>
    </>
}

export default Header;