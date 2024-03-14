import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';
import ListGroup from '../component/ListGroup';
import ImgSlider from '../component/ImgSlider';

function Page5() {

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
                <Keyword keyword={'BRAND'}/>,
                <Keyword keyword={'SPACE'}/>,
            ]}
            h2 = {`한 템포 느리게, 보목마을`}
            p = {`보목천을 젖줄로 어미의 자궁처럼 따스하게 안착한 듯한 마을. 여기에선 누구나 시간을 잊게 해요. `}
            img = {
                <>
                    <div className='keyImg' style={style1}><img src='/img/img_25.jpg' alt="img" /></div>
                </>
            }
            dis = {'displayNone'}
        />

        <div className='listGroupWrap'>
            <div className='inner'>
                <ListGroup
                    num = {`1`}
                    tit = {`소천지`}
                    desc = {`백두산 천지를 축소해 놓은 듯해 붙여진 이름. 소천지에 투영된 한라산을 보며, 미니형 탑 위 돌 하나에 소원을 얹는 시간. `}
                />
                <ListGroup
                    num = {`2`}
                    tit = {`루씨쏜 아뜰리에`}
                    desc = {`제주 노지 문화를 우아하게 민화로 발현한 갤러리 겸 스튜디오, 카페로 무장한 복합 문화 공간. 민화에 예술 투혼을 한 번?`}
                />
                <ListGroup
                    num = {`3`}
                    tit = {`백주산보`}
                    desc = {`마을 내 공간도 예술, 커피 맛도 예술인 북 카페. 사진과 영화 관련 예술 서적이 가득, 시간이 사라지는 여유는 한 보따리. `}
                />
                <ListGroup
                    num = {`4`}
                    tit = {`구두미포구`}
                    desc = {`제주 노지 문화를 우아하게 민화로 발현한 갤러리 겸 스튜디오, 카페로 무장한 복합 문화 공간. 민화에 예술 투혼을 한 번?`}
                />
                <ListGroup
                    num = {`5`}
                    tit = {`보목천(정수내/장술내) `}
                    desc = {`마을의 중심부에서 동서로 나뉘는 경계선. 동쪽 동네는 어업, 서쪽 동네는 농업 위주. 자연에 기반한 생활상 탐미 포인트. `}
                />
                <ListGroup
                    num = {`6`}
                    tit = {`보목포구`}
                    desc = {`제주 노지 문화를 우아하게 민화로 발현한 갤러리 겸 스튜디오, 카페로 무장한 복합 문화 공간. 민화에 예술 투혼을 한 번?`}
                />
                <ListGroup
                    num = {`7`}
                    tit = {`제지기오름(재지기오름/절오름) `}
                    desc = {`나무 사이에 걸린 보목포구, 섶섬의 풍경화를 내어주는 해발 92m의 전망대. 왕복 약 20~30분 정도의 난이도 낮은 오름으로, 아이와의 산책길로 도전 가능.`}
                />
                <ListGroup
                    num = {`8`}
                    tit = {`섶섬`}
                    desc = {`포구 앞바다 1km 지점. 잘 깎인 바위가 불시착한 듯한 이 무인도엔 450종의 난대림이 귀한 생을 이어가는 중. 천연기념물 제18호.`}
                />
                <ListGroup
                    num = {`9`}
                    tit = {`제주 올레 6코스 `}
                    desc = {`쇠소깍에서 제주올레 여행자 센터로 이어지는 11km의 올레 관통. 제지기오름에서 보목/구두미 포구 해안 길을 관통해 소천지까지 원스톱 추천. `}
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
                <img src='/img/img_post01.jpg' alt='img'/>
            </div>
        </div>

        <div className='contents3'>
            <div className='inner'>
                <h3>신효ㆍ하효마을의 가치 하나둘셋 </h3>
                <h4>남내소vs쇠소깍, 효돈천의 두 얼굴</h4>
                <p>쇠소깍이란 유명세에 가려져 있지만, 사실 그 어미는 한라산에서 발원한 13km의 효돈천이에요. 효돈천 줄기의 하류에 있으면서 해수와 만나는 옛 천연 포구가 바로 쇠소깍이죠. 그 상류엔 또 다른 비경으로 알려진 남내소가 숨어 있어요. 정글 길을 짧게 내려가면 기꺼이 하늘의 거울이 되어버린 하천과 수중 동굴 등을 탐험하는 암반 트래킹이 가능하죠. 깊은 계곡 속에서의 적막, 멈춤의 시간을 허락해요. 유네스코 제주도 생물권보전지역으로 지정된 효돈천의 광활함을 맞이했으니, 이제 자연의 디테일을 탐미하러 가요. </p>
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
                        <div><img src='/img/slide_02.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_02.jpg' alt='slideImg'/></div>
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
                        <div><img src='/img/slide_03.jpg' alt='slideImg'/></div>,
                        <div><img src='/img/slide_03.jpg' alt='slideImg'/></div>
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

export default Page5;