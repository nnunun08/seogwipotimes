import React from "react";
import { Link } from 'react-router-dom';

function Home() {

    const ul = {
        padding: '40px 20px',
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto',
        marginTop: '60px',
        backgroundColor: '#f7f8f9'
    }
    const li = {
        fontFamily: 'Pretendard',
        fontSize: '16px',
        marginBottom: '20px'
    }
    return(
        <ul style={ul}>
            <li style={li}><Link to='/Page1'>서귀포에서 내 집 찾기 대작전</Link></li>
            <li style={li}><Link to='/Page2'>네가 ‘찐’ 노지 브랜드를 알아?</Link></li>
            <li style={li}><Link to='/Page3'>다시 태어났어, 월별 제주어 럭키 리추얼</Link></li>
            <li style={li}><Link to='/Page4'>체험은 역시 ‘현장빨’</Link></li>
            <li style={li}><Link to='/Page5'>한 템포 느리게, 보목마을</Link></li>
            <li style={li}><Link to='/Page6'>신비와 활기 사이, 신효ㆍ하효마을</Link></li>
            <li style={li}><Link to='/Page7'>꿈틀꿈틀 동력, 하례1리ㆍ하례2리마을</Link></li>
            <li style={li}><Link to='/Place1'>메뉴_서귀포의 숨은 소식과</Link></li>
            <li style={li}><Link to='/Place2'>메뉴_노지 이야기를 즐기니</Link></li>
            <li style={li}><Link to='/Place3'>메뉴_105개 마을에 두 발짝</Link></li>
            <li style={li}><Link to='/Cate1'>메뉴_ACTIVITY</Link></li>
            <li style={li}><Link to='/Cate2'>메뉴_HOW-TO</Link></li>
            <li style={li}><Link to='/Cate3'>메뉴_PEOPLE</Link></li>
            <li style={li}><Link to='/Cate4'>메뉴_BRAND</Link></li>
            <li style={li}><Link to='/Cate5'>메뉴_HISTORY</Link></li>
            <li style={li}><Link to='/Cate6'>메뉴_NEWS</Link></li>
            <li style={li}><Link to='/Cate7'>메뉴_MAP</Link></li>
            <li style={li}><Link to='/Cate8'>메뉴_SPACE</Link></li>
            <li style={li}><Link to='/Cate9'>메뉴_TRAVEL</Link></li>
        </ul>
    ) 
}
export default Home;