import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';
import ListGroup from '../component/ListGroup';
import ImgSlider from '../component/ImgSlider';
import Contents3 from '../component/Contents3';

function Page16() {

    const style1 = {
        marginTop : '64px',
        marginBottom : '0'
    }
    const style2 = {
        marginBottom : '0'
    }
    const style3 = {
        marginTop : '0',
        marginBottom : '0'
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
            h2 = {`흐려도 분위기, 신례1리ㆍ신례2리마을`}
            img = {
                <>
                    <div className='keyImg' style={style1}><img src='/img/img_84.jpg' alt="img" /></div>
                </>
            }
            dis = {'displayNone'}
            style={style2}
        />

        <div className='listGroupWrap' style={style3}>
            <div className='inner'>
                <ListGroup
                    num = {`1`}
                    tit = {`이승악`}
                    desc = {`‘이승이오름’이라고도 불림. 정상에선 한라산의 능선, 정상을 비껴 둘레길을 걸으면 비경의 삼나무숲, 편백나무숲이 맞이. 둘레 숲길은 비오는 날 안개 필 때면 더욱 영화적인 순간. `}
                />
                <ListGroup
                    num = {`2`}
                    tit = {`휴애리 자연생활공원`}
                    desc = {`겨울엔 동백과 매화, 봄엔 유채, 여름엔 수국, 가을엔 핑크뮬리로, 계절별 옷을 바꿔 입는 꽃길 보장. 한라산이 보우하사 제주에서만 남길 수 있는 인생 사진의 봇물.`}
                />
                <ListGroup
                    num = {`3`}
                    tit = {`신례천`}
                    desc = {`하례리에서 발생해 신례리에서 바다로 굽이굽이 흘러가는 하천. 전 구간이 천연보호구역. 덕분에 마을은 우수한 생태자원지로서 사람도, 동식물도 살기 좋은 곳으로 박수 갈채. `}
                />
                <ListGroup
                    num = {`4`}
                    tit = {`명랑해녀홈스테이+아트센터`}
                    desc = {`세계가 인정한, 제주 스스로 자부심 깊은 해녀문화를 이어나가는 민박 겸 아트센터. 해녀인 호스트는 물질도 하고 관련 클래스를 운영하는 등 명랑 역사 지속 중. `}
                />
                <ListGroup
                    num = {`5`}
                    tit = {`네커리 폭낭+공동 수도`}
                    desc = {`마을 중심에 서서 지주와 같은 존재로 통하는 팽나무. 바로 맞은편 철재 파이프로 남은 공동 수도의 흔적도 찾아 보기. 서귀포미래문화자산 2021-1호로 지정. `}
                />
                <ListGroup
                    num = {`6`}
                    tit = {`시트러스`}
                    desc = {`140여 농가에서 버려지는 감귤을 모아 프리미엄 술로 창조하는 곳. 술이 익어가는 공장도 기웃거리고 4종 감귤발효주도 캬- 테스트도 하고. `}
                />
                <ListGroup
                    num = {`7`}
                    tit = {`공천포`}
                    desc = {`밀물과 썰물의 마찰에 따른 검은 몽돌이 자연 ASMR의 주인공. 극락의 검은 모래 찜질이란 명성은 사라졌으나 얼음장 용천수는 여전. `}
                />
                <ListGroup
                    num = {`8`}
                    tit = {`카페숑`}
                    desc = {`매일 한적한 공천포 바다를 전망으로 평화를 읊는 공간의 지존. 빈티지한 나무 문을 열면 아기자기한 그림 속으로 순간 이동하는 느낌. 어쩌면 인생 커피. `}
                />
                <ListGroup
                    num = {`9`}
                    tit = {`제주올레 5코스`}
                    desc = {`남원포구에서 쇠소깍 다리까지 이어지는 초보자에게도 안성맞춤인 코스. 이곳 해안가를 기점으로 하례리와 효돈동까지 이어지는 미니 트레킹 가능. `}
                />
            </div>
        </div>


        <div className='reactSlick'>
            <div className='inner'>
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_32.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_32.jpg' alt='slideImg'/></div>,
                    ]}
                />
            </div>
        </div>

        <div className='postImg'>
            <div className='inner'>
                <img src='/img/img_post05.jpg' alt='img'/>
            </div>
        </div>

        <div className='contents3'>
            <div className='inner'>
                <h3 className='blue'>신례1리ㆍ신례2리마을의 가치 하나둘셋 </h3>
                <h4>{`<네커리 폭낭>과 다정한 마을 산책 `}</h4>
                <p>{`자연을 만나 가끔 입이 쩍, 벌어지는 순간이 있죠. 마을 중심에서 하늘을 향해 날개를 편 <네커리 폭낭>도 그러해요. 네커리는 ‘네거리’, 폭낭은 ‘팽나무’를 일컬어요. 두 그루는 묵묵히 시대를 건너 마을의 그늘이자 이정표로, 때론 쉼이 되고 종종 마을의 수호신이 되기도 했어요. 동행자에게 아는 척 할만한 마을 정보 하나 드릴게요. 이곳 신례1리마을은 다른 마을에 비해 대문이 없는 대신 올레 길이가 길었다고 해요. 현재 대문이 있더라도 긴 올레 길이는 여전히 남아 있어요. 깊은 나만의 비밀 장소처럼 들어앉은 집. 마을의 품격은 이런 것에서도 나오는 모양입니다. 이제 마을끼리 합심한 현장으로 가볼까요? `}</p>
            </div>
        </div>

        <div className='reactSlick'>
            <div className='inner'>
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_33.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_33.jpg' alt='slideImg'/></div>,
                    ]}
                />
            </div>
        </div>

        <div className='contents3'>
            <div className='inner'>
                <h4>{`잘 익은 마음의 맛 한 잔, <시트러스>`}</h4>
                <p>{`매년 햇빛을 잘 먹은 달달한 감귤을 전국의 안방까지 배달해온 신례리인데요. 너무 크거나 작거나 못생기거나, 상품성이 떨어지는 감귤은 대체 어디로 갈까요? 이를 안쓰럽게 여긴 옛 신례마을 이장인 김공률 대표의 리더십과 신례리 140여 가구의 마음이 합심해 제주 감귤발효주란 가치가 창조됩니다. 현재 4종으로 선보이는 <시트러스> 술은 진로 주류연구에 40여년 몸 담아온 이용익 공장장의 기술이 합세해 까다로운 애주가의 입맛까지 사로잡았어요. 직접 양조장에 방문하면 감귤향이 코로, 입으로 전해지면서 그들의 애틋한 마음마저 건너옵니다. `}</p>
            </div>
        </div>

        <div className='reactSlick'>
            <div className='inner'>
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_34.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_34.jpg' alt='slideImg'/></div>,
                    ]}
                />
            </div>
        </div>

        <div className='contents3'>
            <div className='inner'>
                <h4>{`흐려도 좋아, <공천포> 산책 `}</h4>
                <p>노랗게 잘 익은 마을의 마음을 간직한 채 바다로 나가보죠. 공천포는 현무암이 부서진 모래와 검은 몽돌로 일궈진, 참으로 제주답고 무해한 바다예요. 이를 바라보며 길게 늘어선 카페나 식당 대부분 유행에 기대거나 뒤바뀌는 급물살 같지 않고, 묵묵히 자기 정체성을 지니며 이 마을을, 저 바다를 사랑해 정착해 있죠. 그 덕분인지, 날씨가 맑아야만 여행이 좋을 거란 고정관념을 무너뜨려요. 비바람이 몰아치든 날씨가 짓궂든 지금 서귀포에 존재하는 이 순간을 소중히 여기고 싶다면, 나긋나긋 공천포를 산책하고 맘에 드는 공간에 쓱 몸을 밀어 넣어봐요.</p>
            </div>
        </div>

        <div className='reactSlick'>
            <div className='inner'>
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_35.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_35.jpg' alt='slideImg'/></div>
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

export default Page16;