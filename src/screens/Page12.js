import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';
import ListGroup from '../component/ListGroup';
import ImgSlider from '../component/ImgSlider';
import Article5 from '../component/Article5';

function Page12() {
    const style1 = {
        marginTop : '64px'
    }
    return <div>
        <Header />
        <Article1
            keyword = {[
                <Keyword keyword={'TRAVEL'}/>,
                <Keyword keyword={'ACTIVITY'}/>,
                <Keyword keyword={'HISTORY'}/>,
                <Keyword keyword={'HOW-TO'}/>,
                <Keyword keyword={'PEOPLE'}/>,
                <Keyword keyword={'SPACE'}/>,
            ]}
            h2 = {`걸음마다 짭조름하게, 송산서귀마을`}
            p = {`바다에 포복 자세를 한 채 서귀포의 짜디짠 역사가 저민 마을. 서귀포의 푸른 밤은 이곳에서 잠들지 않아요. `}
            img = {
                <>
                    <div className='keyImg' style={style1}><img src='/img/img_57.jpg' alt="img" /></div>
                </>
            }
            dis = {'displayNone'}
        />
        
        <div className='listGroupWrap'>
            <div className='inner'>
                <ListGroup
                    num = {`1`}
                    tit = {`새섬ㆍ문섬 `}
                    desc = {`나무 데크로 된 새연교를 지나 새섬 한 바퀴. 원시적인 새섬 공원과 범섬, 서귀포항의 파노라마에 마음이 씰룩씰룩. 해질녘쯤 들어가 야간 산책 추천. `}
                />
                <ListGroup
                    num = {`2`}
                    tit = {`구덕 게스트하우스`}
                    desc = {`제주 게스트하우스의 시조새. 루프탑 뷰는 이곳에 머문 자에게만 허락된 선물. 특히 일찍 일어난 새는 일출의 영광에 감동.`}
                />
                <ListGroup
                    num = {`3`}
                    tit = {`새서울 두루치기`}
                    desc = {`세상 물정 모르는 7천원 두루치기가 존재하는 전문점. 두툼한 제주산 돼지란 사실에 더욱 감탄. 분위기 내고 싶다면 바로 옆 시봉카페에서 칵테일 한 잔. `}
                />
                <ListGroup
                    num = {`4`}
                    tit = {`자구리공원`}
                    desc = {`이중섭 화백이 가족과 함께 게를 잡던 추억이 산책로와 문화 예술 공원 형태로. 주상절리와 담수욕장(⑥)이란 자연도 예술에 합세. `}
                />
                <ListGroup
                    num = {`5`}
                    tit = {`칠십리음식특화거리 `}
                    desc = {`서귀포의 밤을 좀 더 길게 보내고 싶다면, 제주 로컬 음식부터 세계 음식까지 고르는 맛. 식후 자구리공원의 밤산책 추가. `}
                />
                <ListGroup
                    num = {`6`}
                    tit = {`소남머리`}
                    desc = {`소의 머리를 닮기도, 소나무가 많은 동산이기도. 오션뷰 계단을 조금 내려가면 비밀의 용천수 담수욕장이 환영 중. `}
                />
                <ListGroup
                    num = {`7`}
                    tit = {`정방폭포`}
                    desc = {`23m 높이에서 바다로 고속 질주하는 폭포수의 서라운드 사운드부터 성큼성큼 바위 트레킹까지, 참으로 야생적이고도 신비한 서귀포의 본좌. `}
                />
                <ListGroup
                    num = {`8`}
                    tit = {`소정방폭포 `}
                    desc = {`정방폭포처럼 바다로 떨어지는 7m 높이의 잔 가닥 폭포. 폭포를 등지고 바라보는 바다의 동력과 주변의 숨은 주상절리가 일품. 근방 전망대 겸 북 카페 <소라의 성>도 추천.`}
                />
                <ListGroup
                    num = {`9`}
                    tit = {`허니문하우스와 인근 산책`}
                    desc = {`1980년대 신혼부부의 리조트로 각광받던 곳이 달콤한 바다를 조망하는 지중해풍 카페로 지속 중. 제주 올레 6코스의 하이라이트로 통함. `}
                    etc = {
                        <>
                            <div className='sub'>*허니문하우스는 토평마을에 속하나 보목마을과의 길목으로, 동선상 포함합니다. </div>
                        </>
                    }
                />
            </div>
        </div>

        <div className='reactSlick'>
            <div className='inner'>
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_01.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_01.jpg' alt='slideImg'/></div>
                    ]}
                />
            </div>
        </div>

        <div className='postImg'>
            <div className='inner'>
                <img src='/img/img_post04.jpg' alt='img'/>
            </div>
        </div>
        
        <Article5 
            h3 = {<div className='h3Tit'>송산서귀마을의 가치 하나둘셋</div>}
            tit = {`서복공원 끼고 정방폭포로 하이킥`}
            p = {`마른 풀잎에조차 소금기가 밴 듯한 마을에서 단연 손꼽는 곳은 정방폭포일 텐데요. 폭포 바로 옆 주차장에서 진입할 수도 있지만, 이번엔 그 절벽 위에 자리한 서복공원을 통해 들어가는 건 어떨까요? 서귀포란 이름의 태생과 정방폭포 역사의 근원을 찾아가는 학습터가 되죠. 더욱 가치 있는 건 샛노란 담장 안 소나무 숲 아래 모셔진 제주 4ㆍ3의 위령 공간이에요. 당시 서귀리였던 이곳 정방폭포와 소남머리 사이 해안 절벽은 그 희생자의 혼이 담기기도 한 곳이죠. 이곳에서 겸허하게 걸어 마주한 정방폭포는 더욱 묘하고 신비롭게 다가와요. 콸콸 쏟아지는 폭포수처럼 그 역사를 잊지 않겠다는 강한 마음을 다져 봐요.`}
            img = {
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_29.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_29.jpg' alt='slideImg'/></div>,
                    ]}
                />
            }
        />
        
        <Article5 
            tit = {`허니 허니해, <허니문하우스>와 인근 올레길 `}
            p = {`이국적이란 평을 자주 들어온 서귀포에서도 해외로 순간 이동한 듯한 첫인상은 이곳만한 게 없을 거예요. 야자수와 소나무가 리듬을 놓는 긴 진입로를 영화 속 장면처럼 걸어봅니다. 부드럽게 선형을 이루는 붉은 기와의 하얀 집채와 인사할 때쯤 나무 사이로 반짝이는 에메랄드빛 바다가 흥을 돋우죠. 드디어 장막이 걷힌 카페 <허니문하우스>의 정원은 그 모두를 주머니 속에 소유하고 싶다는 강한 욕구를 불러일으켜요. 이곳 입구로부터 소정방폭포로 깊숙이 내려가거나 정원 너머 겨믄여 해안으로 좀 더 향하는 등 제주 올레 6코스를 맛보는 가지치기 산책은 열려 있어요. `}
            img = {
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_30.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_30.jpg' alt='slideImg'/></div>,
                    ]}
                />
            }
        />

        <Article5 
            tit = {`당찬 물살처럼 자구리공원 찍고, 새섬 돌고`}
            p = {
                <>
                    달콤한 기분을 안은 채 오늘의 해와 안녕하기 전, 서귀포 원도심으로 향해요. 이중섭 화백이 생애 가장 행복했고, ‘동양의 나폴리’란 별칭이 허투루가 아니란 걸 알게 할 현장이에요. 해안가 앞 자구리 공원을 지나 제주 전통배 ‘테우’를 본떠 만든 새연교를 건너 새섬을 물결처럼 유랑해요. 일찍 이곳으로 진격했다면, 서귀포의 문화 예술 산책 코스인 ‘작가의 산책길(유토피아로, 총 4.9km)’로 발걸음을 이어가도 좋아요. 이중섭 화백의 거주지와 미술관, 서예의 진가를 알 수 있는 소양 기념관까지 연결되죠. 그 반대로 <a href='http://songsan-culturetrack.com' target='_blank'>송산동 컬처트랙 오디오 가이드</a>와 함께 보목마을로 맥을 잇는 트레킹도 좋습니다. 어느덧 새연교의 불빛이 아롱거리고, 좀 출출해진 감입니다. 칠십리음식특화거리에서 저녁 메뉴 고르는 심도 있는 고민에 빠져 보죠. 
                </>
            }
            img = {
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_31.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_31.jpg' alt='slideImg'/></div>
                    ]}
                />
            }
        />


        <Recommend
            tit={<>이 콘텐츠를 좋아하면,<br/>이것도 좋아해요.</>}
            recoCard={[
                <RecoCard 
                    img = {'/img/img_rec_01.jpg'}
                    keyword = {[
                        <Keyword keyword={'NEWS'}/>,
                        <Keyword keyword={'HOW-TO'}/>,
                        <Keyword keyword={'PEOPLE'}/>,
                        <Keyword keyword={'BRAND'}/>,
                        <Keyword keyword={'SPACE'}/>,
                    ]}
                    conTit = {'서귀포에서 내 집 찾기 대작전'}
                    desc = {<>세상에서 가장 편한 건 남의 집이 될 수 있어요.<br />용도별, 취향별 내 집 삼아 삼만리. </>}
                />,
                <RecoCard 
                    img = {'/img/img_rec_02.jpg'}
                    keyword = {[
                        <Keyword keyword={'NEWS'}/>,
                    ]}
                    conTit = {'서귀포에서 내 집 찾기 대작전'}
                    desc = {<>세상에서 가장 편한 건 남의 집이 될 수 있어요.<br />용도별, 취향별 내 집 삼아 삼만리. </>}
                />
            ]}
        />

    </div>
}

export default Page12;