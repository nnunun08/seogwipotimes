import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Article2 from '../component/Article2';
import Contents from '../component/Contents';
import CheckList from '../component/CheckList';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';

function Page1() {
    return <div>
        <Header />
        <Article1
            tag = {
                <>
                    <div className='tag purple'>TRAVEL</div>
                    <div className='tag pink'>ACTIVITY</div>
                </>
            }
            h2 = {'서귀포에서 내 집 찾기 대작전'}
            p = {
                <>
                    세상에서 가장 편한 건 남의 집이 될 수 있어요. 용도별, 취향별 내 집 삼아 삼만리.
                </>
            }
            img = {
                <>
                    <div className='keyImg'><img src='/img/img_01.jpg' alt="img" /></div>
                </>
            }
            tit = {'손님, 어떤 용도로 집을 찾으시나요?'}
            item = {
                <>
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
                </>
            }
        />
        <Article2
            color = {'orange'}
            tit = {'워라밸이 뭐길래, 노마드족을 위한 워케이션'}
            desc = {'같은 집과 회사를 왕복하는 사이, 무료함이란 독버섯이 자라날 때. 아이디어를 샘솟게 하는 워케이션(workation)이 해답일 수 있어요.'}
        />
        <Contents 
            color = {'orange'}
            img1 = {'/img/img_02.jpg'}
            img2 = {'/img/img_03.jpg'}
            caption= {'@서담채'}
            dog = {'dog'}
            kiz = {'kiz'}
            obs = {'obs'}
            contTit={`익숙함과 새로움 사이, <오피스제주 사계점>`}
            location={'서귀포시 안덕면 사계리 3318-1'}
            desc={`내 회사 삼고 싶은, 본격적인 워케이션 공간이에요. 1층엔 공유오피스, 2~3층에는 숙소가 마련되어 있죠. 1층의 공유오피스엔 미팅룸과 세미나룸이 갖춰져 있어 맘에 맞는 팀원과의 워크숍이나 별도 프로젝트 활동 장소로도 안성맞춤이에요. 열일하다가 출출해졌다고요? 토스트와 티, 커피 등을 제공하는 커피 바에서 주린 배를 달랠 수 있어요. 블루투스 키보드부터 노트북 거치대, 무릎 담요까지 빌릴 수 있으니, 일에 몰입하기에 (핑계 대기 어려운) 최적의 공간. 일을 마친 후 숙소 창문을 열어 ‘뷰멍’을 오래 즐겨 보세요. 고층 건물 없이 뻥 뚫린 경치가 복잡한 머릿속을 깨끗하게 정리해 줄 테니까요.`}
            checkList = {[
                <CheckList props = {'모든 객실은 2인 이상, 혼자 이용 시 더욱 호사스러운 추억이 됨.'}/>,
                <CheckList props = {'댕댕이와 꼭 붙어있고 싶다면 ‘댕댕이 스탠다드’ 룸 예약 권장. '}/>,
                <CheckList props = {'아이와 함께 숙박도 가능하나 추가 이불은 제공하지 않으니 체크.'}/>
            ]}
            stayBtn = {`<오피스제주 사계점>에서 머물기`}
            url= {'https://o-peace.com/38'}
        />
        <Contents 
            color = {'orange'}
            img1 = {'/img/img_04.jpg'}
            img2 = {'/img/img_05.jpg'}
            caption= {'@라포르하례'}
            dog = {'dog'}
            kiz = {'kiz'}
            contTit={`일을 마치면 촌캉스, <라포르하례>`}
            location={'서귀포시 남원읍 하례리 558-3'}
            desc={`유난히 햇살이 좋은 서귀포 남원의 이층집이에요. ‘슬로우 라이프’를 지향해 가꿔진 이곳은 창밖으로 펼쳐진 귤밭을 보며 서귀포의 노지 감성을 가득 채울 수 있죠. 1층인 공유 작업실과 주방이 포함된 공용 공간부터 2층인 게스트룸에 이르기까지 나무 바닥의 진동 소리를 들으며 자꾸만 두리번거리게 해요. 세컨하우스로 삼고 싶은 시골집 구석구석 감각적인 인테리어와 소품들이 메마른 감성을 채워주는 까닭이죠. 이곳의 시그니처는 각종 프로젝트를 대환영한다는 점. 호스트와 비슷한 취향을 가졌다면, 로컬 커뮤니티 활동에 참여해 보고 싶다면 똑똑 문의해 보세요. 해치지 않아요.`}
            checkList = {[
                <CheckList props = {'내가 기획하는 소모임을 열 수 있는 대관.'}/>,
                <div className='list'>인스타그램(<a href="https://instagram.com/rapport_harye" target='_blank'>@rapport_harye</a>)을 통해 진행 중인 로컬 커뮤니티 소식 접하기.</div>
            ]}
            stayBtn = {`<라포르하례>에서 촌캉스`}
            url = {'https://blog.naver.com/rapport_harye/223290667770'}
        />
        <Contents 
            color = {'blue'}
            img1 = {'/img/img_06.jpg'}
            img2 = {'/img/img_07.jpg'}
            caption= {'@취다선'}
            contTit={`나에게 취하다, <취다선 리조트>`}
            location={'서귀포시 성산읍 오조리 398-10'}
            desc={`‘차와 명상에 취하다.’라는 뜻을 품은 <취다선 리조트>에서는 매일 다도와 명상, 요가 클래스가 열려요. 지금 여기, 내가 하는 일에만 온 감각을 집중하는 프로그램으로 채워져 있죠. 숙박비 내에 각 프로그램 체험비가 포함되어 날 돌보기에 어색한 이들에게 절호의 기회가 돼요. 모든 객실 창에는 푸른 바다와 저 멀리 우도까지 걸려 마음을 설레게 하는데요. 객실 내에도 다기 세트가 있으니, 자연에 취한 나만의 티타임을 연습해 보세요. 애증의 TV는 없습니다. 휴대폰도 잠시 꺼두고, 나와 더 없는 절친이 되어 보세요. `}
            checkList = {[
                <CheckList props = {<>제주 식재료로 정성을 담은 조식이 또 하나의 감동. <br /> 전복죽/들깨쑥떡국/미역국/장어보양탕 중 1식 선택, 비건 옵션도 있음.</>}/>,
                <CheckList props = {<>숙박은 13세 이상 가능<br />(보호자로서의 자신이 아닌 온전한 자기 자신으로 머물기 위한 목적).</>}/>,
            ]}
            stayBtn = {`<취다선 리조트>에 취하기`}
            url= {'https://booking.naver.com/booking/3/bizes/197447?area=pll'}
        />
        <Contents 
            color = {'blue'}
            img1 = {'/img/img_08.jpg'}
            img2 = {'/img/img_09.jpg'}
            caption= {'@라포르하례'}
            kiz={'kiz'}
            contTit={`세상에서 임시 탈출, <약천사> 템플스테이`}
            location={'서귀포시 대포동 1161'}
            desc={`스님들이 수행하는 공간에서 같이 지내다 보면 몸과 마음가짐이 저절로 경건해지는데요. 절에서 지내면 발우공양과 108배가 필수가 아닐지 하는 걱정은 붙들어 매세요. 취향에 따라 <약천사> 스테이 선택권은 두 가지. 108배와 염주 만들기, 스님과의 차담 등 더 깊게 절 문화를 체험하고 싶다면 ‘체험형’ 스테이를, 혼자 조용히 사색할 시간이 필요하다면 ‘휴식형’ 스테이를 택할 수 있어요. 널따란 서귀포 바다가 마음을 열리게 하는 가운데, 야자수와 하귤나무 등이 절 곳곳에 펼쳐져 참으로 제주다운 나날을 보장할 거예요. 염불과 목탁 소리에 의지해 번다한 생각도 다스려 보세요.`}
            checkList = {[
                <CheckList props = {'개인 방 없음. 예약 상황에 따라 다른 사람과 합방할 확률 있음(남녀 별도).'}/>,
                <CheckList props = {`’체험형’ 스테이는 주말에만 예약 가능.`}/>,
            ]}
            stayBtn = {`<약천사>로 탁탁탁`}
            url={'https://yakchunsa.templestay.com/'}
        />

        <Article2
            color = {'green'}
            tit = {'숲속으로 로그인 캠핑'}
            desc = {'별무리 아래 잠들고 새 소리를 들으며 깨는 낭만, 매일 아침 피톤치드 ‘뿜뿜’하는 산책의 선물 세트. 중산간에 숨은 자연 휴양림 캠핑은 가성비, 가심비에 탁월해요.'}
        />
        <Contents 
            color = {'green'}
            img1 = {'/img/img_10.jpg'}
            img2 = {'/img/img_11.jpg'}
            caption= {'@m.y__world__'}
            kiz={'kiz'}
            obs={'obs'}
            contTit={`편백나무의 신세계, <서귀포 자연휴양림>`}
            location={'서귀포시 대포동 산1-8'}
            desc={`편백나무로 가득 둘러싸인 곳에서 콸콸 터지는 피톤치드 샤워를? 여기에선 꿈이 현실이 돼요. <서귀포 자연휴양림>은 제주시와 서귀포시를 잇는 1100도로의 중간에 있어요. 한라산 중턱, 해발 700m 정도여서 시내보다 온도가 낮은 편이죠. 넓디넓은 휴양림 입구에서도 차로 10분간 더 들어가야 캠핑장에 도착하게 돼요. 그야말로 깊디깊은 산속 신비가 기다리고 있죠. 키 높은 편백나무 사이의 야영 데크에 손수 자기 집(텐트)을 지어 보세요. 아침엔 동트자마자 눈이 번쩍! 새들의 ‘깨발랄’ 지저귐에 게으름은 남의 몫이 돼요.`}
            checkList = {[
                <CheckList props = {'서귀포 시민은 반드시 신분증 지참. 이미 저렴한 야영 데크 요금의 20% 할인 가능.'}/>,
                <CheckList props = {`캠핑장에는 샤워장과 전기 시설이 없음. 진정한 자연인으로 살아보기. `}/>,
                <CheckList props = {`물을 포함한 먹거리는 자체 꼼꼼히 준비.`}/>,
            ]}
            stayBtn = {`<서귀포 자연휴양림>의 피톤치드 샤워`}
            url={'https://www.foresttrip.go.kr/rep/or/sssn/fcfsRsrvtPssblGoodsDetls.do?hmpgId=ID02030013&menuId=001001'}
        />
        <Contents 
            color = {'green'}
            img1 = {'/img/img_12.jpg'}
            img2 = {'/img/img_13.jpg'}
            caption= {'@apa__moooon'}
            kiz={'kiz'}
            obs={'obs'}
            contTit={`가족 캠핑에 도전! <붉은오름 자연휴양림>`}
            location={'서귀포시 표선면 가시리 산158'}
            desc={`어쩌면 이처럼 잘 정비된 휴양림이 또 있을까, 감동할지도 모르겠어요. 한라산의 동쪽, 남조로 중턱에 있는 <붉은오름 자연휴양림>은 모든 동선이 데크 길로 조성되어 편해요. 캠핑 사이트 간의 간격도 넉넉한 편이라 조용히 숲을 전세 낸 듯한 캠핑을 즐기기 좋죠. 이미 캠핑 초보자 사이에서 입문하기 좋은 곳으로 소문나 늘 예약 만료 5초 전이랍니다. 온수 샤워장과 전기도 사용할 수 있어 가족 캠핑지로도 추천해요. 혹 체력이 차고 넘친다고요? 붉은 오름의 정상을 찍고 그 둘레길 걷기에 한 번 도전해 보세요. 물과 스낵, 1시간 30분의 용기면 돼요. `}
            checkList = {[
                <CheckList props = {'경사가 완만한 ‘무장애나눔숲길’은 남녀노소 어려움 없는 산책 가능.'}/>,
                <CheckList props = {'편의 시설은 없으니, 자체 먹거리 준비.'}/>,
            ]}
            stayBtn = {`<붉은오름 자연휴양림>에서 신선 캠핑`}
            url={'https://foresttrip.go.kr/rep/or/sssn/fcfsRsrvtPssblGoodsDetls.do?hmpgId=ID02030014&menuId=001001'}
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

export default Page1;