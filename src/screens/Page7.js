import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';
import ListGroup from '../component/ListGroup';
import ImgSlider from '../component/ImgSlider';

function Page7() {

    return <div>
        <Header />
        <Article1
            keyword = {[
                <Keyword keyword={'TRAVEL'}/>,
                <Keyword keyword={'ACTIVITY'}/>,
                <Keyword keyword={'HISTORY'}/>,
                <Keyword keyword={'HOW-TO'}/>,
                <Keyword keyword={'PEOPLE'}/>,
                <Keyword keyword={'BRAND'}/>,
                <Keyword keyword={'SPACE'}/>,
            ]}
            h2 = {`꿈틀꿈틀 동력, 하례1리ㆍ하례2리마을`}
            p = {`동서로 흐르는 두 물길 사이의 생태가 영예로워요. 그에 주민들의 한 손과 한 걸음이 쌓아 올린 흔적을 기분 좋게 따라가죠. `}
            img = {
                <>
                    <div className='keyImg'><img src='/img/img_28.jpg' alt="img" /></div>
                </>
            }
            dis = {'displayNone'}
        />

        <div className='listGroupWrap'>
            <div className='inner'>
                <ListGroup
                    num = {`1`}
                    tit = {`고살리숲길`}
                    desc = {`하례2리마을에 속하는, 왕복 약 2시간 여 걸리는 탐방로. 효돈천의 일부인 ‘내창’이 흐르는 원시적인 곶자왈. `}
                />
                <ListGroup
                    num = {`2`}
                    tit = {`하례내창`}
                    desc = {`실내외 공간에서 즐기는 제주산 식사와 불멍, 오름 산책 혹은 허브티와 함께하는 마음 읽기 등 100% 예약제. 하례내창에서의 경험은 지구별 어디에서도 유일무이. `}
                />
                <ListGroup
                    num = {`3`}
                    tit = {`하례감귤점빵협동조합`}
                    desc = {`제주전통빵인 상웨빵의 맛난 자존심! 100% 테이크아웃으로 전화 예약 권고. 오전과 오후 두 시간대에 빵이나 수제청 만들기 체험도 가능.`}
                />
                <div className='badgeLink'><a href="#" target='_blank'>하례감귤점빵협동조합 보러가기</a></div>
                <ListGroup
                    num = {`4`}
                    tit = {`라포르하례`}
                    desc = {`550평의 감귤밭 및 텃밭을 껴안은 2층집 내에 게스트하우스, 촬영 및 소모임 등을 위한 대관 공간에 이르기까지. 지역 청년의 작당 커뮤니티인 <브로컬리연구소>가 운영 중.`}
                />
                <div className='badgeLink'><a href="#" target='_blank'>라포르하례 보러가기</a></div>
                <ListGroup
                    num = {`5`}
                    tit = {`인디고트리`}
                    desc = {`패션 및 소품 숍의 기능을 함축한 아트 인큐베이팅 카페. 쌍둥이 돌집 아래 때론 콘서트장, 종종 워크숍 등의 형태로 엣지 있게 태어남. `}
                />
                <ListGroup
                    num = {`6`}
                    tit = {`쇠소깍 산물 관광농원`}
                    desc = {`패션 및 소품 숍의 기능을 함축한 아트 인큐베이팅 카페. 쌍둥이 돌집 아래 때론 콘서트장, 종종 워크숍 등의 형태로 엣지 있게 태어남. `}
                />
                <ListGroup
                    num = {`7`}
                    tit = {`망장포ㆍ망장포구`}
                    desc = {`옛 포구와 현 포구와의 비교 열전! 망장포에서 회한을 비워내고, 망장포구에서 하례리 아트페인팅을 배경으로 인증샷 찰칵.`}
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
                <img src='/img/img_post03.jpg' alt='img'/>
            </div>
        </div>

        <div className='contents3'>
            <div className='inner'>
                <h3>하례리의 가치 하나둘셋 </h3>
                <h4>마른 감성까지 촉촉, 고살리숲길 </h4>
                <p>피톤치드에 포획된 야생적인 원시림의 길을 걸어 볼까요? 남서교(선덕사 맞은편)에서 학림교에 이르는 편도 2.1km의 탐방로입니다. 바위에 기어이 뿌리를 내린 나무와 빗물의 흐름에 따라 조각된 돌, 빛을 향해 뻗어 나가는 가지의 몸부림 등 자연의 생명력과 그 공생 관계를 자연스럽게 배우게 해요. 지루함은 여기 사전엔 없습니다. 선녀라도 등장해 줘야 할 듯한 에메랄드빛 연못인 속괴와 장냉이도가 마른 감성마저 채워줄 테니까요. 이왕이면 둘 이상 가벼운 수다를 나누며 걷는 게 좋겠어요. 자연의 은혜 입고, 오후의 음료 한잔을 할 시간이에요. </p>
            </div>
        </div>

        <div className='reactSlick'>
            <div className='inner'>
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_07.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_07.jpg' alt='slideImg'/></div>
                    ]}
                />
            </div>
        </div>

        <div className='contents3'>
            <div className='inner'>
                <h4>{`<인디고트리>에서의 감각 샤워`}</h4>
                <p>드르륵- 슬라이딩 나무문을 열면 짧은 감탄사부터 나와요. 다락을 포함해 층고 높은 공간 자체가 창의적인 작품으로 다가오거든요. 1년여 사리 나오는 심응범 대표의 셀프 시공을 걸쳐 완성한 실내엔 숍과 카페 기능이 유기적으로 연결돼요. 해외 전역에서 공수한 인디고 컬러 주축의 인더스트리얼 패션 제품과 도예가의 작품 등을 구경하는 사이 주문한 음료가 나오곤 하죠. 공간 한켠은 대표나 외부 작가의 워크숍이나 작업실로 활용되어 클래스가 열리기도 해요. 공간이 사람을 만든다고 하죠? 이곳의 감각 샤워에 특별하면서도 근사해진 기분을 안은 채 바다로 나가 봅니다. 아, 이곳의 또 다른 안주인인 졸리와 트리에게 작별 인사하고요. </p>
                <div className='insta'>@indigoterie</div>
            </div>
        </div>

        <div className='reactSlick'>
            <div className='inner'>
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_07.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_07.jpg' alt='slideImg'/></div>
                    ]}
                />
            </div>
        </div>

        <div className='contents3'>
            <div className='inner'>
                <h4>{`망장포에서 만나는 나만의 바다 `}</h4>
                <p>역사적으로 포구는 물자가 왕래하는 삶의 통로가 되는 곳인데요. 망장포는 1930년대 제주 전통 포구의 원형을 21세기인 현재에도 관찰할 수 있는 귀한 현장 학습터죠. 좀 더 안쪽으로 들어가 거닐면, 운송 편의를 위한 돌계단과 닷줄을 댔던 볼라드(말뚝) 등을 발견하는 재미가 있어요. 배가 들어오는 입구에 서면 바람, 바다와 함께 혼연일체 하는 기회도 주어지죠. 강단 있는 소나무 숲 아래 비밀 기지와 같아 흐트러진 마음을 정리하기 좋을 거예요. 잠시 나를 읽는 시간을 허락해 주세요. 제주올레 5코스의 연결 지점이고, 서귀포 미래문화자산 2021-2호로 지정되었어요. </p>
            </div>
        </div>

        <div className='reactSlick'>
            <div className='inner'>
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_08.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_08.jpg' alt='slideImg'/></div>
                    ]}
                />
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

    </div>
}

export default Page7;