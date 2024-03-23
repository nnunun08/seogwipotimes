import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Contents5 from '../component/Contents5';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';

function Page11() {
    return <div>
        <Header />
        <Article1
            keyword = {[
                <Keyword keyword={'ACTIVITY'}/>,
                <Keyword keyword={'HISTORY'}/>,
                <Keyword keyword={'NEWS'}/>,
                <Keyword keyword={'BRAND'}/>,
            ]}
            h2 = {'2023 문화도시 서귀포가 남긴 것 BEST 6'}
            p = {
                <>
                    사람은 이름을 남기고, 문화도시 서귀포는 괄목할 만한 노지 문화 사업을 남겼어요. 모르면 손해, 지금부터 함께 누려요. 새끼손가락 끼고 약속.
                </>
            }
            tit = {'문화도시 서귀포의 2023년 사업, 그 후'}
            item = {
                <>
                    <div className='item'>
                        <h3>감각과 영감 모두 가득 채웠고</h3>
                        <p>서귀포에 골고루 퍼진 문화 거점 공간인 [마을라운지], 문화 기획자 교육을 받을 수 있는 [창의문화캠퍼스]를 통해 창의력을 높였어요. </p>
                    </div>
                    <div className='item'>
                        <h3>미래 세대를 위한 다리가 된 데다가</h3>
                        <p>105개 마을 내 원형이 보존된 유·무형의 자산을 발굴하고 보존, 활용하는 [미래문화자산], 기후 위기에 대한 새로운 접근법 [서귀포 기후예술프로젝트]와 함께 살기 좋은 서귀포를 이어나갔어요. 오래오래. </p>
                    </div>
                    <div className='item'>
                        <h3>함께 어울리며 싱글벙글 웃음꽃도 터졌어</h3>
                        <p>서귀포 대표 이벤트, 로컬 브랜드의 총집합 문화 마켓 [놀멍장]과 한반도에서 가장 이른 봄을 맞이하는 마을 축제 [봄꽃 하영 이서]로 사는 맛을 더했어요.</p>
                    </div>
                </>
            }
        />
        <Contents5
            em = {`사랑방 혹은 아지트란 이름으로`}
            tit = {`BEST1 [마을라운지]`}
            img = {[
                <div class="imgWrap">
                    <img alt='img' src="/img/img_44.jpg" />
                    <div class="caption">내용 수정</div>
                </div>,
                <div class="imgWrap">
                    <img alt='img' src="/img/img_45.jpg" />
                    <div class="caption">내용 수정</div>
                </div>,
                <div class="imgWrap">
                    <img alt='img' src="/img/img_46.jpg" />
                    <div class="caption">내용 수정</div>
                </div>,
            ]}
            desc = {[
                <>
                    서귀포는 가로로 길게 퍼진 모양새예요. 지리상 자칫 문화 혜택을 누릴 지역이 한 곳으로 치우칠 우려가 있죠. 이를 예방하는 차원에서 문화도시 서귀포는 균형 있는 문화 거점인 [마을라운지]를 선정하고 있어요. <br/>
                </>,
                <>
                    2023년에는 기존 42개의 공간에, 새로운 26개 공간이 추가 선정되어 68개의 [마을라운지]가 불을 밝혔어요. 독립서점과 공방 등 마을 곳곳에 있는 공간이 문학, 음악, 미술 등 다채로운 문화예술 프로그램을 운영하며 서귀포 시민들의 감각을 채웠죠. <br/>
                </>,
                `올해도 매달 하루를 비워둘 필요가 있겠어요. 4월부터 11월, 매월 마지막 주 토요일마다 우리동네 책방에서 열렸던 ‘문화도시 책방데이’가 이어질 계획이에요. 서귀포 대표 동네책방인 <어나더페이지>는 물론 <키라네 책부엌>, <라바북스>, <그림책카페 노란우산>, <인터뷰>, <북타임> 등 저마다 다른 프로그램의 현장 속으로! 이거, 어디로 갈지 고민 좀 필요해야겠는데요? `
            ]}
            info = {
                <table>
                    <tr><th>SPECIAL</th><td>2023년 11월 ‘문화도시 책방데이’ 한정 ‘105번 문화버스’가 부릉부릉 마을을 누렸어요. 남원읍 책방 3곳 투어와 신흥리 동백마을에서의 푸짐한 식사, 위미리에서 감귤따기 체험이 함께한 1석3조의 스페셜 여행 프로그램이 함께했죠. 마을 경제도 살리고, 노지 문화도 진하게 체험하고 이것이 마을 투어의 정석!</td></tr>
                    <tr><th>EFFECT</th><td>2023년 1년간 [마을라운지]에는 1천5백여 명, ‘책방데이’에 5백여 명이 참여했어요. 우리집 가까이에서 일상 속으로 들어온 문화, 확실한 행복을 선사했어요. </td></tr>
                </table>
            }
            link = {
                <div class="orderOnline">
                    <a href="https://www.nojiculture.kr/introduction/lounge.do?mode=SPACELIST&area=0" target="_blank">
                        <div class="orderBtn">우리 동네 [마을라운지] 찾아보기</div>
                    </a>
                </div>
            }
        />

        <Contents5
            em = {`소중한 노지 역사 영원히`}
            tit = {`BEST2 [미래문화자산]`}
            img = {[
                <div class="imgWrap">
                    <img alt='img' src="/img/img_47.jpg" />
                    <div class="caption">내용 수정</div>
                </div>,
                <div class="imgWrap">
                    <img alt='img' src="/img/img_48.jpg" />
                    <div class="caption">내용 수정</div>
                </div>,
                <div class="imgWrap">
                    <img alt='img' src="/img/img_49.jpg" />
                    <div class="caption">내용 수정</div>
                </div>,
            ]}
            desc = {[
                <>
                    모든 것이 빠르게 변하는 요즘, 오랜 시간 살아남는 것의 가치가 점점 중요해져요. 조금 더 관심을 두고 지켜내어 미래 세대에게 전달해야 할 문화자산, 우리는 그걸 [미래문화자산]이라고 부르기로 했어요. 국가 문화유산으로 등록되지는 않았지만, 충분한 가치를 가진 유산을 발굴해요. 105개 마을 곳곳에 남아있는 자연, 역사, 문화, 신화 등 분야를 가리지 않죠. <br/>
                </>,
                <>
                    더욱 의미 깊은 것은 이 프로젝트가 시민의 제안으로부터 출발한다는 점이에요. 이후 10명의 전문 미래문화자산추진단의 심사 및 탄탄한 현장 답사를 통해 최종적으로 [미래문화자산]에 선정되죠. 이런 안정적인 시스템을 기반으로, 우리의 자산을 발굴하고 지켜내는데 박차를 가하고 있어요. <br/>
                </>,
                `다만, [미래문화자산]의 리스트가 느는 것만이 답은 아닐 거예요. 원형 그대로 이어질 수 있도록 제도적인 뒷받침이 필요하다는 것에 시민과 전문가 모두 공감하고 있죠. 실제 조례로 제정될 수 있도록 으쌰으쌰 파이팅을 외쳐요!`
            ]}
            info = {
                <table>
                    <tr><th>EFFECT</th><td>2023년에는 82개의 제안을 받아 최종적으로 17건, 30개의 [미래문화자산]을 추가했어요. 예상보다 많은 시민의 적극적인 참여가 있던 덕분이죠. 길이길이 전달하고픈 가치에 대한 애정을 체감했어요.</td></tr>
                    <tr><th>LIST</th><td>
                        <>
                        2023-1. 동일리 감저공장<br/>
                        2023-2. 상천리 오리튼물<br/>
                        2023-3. 창고천 상장궤-문덕궤<br/>
                        2023-4. 김신석 망사비<br/>
                        2023-5. 한남리 바위그늘집 자리<br/>
                        2023-6. 대포동 전경초소<br/>
                        2023-7. 하원 수로<br/>
                        2023-8. 엉또폭포<br/>
                        2023-9. 한남리 의례문화유적 (상여집-사곡동산–포제동산)<br/>
                        2023-10. 한남리 서중천 생활문화유적 (바령수-족쟁이수-청수–쉐물도–부그리궤-용수–올리튼물)<br/>
                        2023-11. 한남리 모세납 못<br/>
                        2023-12. 의귀리 목축문화유적 (장제동산-영궤-진드기 구제터–이멩이물)<br/>
                        2023-13. 한남리 머체왓 집터<br/>
                        2023-14. 서상효 조가물<br/>
                        2023-15. 남성정-남성대<br/>
                        2023-16. 동홍동 산지물<br/>
                        2023-17. 보목동 멜통
                        </>    
                    </td></tr>
                </table>
            }
            link = {
                <div class="orderOnline">
                    <a href="https://www.nojiculture.kr/introduction/future.do" target="_blank">
                        <div class="orderBtn">[미래문화자산] 도장깨기 여행 코스</div>
                    </a>
                </div>
            }
        />


        <Contents5
            em = {`먹고 놀고 즐기고 쉬라! `}
            tit = {`BEST3 문화 마켓 [놀멍장]`}
            img = {[
                <div class="imgWrap">
                    <img alt='img' src="/img/img_50.jpg" />
                    {/* <div class="caption">내용 수정</div> */}
                </div>,
            ]}
            desc = {[
                <>
                    문화도시가 야심차게 준비한 문화 마켓 [놀멍장]이에요. 먹거리는 물론 옷과 액세서리, 문구류, 생활용품까지, 다양한 분야의 로컬브랜드 창작자를 직접 만날 수 있는 기회죠. [놀멍장]이 열리는 칠십리시공원은 올레길 7코스가 지나가는 길이기도 해요. 한라산과 천지연폭포 같은 자연을 한 눈에 볼 수 있어 서귀포다움을 즐기기에 최적의 장소죠.  <br/>
                </>,
                <>
                    [놀멍장]은 단순한 상행위에 그치는 것이 아니라 남녀노소 서로 알아가고 물건에 담긴 진심을 나누는 시간으로 채워져요. 브랜드 전시가 펼쳐지는 #느끼멍, 로컬 푸드를 맛보는 #맛보멍, 마켓과 체험을 즐기는 #즐기멍, 서귀포 풍경으로 재충전하는 #쉬멍의 4가지 키워드로 마켓을 구성했죠. 캠크닉 세트와 돗자리를 이용해 누구나 자유롭게 쉴 수 있고, 지역을 기반으로 활동하는 버스킹 공연자의 무대로 흥까지 더해 갔답니다. 덕분에 아이와 함께, 친구와 함께, 손에 손잡고 모인 서귀포 시민들의 얼굴엔 웃음이 한가득했네요. 모든 것이 놀멍! 다음 장날을 벌써부터 손꼽아 기다려봐요. 
                </>,
            ]}
            video = {
                <div className='video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TKB3g-_aIVA?si=VQHUK-grWhdVEaKq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            }
            info = {
                <table>
                    <tr><th>SPECIAL</th><td>‘노지문화실험가’를 알고 있나요? 서귀포시문화도시센터는 반짝이는 아이디어를 가진 청년들이 자신의 브랜드를 만들도록 돕는 프로젝트를 운영해요. 2023년에는 지구에 무해한 상품이나 지역의 가치를 널리 알리는 상품을 개발하는데 힘썼죠. 이렇게 배출된 9명의 ‘노지문화실험가’의 제품이 [놀멍장]에서 처음 공개됐다는 사실! 제주의 옹기로 만드는 감각적인 오브제, 해양 쓰레기를 활용한 업사이클 스피커 등 상생의 기쁨이 더해졌어요. </td></tr>
                    <tr><th>EFFECT</th><td>총 77팀의 셀러와 2천5백여 명의 방문객이 참여했어요. 넓디넓은 칠십리시공원을 속속들이 누비다 시간 가는 줄 몰랐죠.</td></tr>
                    <tr><th>PLUS</th><td><a href="https://www.instagram.com/noji_market/ " target='_blank'>@noji_market</a></td></tr>
                </table>
            }
        />

        <Contents5
            em = {`봄의 전령을 격하게 환영해`}
            tit = {`BEST4 마을 축제 [봄꽃 하영 이서]`}
            img = {[
                <div class="imgWrap">
                    <img alt='img' src="/img/img_51.jpg" />
                    {/* <div class="caption">내용 수정</div> */}
                </div>,
            ]}
            desc = {[
                <>
                    “봄꽃 하영 이서”라고 크게 외쳐 보세요. ‘봄꽃 정말 많아’란 뜻의 제주어죠. 내뱉는 목소리에도 연분홍빛, 노란빛 꽃잎이 피어나는 것 같죠? 서귀포는 제주에서도 가장 먼저 두 팔 가득 봄을 맞이해요. 그에 대한 환영 인사로 3월과 4월, 두 가지 봄축제가 열렸죠.<br/>
                </>,
                <>
                    문화도시 서귀포의 [봄꽃 하영 이서]는 마을의 주민들이 직접 만들어가는 축제에요. 지역 문화, 체험, 공연, 마켓 등 다양한 콘텐츠가 풍성하게 펼쳐지죠. 마을의 자원에 문화 예술을 더해, 가치에 가치를 더하니 마을 성장의 힘찬 동력이 되었어요. 
                </>,
            ]}
            custom = {[
                <div class="imgWrap">
                    <img alt='img' src="/img/img_52.jpg" />
                    {/* <div class="caption">내용 수정</div> */}
                </div>,
                <div className=''>
                    <b>귤꽃향기축제</b>
                    <p className='desc'>본격적으로 달콤한 귤꽃 향기와 마을의 매력에 취하는 시간, 듣기만 해도 흐뭇하죠? 2023년 4월 28일부터 5월 7일까지, 10일 간 서귀포의 6개 마을(신례1리, 위미1리, 의귀리, 하원마을, 하례1리, 동상효 외) 곳곳에서 마을 릴레이 축제가 열렸어요. 문화축제를 통해 지역 주민의 일거리가 생기고, 축제 관람객이 마을에 방문하면서 경제가 활성화되는 성과도 톡톡히 챙겼어요. 마을별로 의미 있는 장소를 산책하는 프로그램과 로컬 음식 만들기 체험은 물론 다양한 노지에서 열린 ‘귤꽃 언플러그드 공연’ 등 풍성한 즐길 거리로 북적거렸죠. 마음 열고 기대하세요. 달콤하고도 상큼한 마법의 귤꽃 향기를 맡을 날이 다가오고 있으니까. </p>
                </div>
            ]}
            info = {
                <table>
                    <tr><th>EFFECT</th><td>[서귀포봄맞이축제]에선 3천1백여 명, [귤꽃향기축제]에선 3천5백여 명의 시민이 방문해 봄의 기운을 듬뿍 나누었어요. 제주도에 있고 사는 맛을 한껏 즐겼죠. </td></tr>
                    <tr><th>PLUS</th><td><a href="https://www.instagram.com/noji_market/ " target='_blank'>@noji_market</a></td></tr>
                </table>
            }
        />

        <Contents5
            em = {`문화기획 샛별의 탄생`}
            tit = {`BEST5 [창의문화캠퍼스]`}
            img = {[
                <div class="imgWrap">
                    <img alt='img' src="/img/img_53.jpg" />
                    {/* <div class="caption">내용 수정</div> */}
                </div>,
            ]}
            desc = {[
                <>
                    서귀포에 대학이 없다고요? 서귀포의 유일한 캠퍼스 [창의문화캠퍼스]를 모르고 하는 소리예요. 이곳에서는 마을, 로컬문화를 기반으로 한 창의적인 문화기획자를 양성해요. 커리큘럼은 노지문화 아카이빙, 지속가능 생태문화, 로컬문화 상품기획 및 마케팅 등 1대학부터 8대학까지 분야별로 나뉘죠. 탄탄한 성장 로드맵을 가지고 있는 데다가 실제 현업에서 활발히 활동하는 전문가가 포진되어 이론 교육에만 그치는 것이 아니라 실제 협업으로 이어지는 것이 가장 큰 장점이죠. 어떤 마을 여행을 개발하고 마을 유휴공간은 어떻게 활성화할지 등 여러 탐구와 실험이 실전으로 이어지고 있어요.
                </>,
            ]}
            custom = {[
                <div class="imgWrap">
                    <img alt='img' src="/img/img_54.jpg" />
                    {/* <div class="caption">내용 수정</div> */}
                </div>,
            ]}
            info = {
                <table>
                    <tr><th>SPECIAL</th><td>[창의문화캠퍼스]의 수료자는 다양한 문화도시 사업을 이어가요. 2023년에는 직전년도인 2022년 2명의 수료생이 문화도시 사업에 참여했어요. [2023 귤꽃향기축제] 신례1리 기획자로 활동한 양봉관과 2023 문화도시센터 문화코디네이터로 활동한 조민홍이 그 주인공이죠. 문화도시 서귀포의 미래가 창창한 이유예요. </td></tr>
                    <tr><th>EFFECT</th><td>2023년에는 42명의 수료생을 배출했어요. 2021년에 문을 연 [창의문화캠퍼스]는 어느덧 누적 수료생이 96명이 되었죠. 문화기획의 샛별들이 얼마나 더 빛을 발할진 아무도 몰라요.</td></tr>
                </table>
            }
        />

        <Contents5
            em = {`기후 위기도 예술적으로`}
            tit = {`BEST6 [서귀포 기후예술프로젝트]`}
            img = {[
                <div class="imgWrap">
                    <img alt='img' src="/img/img_55.jpg" />
                    {/* <div class="caption">내용 수정</div> */}
                </div>,
                <div class="imgWrap">
                    <img alt='img' src="/img/img_56.jpg" />
                    {/* <div class="caption">내용 수정</div> */}
                </div>,
            ]}
            desc = {[
                `기후와 예술, 두 단어의 조합이 조금 낯설게 느껴질지도 모르겠어요. 잦은 이상 기후를 직접 실감하는 날이 잦아지는 요즘인데요. 이를 외면하지 않고 문화도시에서는 기후 위기가 코앞에 닥쳐왔다는 것을 예술 프로젝트를 통해 알려 왔어요. [서귀포 기후예술프로젝트]에서는 작품 전시뿐 아니라 ‘기후예술 컨퍼런스’, 그리고 시민이 직접 참여할 수 있는 프로그램도 진행해요. 기후 위기에 대처하고 싶은 마음을 행동으로 한 발짝 실행해 보는 거죠. `,
                <><br/></>,
                `2023년 [서귀포 기후예술프로젝트]의 아티스트에는 양숙현 작가가 선정됐어요. 전시 <소멸하는 물질 감각: 헤비타트 데이터>가 열린 공간은 대포마을의 구)전경초소에요. 성산의 동굴 진지, 위미리의 귤밭, 대포 해안가에서 발견한 물질을 데이터화해 인적이 드문 대포동에 풀어놓은 미디어 작업이었어요. 하이드로폰(수중청음기)로 바다 속 주파수를 들어보는 신기한 체험도 마련됐죠.`
            ]}
            
            info = {
                <table>
                    <tr><th>SPECIAL</th><td>성산읍 오조리 해안 일대에서는 ‘봉그깅’이란 기후 위기 프로젝트도 펼쳐졌어요. ‘줍다’의 제주어인 ‘봉그다’에서 따온 ‘봉그깅’은 해안가로 몰려온 해양 쓰레기를 주워담으며 시민들이 자발적으로 펼치는 환경 정화 활동이에요. 제주의 쓰줍 넘버원 민간환경단체 ‘디프다 제주’와 함께 운영했어요.</td></tr>
                    <tr><th>EFFECT</th><td>2023년의 ‘기후예술 컨퍼런스’에서는 ‘기후위기 목격자로서 예술가’라는 주제로 토의를 펼쳤는데요. 이번엔 제주도립미술관과 협력하여 운영했어요. 기후 변화에 대응하는 예술의 현명한 자세는 무엇일지 같이 고민하는 파트너가 늘어났다는 증거죠. </td></tr>
                </table>
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

export default Page11;