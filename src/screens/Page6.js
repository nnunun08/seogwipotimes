import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';
import ListGroup from '../component/ListGroup';
import ImgSlider from '../component/ImgSlider';

function Page6() {

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
            h2 = {`신비와 활기 사이, 신효ㆍ하효마을`}
            p = {`효돈동이란 지붕 아래 내륙과 바다를 넘나들며 흐드러진 귤꽃의 향연. 달고 싱그럽고, 또 신비로워요. `}
            img = {
                <>
                    <div className='keyImg'><img src='/img/img_26.jpg' alt="img" /></div>
                </>
            }
            dis = {'displayNone'}
        />

        <div className='listGroupWrap'>
            <div className='inner'>
                <ListGroup
                    num = {`1`}
                    tit = {`월라봉과 서귀포감귤박물관`}
                    desc = {`매번 손이 노래질 정도로 까먹기만 했던 감귤의 탄생과 여정의 일기장 같은 박물관. 체력 보강 차원에서 월라봉 전망대도 추가. `}
                />
                <ListGroup
                    num = {`2`}
                    tit = {`남내소`}
                    desc = {`신효마을과 하례마을을 가로지르는 효돈천. 효돈천 내 가장 크고 넓은 연못으로 들어가는 길 찾기는 미지로 가는 탐험 비슷. `}
                />
                <ListGroup
                    num = {`3`}
                    tit = {`베케`}
                    desc = {`봄부터 겨울까지, 계절별 자연의 추이를 생중계하는 정원 카페. 통창 바로 앞 자연을 올려다봐야 하는 바(bar)가 명당.`}
                />
                <div className='keyImg'><img src='/img/img_26.jpg' alt="img" /></div>
                <ListGroup
                    num = {`4`}
                    tit = {`고요편지`}
                    desc = {`읽고 싶은 책을 데려가 음료를 주문해도, 책방지기의 셀렉션을 탐미할 수도 있는 서점. 서귀포에 나만의 아지트를 만드는 기분은 덤.`}
                />
                <ListGroup
                    num = {`5`}
                    tit = {`게우지코지ㆍ생이돌`}
                    desc = {`전복 내장(제주어로 ‘게읏’)을 닮은 게우지코지와 이를 발판으로 두 개의 암석이 우뚝 솟아 새(제주어로 ‘생이’)의 쉼터가 되는 생이돌(제주어로 ‘생이’). 가슴이 뻥 뚫림.`}
                />
                <div class="listGroup">
                    <div class="listTit">
                        <span class="num">6</span>
                        <span class="num">7</span>
                        <div class="tit">소금막 나무정자ㆍ하효항</div>
                    </div>
                    <div class="listDesc">신효마을과 하례마을을 가로지르는 효돈천. 효돈천 내 가장 크고 넓은 연못으로 들어가는 길 찾기는 미지로 가는 탐험 비슷. </div>
                </div>
                <ListGroup
                    num = {`8`}
                    tit = {`쇠소깍ㆍ소금막검은모래해변`}
                    desc = {`효돈천의 담수와 해수의 운명적인 만남 장소로, 일석다조의 터지는 즐거움. 기암괴석 위로 강건히 자란 송림 아래 하천을 유랑하거나 손가락 사이로 부스스 빠지는 검은 모래놀이를 하거나.`}
                />
                <ListGroup
                    num = {`9`}
                    tit = {`트멍길`}
                    desc = {`제주올레 6코스를 포함해 효돈동이 뽐내는 9경을 특화시킨 ‘트멍길’. 쇠소깍 다리에서 게우지코지까지 약 10.83km, 3~4시간이 소요되는 동네 크게 한 바퀴. 스탬프 투어 완주 시 협업한 카페나 식당의 할인 혜택도.`}
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
                <img src='/img/img_post02.jpg' alt='img'/>
            </div>
        </div>

        <div className='contents3'>
            <div className='inner'>
                <h3>신효ㆍ하효마을의 가치 하나둘셋  </h3>
                <h4>남내소vs쇠소깍, 효돈천의 두 얼굴</h4>
                <p>쇠소깍이란 유명세에 가려져 있지만, 사실 그 어미는 한라산에서 발원한 13km의 효돈천이에요. 효돈천 줄기의 하류에 있으면서 해수와 만나는 옛 천연 포구가 바로 쇠소깍이죠. 그 상류엔 또 다른 비경으로 알려진 남내소가 숨어 있어요. 정글 길을 짧게 내려가면 기꺼이 하늘의 거울이 되어버린 하천과 수중 동굴 등을 탐험하는 암반 트래킹이 가능하죠. 깊은 계곡 속에서의 적막, 멈춤의 시간을 허락해요. 유네스코 제주도 생물권보전지역으로 지정된 효돈천의 광활함을 맞이했으니, 이제 자연의 디테일을 탐미하러 가요. </p>
            </div>
        </div>

        <div className='reactSlick'>
            <div className='inner'>
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_04.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_04.jpg' alt='slideImg'/></div>
                    ]}
                />
            </div>
        </div>

        <div className='contents3'>
            <div className='inner'>
                <h4>{`<베케>로 자연주의 정원 생각`}</h4>
                <p>계절에 따라 자연 스스로 뽐내기 대회가 펼쳐지는 듯한 이곳. 아니 같은 하루에도 시간대에 따라 다른 결을 드러내는 자연을 숭상할 수밖에 없는 곳. 제자리걸음 같아도 멈추지 않는 자연의 생명력을 배우는 정원 겸 카페예요. 한라산을 오르내리며 몸으로 마음으로 자연의 조화를 습득한 김봉찬 대표의 고집스러움이 우리에겐 무한 아름다움으로 다가오죠. 사진 스팟에 집착하기보다 길게 멀리 둘러서 아홉 정원의 시간에 흡수되어 보세요. 나태주 시인의 ‘오래 보아야 예쁘다.’는 시 문구는 이곳에서 더욱 진실입니다. 정원에 비운 마음을 채우러 이제 책방으로 걸음을 옮겨 보죠. </p>
            </div>
        </div>

        <div className='reactSlick'>
            <div className='inner'>
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_05.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_05.jpg' alt='slideImg'/></div>
                    ]}
                />
            </div>
        </div>

        <div className='contents3'>
            <div className='inner'>
                <h4>{`고요와 배려 분양 중, <고요편지>`}</h4>
                <p>마을 사거리에 있는 돔 형태의 건물. 책을 사랑하는 이라면 누구나 한 번쯤 꿈꿨던 공간을 실현한 곳이에요. 책상에 앉아 책을 정독할 수도, 혼술하며 책방지기의 반려책(도서관처럼 진득하니 읽을 수 있는 책)을 둘러볼 수도, 뜻밖에 만난 맘에 드는 책 한 권을 데려올 수도 있죠. 카페와 도서관을 살짝 인용한 명실공히 서점이에요. 구석구석 책방지기 한민정의 손 글씨가 마음을 쓰다듬어요. 하나하나 소중하지 않은 것이 없다는 기분, 이곳이 주는 진짜 보물이죠. 매달 ‘귤껍질파이북클럽’, ‘홀짝’ 등 커피와 책 덕후인 책방지기의 프로젝트에도 한 발, 내 마음에 고요가 옵니다. </p>
            </div>
        </div>

        <div className='reactSlick'>
            <div className='inner'>
                <ImgSlider
                    obj = {[
                        <div><img src='/img/slide_06.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_06.jpg' alt='slideImg'/></div>
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

export default Page6;