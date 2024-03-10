import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';

function Page3() {

    const imgMargin = {
        margin: '0',
        marginTop: '-48px',
    }
  
    return (
        <>
            <Header />
            <Article1
                keyword = {[<Keyword keyword={'HOW-TO'}/>,]}
                h2 = {'다시 태어났어, 월별 제주어 럭키 리추얼'}
                p = {'기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을.'}
                img = {
                    <>
                        <div className='keyImg' style={imgMargin}><img src='/img/img_14.jpg' alt="img" /></div>
                    </>
                }
                tit = {'서귀포 체험 끝판왕 사용법'}
                item = {
                    <>
                        <div className='item'>
                            <p>아무리 바빠도 내 몸과 마음은 지키는 시대. 제주어 일력과 함께 ‘내가 풍요로워지는 의식’인 리추얼ritual을 해보는 건 어떨까요? 매월, 3개씩, 행운도 건너와요. </p>
                        </div>
                        <div className='item'>
                            <p>좋은 기분이 마음에 걸어오는 제주어 문장을 소리내어 읽어 보세요. 잊지 말아요. 오늘은 당신에게 주어진 새로운 하루라는 걸.</p>
                        </div>
                        <div className='item'>
                            <p>{`<2024 날마다 제주어> 일력에는 서귀포 시민의 그림과 제주어 문장이 찰떡궁합을 이루고 있어요. 그 소중한 마음과 정성을 떠올리며 함께 해보아요.`}</p>
                        </div>
                    </>
                }
            />
            
            <div className='inner380'>
            <div className='inner'>
                <img className='fullImg' src='/img/img_jejuLangCon.jpg' alt='imgJejuLang' />
            </div>
            </div>
            <Recommend
                tit={<>이 콘텐츠를 좋아하면,<br/>이것도 좋아해요.</>}
                recoCard={[
                    <RecoCard 
                        img = {'/img/img_rec_01.jpg'}
                        keyword = {[
                            <Keyword keyword={'NEWS'}/>,
                            <Keyword keyword={'HOW-TO'}/>,
                            <Keyword keyword={'PEOPLE'}/>,
                        ]}
                        conTit = {'서귀포에서 내 집 찾기 대작전'}
                        desc = {<>세상에서 가장 편한 건 남의 집이 될 수 있어요.<br />용도별, 취향별 내 집 삼아 삼만리. </>}
                    />,
                    <RecoCard 
                        img = {'/img/img_rec_02.jpg'}
                        keyword = {[
                            <Keyword keyword={'NEWS'}/>,
                            <Keyword keyword={'HOW-TO'}/>,
                            <Keyword keyword={'PEOPLE'}/>,
                        ]}
                        conTit = {'서귀포에서 내 집 찾기 대작전'}
                        desc = {<>세상에서 가장 편한 건 남의 집이 될 수 있어요.<br />용도별, 취향별 내 집 삼아 삼만리. </>}
                    />
                ]}
            />

        </>
    );
}

export default Page3;
