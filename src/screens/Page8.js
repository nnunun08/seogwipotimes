import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Article3 from '../component/Article3';
import Contents from '../component/Contents';
import CheckList from '../component/CheckList';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';

function Page8() {
    return <div>
        <Header />
        <Article1
            keyword = {[
                <Keyword keyword={'TRAVEL'}/>,
                <Keyword keyword={'PEOPLE'}/>,
                <Keyword keyword={'BRAND'}/>,
                <Keyword keyword={'SPACE'}/>,
            ]}
            h2 = {'그들이 서귀포를 택할 수밖에'}
            p = {
                <>
                    영화와 드라마, 그림, 음악 등 황송하게도 예술의 소재로 간택된, 서귀포의 참 쓸모. 
                </>
            }
            dis = {'displayNone'}
        />
        
        <div className='article4'>
            <div className="inner">
                <h3>AI도 못 만드는, 서귀포의 영상미</h3>
                <p>{`자, 서귀포를 한 번 뜯어 볼게요. 오름과 곶자왈, 계곡, 폭포, 포구, 해안, 한라산에 이르기까지 야생의 기운이 넘쳐 흐르죠. 곶자왈이나 오름은 풀숲이 우거진 가운데 야자수와 소나무 등 고른 종이 분포하는 식생 지대이고, 거기서 고개를 돌리면 금세 섬들과 바다가 드리웁니다. 그런가 하면 세련미의 정수를 머금은 카페와 숙소부터 정다운 분위기를 폴폴 풍기는 전통 시장, 원도심 등을 두루 포진하는 게 바로 서귀포죠. 덕분에 로케이션 헌팅의 물망에 자주 올랐어요. 이는 장르를 초월하며 촬영 장소로 각광받는다는 의미인 동시에 미처 발견하지 못한 숨은 장소가 더 있다는 뜻이기도 해요.`}</p>
                <div className='imgWrap'><img src='/img/img_29.jpg' alt='img'/></div>
                <p>{`가장 최근 제주를 배경으로 한 JTBC 드라마 <웰컴투 삼달리>는 블로그나 SNS상에서 ‘삼달리 촬영지 ○○곳 투어’와 같은 후발 자체 콘텐츠를 심심치 않게 배출해 냈죠. 그중 주인공의 투 샷이 나오는 망장포가 있는데요. 서귀포미래문화자산으로도 선정된 이곳은 제주 전통 포구의 원형을 그대로 간직한 비밀 장소와 같아요. 아는 사람만 알던 이곳이 이젠 드라마가 남긴 최대 인기 촬영지가 되었죠. `}</p>
                <div className='imgWrap'><img src='/img/img_30.jpg' alt='img'/></div>
                <p>{`혹 넷플릭스 드라마 <수리남>에서 황정민의 별장을 기억하나요? 대부분 드라마의 해외 로케이션 장소였던 도미니카공화국의 어딘가라고 여겼는데요. 사실 서귀포 KAL 호텔 옆에 있는 카페 <허니문하우스>입니다. 출연진의 제작기에서 배우 황정민이 서귀포에 이런 장소가 있는지 몰랐다고 말하면서 좀 더 관심을 끌어모았죠. 집으로 말할 것 같으면 tvN 드라마 <우리들의 블루스>를 빼놓을 수 없을 거예요. 푸른 초원에 안긴, 그야말로 그림 같은 집 한 채가 화면을 장악했으니까요. 집수리와 독립의 의미가 콜라보된 새집은 서귀포 중산간 지역에 터를 잡은 걸로 알려져 있어요. `}</p>
                <div className='imgWrap'><img src='/img/img_31.jpg' alt='img'/></div>
                <p>{`밤이면 한껏 다채로움을 뿜어내는 새연교나 정취 가득한 노천카페 <로즈마린>를 무대로, 등장인물의 제주 출장 에피소드가 펼쳐진 <이상한 변호사 우영우>도 서귀포를 택합니다. 섬에 대한 깊은 애정을 일관되게 밝혔던 박훈정 감독의 영화 <마녀 2>에는 세계적인 건축가 안도 다다오가 설계한 아트 피스인 <민트 레스토랑>이, 영화 <낙원의 밤>에는 법환포구와 범섬, 바다 풍경이 비중 있게 나오죠. 여담으로 박훈정 감독은 청정 제주 이미지 홍보에 기여한 공로로 2023년 명예도민에 선정되기도 했답니다.`}</p>
                <div className='imgWrap'><img src='/img/img_32.jpg' alt='img'/></div>
            </div>
        </div>

        <div className='article4'>
            <div className="inner">
                <h3>미술, 음악, 문학도 뒤질 순 없지</h3>
                <p>{`꽤 시간을 거슬러 서귀포 바다와 섶섬에 반해 <서귀포의 환상>, <섶섬이 보이는 풍경> 등을 남긴 화가 이중섭을 차치하더라도, 제주가 여러 아티스트의 영감을 주고 있다는 것은 익히 들어왔을 텐데요. 화가 김보희는 2022년 제주현대미술관의 <the Days>전에 이어 2023년 서울 한남동 갤러리바톤에서 <Towards> 전으로 그림 인생 50년의 여정 중 2003년 제주 이주 후 작품을 비중 있게 소개했어요. 바다와 정원, 꽃과 나무, 열매와 씨앗, 동식물과 집 주변의 산책길 등 일상적이고 사적인 섬 풍경을 비롯해 중문 거리, 저녁 무렵 산방산 주변을 산책하면서 본 돌담과 달 등 서귀포에서 포착한 찰나를 화폭에 옮겼죠. `}</p>
                <div className='imgWrap'><img src='/img/img_33.jpg' alt='img'/></div>
                <p>{`음악가이자 화학자, 그리고 귤과 레몬 농사를 짓는 농부라고 하면 떠오를 인물이 있죠? 제주살이 10년을 넘긴 루시드폴입니다. 꾸준히 앨범을 발표해 온 그는 2021년 제주에서 채집한 소리를 모아 오디오 콘텐츠 <루시드폴의 사운드 제주>를 음악 플랫폼 플로(FLO)에서 공개했어요. ‘오일장에서 마주친 정겨운 소리’, ‘푸른 바닷속 힐링 사운드’, ‘숲을 걸으면 만날 수 있는 소리’ 등 9개 에피소드를 청취할 수 있죠. 재일제주인 피아니스트 양방언은 ‘프린스 오브 제주(Prince of Jeju)’, ‘아시안 뷰티(Asian Beauty)’ 등의 곡을 썼는데요. 2023년에는 제주-오사카 하늘길 100주년을 기념해 2023년 11월 기념 콘서트를 열었습니다. 피아니스트 이루마 역시 같은 해 <서귀포예술의전당>에서 ‘화이트데이 with 이루마’ 공연을 가졌죠. 문학가에게 영감을 준 장소는 섬 속의 섬이 주목받았습니다. 소설가 김금희는 서귀포 가파도에 다녀간 이후 <복자에게>를 집필했고, 영국 부커상 후보에 올라 화제를 모은 소설가 박상영 역시 가파도 레시던시 거주기를 담은 에세이 <순도 100퍼센트의 휴식>을 펴냈죠. `}</p>
                <div className='imgWrap'><img src='/img/img_34.jpg' alt='img'/></div>
                <p>
                    <>
                    이쯤 되면 작품에 서귀포의 면면을 담는 그들은 서귀포의 무엇에 마음이 동했을까를 생각하지 않을 수 없는데요. 그들이 지난 인터뷰에서 했던 이야기는 서귀포를 담아내는 예술 작업에 다가서는데 발판이 될 수 있을 듯해요. 
                    <br/><br/>
                    “초록 그림이 많아진 것은 자연스러운 삶의 반영이다. 그 싱싱한 초록 속에 내가 살고 있다는 증거다. 큼지막한 초록잎을 시원하게 펼쳐 그릴 때면, 작은 체구의 나도 활짝 몸을 펴는 느낌이다.” - 김보희 그림 산문집 &#60;평온한 날&#62; 중 
                    <br/><br/>
                    “이중섭미술관을 갔는데 바다가 보이더라고요. ‘아, 저기서 살고 싶다’는 생각이 들었어요.”<br/>
                    - 루시드폴<br/><br/>
                    </>
                </p>
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

export default Page8;