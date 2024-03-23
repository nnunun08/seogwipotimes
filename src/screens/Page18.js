import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';
import ConTit from '../component/ConTit';
import Desc from '../component/Desc';
import ImgCap from '../component/ImgCap';
import DetailInfo from '../component/DetailInfo';
import { Link } from 'react-router-dom';

function Page18() {
    return <div>
        <Header />
        <Article1
            keyword = {[
                <Keyword keyword={'TRAVEL'}/>,
                <Keyword keyword={'ACTIVITY'}/>,
                <Keyword keyword={'HISTORY'}/>,
                <Keyword keyword={'HOW-TO'}/>,
                <Keyword keyword={'BRAND'}/>,
                <Keyword keyword={'SPACE'}/>,
            ]}
            h2 = {'띵동! 서귀포 3~4월 캘린더'}
            p = {
                <>
                    바로 지금 서귀포행을 서둘러야 할 결정적 이유.  
                </>
            }
            tit = {'화사한 서귀포 미리 보기'}
            item = {
                <>
                    <div className='item'>
                        <h3>서귀포 하면 노랑노랑, 유채꽃 축제</h3>
                        <p>봄을 서둘러 부르는 유채꽃의 계절이 어김없이 왔어요. ‘가시리 유채꽃 축제’와 함께 생기를 듬뿍 얻어 가세요.</p>
                    </div>
                    <div className='item'>
                        <h3>벚꽃 엔딩은 3월 5주차</h3>
                        <p>{`올해는 이르게 벚꽃 구경하러 오세요. 웃물교와 위미리 벚꽃길, 예래생태공원 등 포토 스팟에서 골라 올해의 벚꽃 인생샷은 바로 내가!`}</p>
                    </div>
                </>
            }
        />
        <div className='flexColumn80'>
            <div className='inner innerFlex'>
                <ImgCap img={`/img/img_cal.jpg`} />
            </div>

            <div className='inner innerFlex'>
                <ConTit text={`인생은 타이밍, 봄꽃은 바로 지금! `} />
                <ImgCap img={`/img/img_86.jpg`} cap={`웃물교 @stonezero / 예래생태공원 @yuchaehui`} left />
                <Desc text={`올해 서귀포 내 벚꽃 개화 시기는 3월 22일경으로 예정되어 있어요. 대표 스팟은 예래생태공원, 웃물교, 위미리 벚꽃길 등인데요. 이 중 서흥동 웃물교는 하천을 기준으로 나누어진, 대략 1km의 가벼운 산책길이 안배되어 있어요. 벚꽃 하늘 아래 물길을 따라 걸으면서 하천 주변으론 유채꽃을 감상할 수 있죠. 이곳에선 벚꽃 비를 맞는 것이 포인트! 벚꽃이 막 피기 시작하는 3월 말보다는 벚꽃 엔딩의 출발점인 4월에 방문하는 걸 추천해요. 반면 ‘대왕수천예래생태공원’이 정확한 지명인 예래생태공원은 서귀포의 벚꽃 명소 중에서도 으뜸을 자랑해요. 아무리 가물어도 물이 줄지 않는 신비한 하천을 따라 팔을 활짝 편 거대 벚꽃 나무 아래 누구나 동화 속 주인공이 될 수 있죠. 제주 올레 8코스에 포함되니, 더욱 길게 계절의 축복을 만끽해도 좋겠어요. `} />
                <DetailInfo
                    info={
                        <>
                        <table>
                            <tr><th>웃물교 </th><td></td></tr>
                            <tr><th>WHERE </th><td>제주 서귀포시 서흥동 2053-2번지 일대 </td></tr>
                            <tr><th>WHEN </th><td>4월부터~ </td></tr>
                            <tr>
                                <th>PLUS</th>
                                <td>
                                    <a href='https://www.seogwipo.go.kr/local/seohong/main.html' target='_blank'>서흥동주민센터 바로가기</a>
                                    {/* <Link to='/Main'>서흥동주민센터 바로가기</Link> */}
                                </td>
                            </tr>
                        </table>
                        <table>
                            <tr><th></th></tr>
                            <tr>
                                <th>예래생태공원</th>
                            </tr>
                        </table>
                        <table>
                            <tr><th>WHERE </th><td>제주 서귀포시 상예동 5002-26</td></tr>
                            <tr><th>WHEN </th><td>3월 22일부터~</td></tr>
                            <tr><th>PLUS</th><td><a href='https://www.visitjeju.net/kr/detail/view?contentsid=CNTS_200000000008159' target='_blank'>예래생태체험관 바로가기</a></td></tr>
                        </table>
                        </>
                    }
                />
                <ImgCap img={`/img/img_87.jpg`} cap={`녹산로 @jjuuu_aaaaa`} left />
                <Desc text={`가슴이 뻥 뚫릴 드라이브를 원한다면 단연 표선면 가시리 녹산로 일대겠죠. 이미 ‘한국의 아름다운 길 100선’에도 선정되었을 정도로 검증된 명소예요. 이곳은 샛노란 카펫이 끝도 없이 펼쳐져요. 3월 30일~31일경 열리는 <서귀포 유채꽃 축제>에 맞춰 간다면, 노란색이 주는 자신감과 함께 플리마켓, 체험프로그램을 경험하며 2024년만의 추억을 아로새길 수 있을 거예요.  `} />
                <DetailInfo
                    info={
                        <table>
                            <tr><th>WHERE </th><td>제주 서귀포시 표선면 가시리 3149-33 </td></tr>
                            <tr><th>WHEN </th><td>3월 30일~</td></tr>
                            <tr>
                                <th>PLUS</th>
                                <td>
                                    <a href='https://www.seogwipo.go.kr/festivals/uchae/index.html' target='_blank'>서귀포 유채꽃축제 홈페이지</a>
                                </td>
                            </tr>
                        </table>
                    }
                />
            </div>

            <div className='inner innerFlex'>
                <ConTit text={`노지 문화와 덩실덩실 춤이라도 춰볼까`} />
                <ImgCap img={`/img/img_88.jpg`} cap={`서귀포봄맞이축제 @서귀포시문화도시센터`} left />
                <Desc text={`<서귀포봄맞이축제>는 한반도에서 가장 먼저 꽃이 피고 봄을 느낄 수 있는 서귀포 이중섭공원 일대를 중심으로 열리는 축제예요. 축제의 특장점은 바로 마을을 가장 잘 아는 시민이 주도하는 까닭에, 누구나 제주전통문화와 생태 환경에 자연스럽게 녹아 들어 즐길 수 있다는 점이죠. 서귀포의 봄꽃과 마을을 연결하는 이 노지 문화 축제만의 프로그램에 적극 참여해 보세요. 참꽃나무, 꽃나무 등 20여 종 2천 주를 축제 참가자에게 무료로 나눠 주는 ‘봄꽃나무 나눔 행사’와 진달래 화전 놀이 재현 등 이날이 아니면 제주에서 체험하기 어려우니까요. `}/>
                <DetailInfo
                    info={
                        <table>
                            <tr><th>WHERE </th><td>제주 서귀포시 서귀동 512-1 일대</td></tr>
                            <tr><th>WHEN </th><td>3월 15일~17일</td></tr>
                            <tr>
                                <th>PLUS</th>
                                <td>
                                    <a href='https://www.nojiculture.kr/culture-village/seogwipo-center.do' target='_blank'>서귀포시문화도시센터</a>
                                </td>
                            </tr>
                        </table>
                    }
                />
            </div>

            <div className='inner innerFlex'>
                <ConTit text={`비나이다, 3월의 별 헤는 밤 `} />
                <ImgCap img={`/img/img_89.jpg`} cap={`노인성 자리 @서귀포천문과학문화관`} left />
                <Desc text={`무병장수를 상징하는 별이 무엇인지 아나요? 바로 노인성이에요. 북반구에 위치한 지리적 특성상 우리나라에서는 쉽게 관측하기 어려운 별인데, 3월이면 그 기회가 열리는 유일한 한 곳이 있어요. 바로 <서귀포천문과학문화관>이죠. 월요일을 제외한 매일 오후 7시, 50분 가량 천체망원경으로 관측하는 프로그램이에요.  날씨가 짓궂을 시에는 관측이 불가할 수 있으니, 넓은 아량은 미리 준비하세요. `}/>
                <DetailInfo
                    info={
                        <table>
                            <tr><th>WHERE </th><td>제주 서귀포시 1100로 506-1 </td></tr>
                            <tr><th>WHEN </th><td>~ 3월 17일, 오후 7시~오후 10시, 월요일 휴무</td></tr>
                            <tr>
                                <th>PLUS</th>
                                <td>
                                    <a href='https://culture.seogwipo.go.kr/astronomy' target='_blank'>서귀포 천문과학문화관 홈페이지</a>
                                </td>
                            </tr>
                        </table>
                    }
                />
            </div>

            <div className='inner innerFlex'>
                <ConTit text={`노지 문화와 덩실덩실 춤이라도 춰볼까`} />
                <ImgCap img={`/img/img_90.jpg`} cap={`제주미술변천사 포스터 @기당미술관`} left />
                <Desc text={`봄이라고 문밖에만 관심이 쏠리나요? 그 변화무쌍한 계절의 추이에 질세라 제주 현대미술의 변화를 한눈에 꿰어놓은 자리가 있다는 소식이에요. 기당미술관에서 준비한 <제주미술변천사>에서는 제주 출신 작가와 제주에 애정을 품은 도외 작가의 작품을 한눈에 시간순으로 감상할 수 있어요. 총 30여 점의 작품은 생각의 폭을 넓히고 삶을 풍성하게 하는 예술의 가치를 발견하는 시간이 될 거예요. `}/>
                <DetailInfo
                    info={
                        <table>
                            <tr><th>WHERE </th><td>제주 서귀포시 서홍동 621</td></tr>
                            <tr><th>WHEN </th><td>3월 1일~ 5월 5일, 오전 9시~오후 6시, 매주 월요일 휴관</td></tr>
                            <tr>
                                <th>PLUS</th>
                                <td>
                                    <a href='https://culture.seogwipo.go.kr/gidang/index.html' target='_blank'>기당미술관</a>
                                </td>
                            </tr>
                        </table>
                    }
                />
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

export default Page18;