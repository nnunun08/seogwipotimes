import React, {useState} from 'react';
import Search from './Search';

function Header() {
    // side 메뉴 on/off
    const [status, setStatus] = useState('')
    const sideOpen = () => {
        setStatus('ac')
    }
    const sideClose = (e) => {
        if(e.target.className === 'offcanvas ac') {
            setStatus('')
        } else if(e.target.className === 'close') {
            setStatus('')
        }
    }

    // 모바일 검색창 on/off
    const [search, setSearch] = useState('')
    const searchTrigger = () => {
        search === '' ? setSearch('ac') : setSearch('')
    }
    return <>
        <header className='header'>
            <div className="inner">
                <div className='left'>
                    <div className='hamburger' onClick={sideOpen}></div>
                    <div className='tit'>SEOGWIPO TIMES</div>
                </div>
                {/* <Search /> */}
                <div className={`search d-pc ${search}`}>
                    <input type='text' placeholder='검색어를 입력하세요' />
                    <button className='btn'>검색</button>    
                </div>
                <div className="search d-mobile">
                    <button className='btn' onClick={searchTrigger}>검색</button>    
                </div>
            </div>
        </header>
        <div className={`offcanvas ${status}`} onClick={sideClose}>
            <div className='sideMenu'>
                <div className='close' onClick={sideClose}>X</div>
                <div className='tit'>
                    SEOGWIPO<br />
                    TIMES
                </div>
                <div className='menuList'>
                    <div className='menu ac'>
                        <h4>서귀포의 숨은 소식과 </h4>
                        <p>서귀포 문화도시의 지식 충전하고 광명 찾기</p>
                    </div>
                    <div className='menu'>
                        <h4>노지 이야기를 즐기니 </h4>
                        <p>서귀포에서 벌어지는 노지 라이프 실시간 중계</p>
                    </div>
                    <div className='menu'>
                        <h4>105개 마을에 두 발짝 </h4>
                        <p>너도 나도 우리가 간다, 노지 마을 도장 깨는 법 </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`dim ${search}`} onClick={searchTrigger}></div>
    </>
}

export default Header;