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
        </ul>
    ) 
}
export default Home;