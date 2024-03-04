import React from 'react';

function Article1() {
    return <>
        <div className='article1'>
            <div className="inner">
                <div class="tagWrap">
                    <div className='tag purple'>TRAVEL</div>
                    <div className='tag pink'>ACTIVITY</div>
                </div>
                <h2>서귀포에서 내 집 찾기 대작전</h2>
                <p>
                세상에서 가장 편한 건 남의 집이 될 수 있어요.<br/>
                용도별, 취향별 내 집 삼아 삼만리.
                </p>

                <div className='keyImg'><img src='/img/img_01.jpg' alt="img" /></div>

                <div className='infoBx'>
                    <div className='tit'>
                    손님, 어떤 용도로 집을 찾으시나요?
                    </div>
                    <div className='list'>
                        <div className='item'>
                            <h3>노마드족을 위한 워케이션</h3>
                            <p>서귀포에 터를 잡고, 일과 휴식 사이의 균형을 맞춰 보세요. 도시 느낌 혹은 시골 감성, 내 취향에 더 맞는 곳은?</p>
                        </div>
                        <div className='item'>
                            <h3>몸과 마음을 토닥토닥, 웰니스</h3>
                            <p>그간 미루었던 나 자신 돌보기와 내면의 소리를 듣는 방법을 체험해요. 리조트냐 절이냐, 그것이 문제로다.</p>
                        </div>
                        <div className='item'>
                            <h3>숲속으로 로그인 캠핑</h3>
                            <p>나무 사이에서 잠들고 눈뜨고 걷는 자연 휴양림 캠핑 속으로. 한결 맑아진 머리와 밝아진 마음은 피톤치드의 효과예요. 단, 광클의 능력을 발휘해야 해요.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Article1;