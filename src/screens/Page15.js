import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';
import ConTit from '../component/ConTit';
import Desc from '../component/Desc';
import ImgCap from '../component/ImgCap';
import { Link } from 'react-router-dom';

function Page15() {

    const person1 = <><b className='red'>부경철 </b></>
    const person2 = <><b className='blue'>서미정 </b></>

    return <div>
        <Header />
        <Article1
            keyword = {[
                <Keyword keyword={'TRAVEL'}/>,
                <Keyword keyword={'HISTORY'}/>,
                <Keyword keyword={'PEOPLE'}/>,
                <Keyword keyword={'BRAND'}/>,
                <Keyword keyword={'SPACE'}/>,
            ]}
            h2 = {'대정에서 온 남자, 성산에서 온 여자 part2. 우리 마을로 들어와, ‘드루와’!'}
            p = {
                <>
                   우리 마을의 매력을 뽐내다 보면 끝이 없죠. 그나저나 서로 언제쯤 다시 만날 수 있으려나…
                </>
            }
            tit = {'서귀포의 끝과 끝 마을 박빙'}
            push = {
                <div className='flexColumn20 pushContents top'>
                    <p>
                        잠깐! 대정에서 온 남자, 성산에서 온 여자 part1.<br/>
                        서귀포에 취한 젊음의 기록 먼저 읽고 넘어와요.
                    </p>
                    <Link className='yellowLink' to='/Page14'>1편 보고오기</Link>
                </div>
            }
            item = {
                <>
                    <div className='item'>
                        <h3>무엇이 이들을 불러들였나</h3>
                        <p>자연 속 여유와 낭만, 서귀포가 주는 최고의 선물이죠. 동쪽 끝과 서쪽 끝, 멀리 떨어져 있어도 서귀포의 매력은 하나로 수렴돼요.</p>
                    </div>
                    <div className='item'>
                        <h3>성산 vs 대정, 우리 동네의 최고는요</h3>
                        <p>{`마을에 애정을 듬뿍 가진 두 사람이 가장 좋아하는 장소는 어디일까요? 대정의 녹남봉, 성산의 ‘오조 우유니’도 있어요.`}</p>
                    </div>
                    <div className='item'>
                        <h3>제주가 남북의 경계를 갖게 된 이유?</h3>
                        <p>{`한라산을 기점으로 동서가 아닌, 북쪽의 제주시, 남쪽의 서귀포시로 나뉜 건 일제의 영향이라는 설. 과연 사실일까요?`}</p>
                    </div>
                </>
            }
        />


        <div className='flexColumn80'>

            <div className='inner innerFlex'>
                <ImgCap img={`/img/img_77.jpg`} cap={`종종 육지보다 더 먼 거리감을 느낄지라도, 우린 같은 서귀포 사람이에요. `} left/>
                <div className='flexColumn36'>
                    <div className='flexColumn8'>
                        <ConTit text='서미정 대표는 서귀포에서 9년째 정착해 살고 있고, 부경철 대표는 20대에 서울로 떠났다가 고향으로 돌아왔는데요. 과거와 현재, 어떤 점이 달라졌다고 느끼나요?' />
                        <Desc name={person2} text={`처음 제주에 왔던 때가 15년 전인데요. 그때 동호회 친구들과 3박 4일간 자전거로 제주를 구석구석 일주했어요. 바다와 작은 오름 같은 자연에 빠져서 살아봐도 괜찮겠다는 생각도 했죠. 제가 정착할 당시만 해도 제주를 낭만적인 시선으로 바라봤어요. 가령 동쪽의 ‘벨롱장’처럼 예전엔 핸드메이드 제품이나 소소하게 음식을 판매하는 장도 많았잖아요. 지금은 체인점 같은 편의시설이 늘어나 편해진 건 사실인데, 외지인과 자본의 유입이 가속화되면서 더는 낭만만을 쫓긴 어려운 듯해요. 좀 씁쓸한 감도 있어요. `}/>
                    </div>
                </div>
                <ImgCap img={`/img/img_78.jpg`} cap={`성산을 소개할 때마다 서미정 대표의 눈에서는 꿀이 뚝뚝 떨어진다.`} left/>
                <Desc name={person1} text={`저는 다시 내려왔을 때, 그냥 좋았어요. 옛날에 느낀 편안한 느낌도 그대로고요. 우리 동네가 서쪽이어서 일몰이 정말 예쁘거든요. 멀리 나가봐야 소중한 걸 안다고, 그걸 깨달았어요. 제가 어렸을 땐 바다에 가면 보말이나 소라 같은 게 널려 있었던 기억이 있어요. 친구들과 한 바구니 가득 따다가 집에서 삶거나 구워 먹기도 했죠. 지금은 확실히 많이 안 보이는 걸 보면, 그때 논했던 환경 문제가 지금에야 그 결과를 드러내는 게 아닌가 해요. 동네가 워낙 농촌이라 전반적인 풍경은 비슷한 편이에요. 다만, 청년 대표가 새로운 콘셉으로 시도한 공간이 있는 반면, 시도하다가 전출해 방치된 공간도 늘어난 게 달라진 듯해요. `}/>
                <ImgCap img={`/img/img_79.jpg`} cap={`대정의 아들 부경철 대표는 대정의 산과 바다를 누비며 자랐다.`} left/>
            </div>

            <div className='inner innerFlex'>
                <div className='flexColumn36'>
                    <div className='flexColumn8'>
                        <ConTit text='어떤 매력에 이끌려 지금 있는 마을에 정착하고 일하게 되었는지요?' />
                        <Desc name={person2} text={`의외로 성산에 기반 시설이 잘되어 있어요. 병원이나 시장, 마트 등 편의시설도 생각보다 많은 편이죠. 상대적으로 제가 사는 오조리라는 마을은 잘 모르는데요. 최근 <웰컴투 삼달리>의 촬영 장소로 유명세를 탔어요. ‘럭키 편의점’이란 장소가 나오는데, 바로 앞에 성산일출봉이 보이는 오조 포구가 있어요. 여긴 매번 갈 때마다 좋아요. 거기에 잔잔한 내수면 길이 있는데, 해 질 무렵 바닥에 비친 노을이 되게 예쁘거든요. 우리끼린 ‘오조 우유니’라 부를 정도죠. 아침에 자박자박 걷는 것도 좋아요. 주변에 산책길도 잘 조성되어 있어 진짜 추천하고 싶어요. `}/>
                    </div>
                </div>
                <ImgCap img={`/img/img_80.jpg`} cap={`성산의 자랑, 일명 ‘오조 우유니’. 모두에게 알리고 싶으면서도 나만 알고 싶은 장소다. @서미정`} left/>
            </div>

            <div className='inner innerFlex'>
                <div className='flexColumn36'>
                    <div className='flexColumn8'>
                        <ConTit text='이참에 부경철 대표도 대정 자랑을 해야겠죠? ' />
                        <Desc name={person1} text={`저는 신도리가 본가예요. 신도-고산 평야가 제주에서 제일 넓은 평야 지역입니다. 토질도 제주에서 제일 비옥한 땅이라서 옛날부터 보리 등 곡식 농사를 많이 했던 동네죠. 읍장을 했던 우리 할아버지가 70년대 통계 자료를 보고 말씀해 주신 건데, 우리 동네가 제주 전체 보리 생산량의 40%를 담당했다고 해요. 옛날부터 좋은 곡식이 나는 만큼 집마다 술을 많이 빚었던 거죠. `}/>
                    </div>
                </div>
                <div className='flexColumn36'>
                    <div className='flexColumn8'>
                        <ConTit text='현재 가볼 만한 마을 내 추천 장소가 있다면요? ' />
                        <Desc name={person1} text={`‘녹남봉’이라고 뒷산 같은 오름이 있어요. 녹나무가 많이 자라 붙여진 이름이에요. 어렸을 때 친구들과 함께 산에 올라가곤 했는데, 봄에는 보리밭이 쭉 펼쳐져 있어요. 바람 불면 파도치는 것처럼 출렁거리는 풍경이죠. 그리고 양조장 앞 벼밭도 좋아요. 노을이 지거나 벼가 익어가는 걸 보면서 술을 마시면 캬- 이보다 좋을 순 없죠. `}/>
                    </div>
                </div>
                <ImgCap img={`/img/img_81.jpg`} cap={`이시보 양조장 바로 앞, 벼들이 고개를 숙여 인사를 건넨다. @서담채`} left/>
            </div>

            <div className='inner innerFlex'>
                <ImgCap img={`/img/img_82.jpg`} />
            </div>
        
            <div className='inner innerFlex'>
                <div className='flexColumn36'>
                    <div className='flexColumn8'>
                        <ConTit text='문득 이런 궁금증도 드는데요. 제주시와 서귀포시와 같은 구분이 오히려 동서로 되는 게 맞지 않을까 하는. ' />
                        <Desc name={person1} text={`제가 들은 설은 이거예요. 제주도는 정서상 동서로 나뉘는 게 맞아요. 그런데 일제강점기때 사람들이 뭉치지 않게 하려고 경계를 일부러 남북으로 나눴다고 하더라고요. 위아래로 나눠서 동서 간의 분열을 꾀하려고 했다는 거죠. `}/>
                    </div>
                </div>
            </div>

            <div className='inner innerFlex'>
                <ImgCap img={`/img/img_83.jpg`} />
            </div>

            <div className='inner innerFlex'>
                <div className='flexColumn36'>
                    <div className='flexColumn8'>
                        <ConTit text='각자 사는 마을이 앞으로 어떤 모습이길 바라나요? ' />
                        <Desc name={person1} text={`양조업을 하는 입장에서 제주 여행에 ‘술’이라는 키워드가 하나 더 늘어나면 좋겠어요. 위스키가 제일 유명한 나라가 스코틀랜드인데요. 그 섬만 유명할 이유는 없잖아요? 제주를 술의 섬으로 만들면 어떨까 싶어요. 외국인이 한국에 놀러 왔을 때, ‘제주에는 이 술이 유명하대.’란 인식이 조금이라도 생기면 좋겠어요. 예나 지금이나 술이 있는 장소에 문화가 만들어지는 법이잖아요. 그 중심에 양조장이나 와이너리, 증류소가 있었고요. 술과 양조장을 매개로 한 문화가 좀 더 활성화되면 좋겠습니다.`}/>
                        <Desc name={person2} text={`동쪽은 아직 서쪽보다는 발전이 덜 되어 있어요. 서귀포에 오는 분 중 천혜의 자연이 있는 제주의 본모습을 보고 싶다면, 여유 있게 즐기고 싶다면 동쪽으로 많이 오라고 말씀드리고 싶어요. 우리 동네는 10년 전이나 지금이나 만족스러운 그 모습 그대로인데요. 잘 보존되어 앞으로도 이 모습이 그대로 유지됐으면 좋겠어요. `}/>
                    </div>
                </div>
            </div>

            <div className='inner interviewFooter'>
                <div className='conBx'>{`인터뷰 장소 협조 : 모레기동타잔(서귀포시 상효동 1391-1) `}</div>
            </div>
        </div>

        

        <Recommend
            tit={<>이 콘텐츠를 좋아하면,<br/>이것도 좋아해요.</>}
            recoCard={[
                <RecoCard 
                    img = {'/img/img_rec_04.jpg'}
                    keyword = {[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                    ]}
                    conTit = {'서귀포에서 내 집 찾기 대작전'}
                    desc = {<>세상에서 가장 편한 건 남의 집이 될 수 있어요. 용도별, 취향별 내 집 삼아 삼만리.  </>}
                />,
                <RecoCard 
                    img = {'/img/img_rec_04.jpg'}
                    keyword = {[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                    ]}
                    conTit = {'서귀포에서 내 집 찾기 대작전'}
                    desc = {<>세상에서 가장 편한 건 남의 집이 될 수 있어요. 용도별, 취향별 내 집 삼아 삼만리.  </>}
                />,
            ]}
        />

    </div>
}

export default Page15;