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

function Page13() {
    return <div>
        <Header />
        <Article1
            keyword = {[
                <Keyword keyword={'TRAVEL'}/>,
                <Keyword keyword={'ACTIVITY'}/>,
                <Keyword keyword={'HOW-TO'}/>,
                <Keyword keyword={'PEOPLE'}/>,
                <Keyword keyword={'BRAND'}/>,
                <Keyword keyword={'SPACE'}/>,
            ]}
            h2 = {'지구는 누가 지키나? 내가!'}
            p = {
                <>
                    “Idea is nothing, doing is everything!” 생각은 그만- 우리집인 지구를 청소하고 가꾸는 행동을 내가 먼저 시작해요.
                </>
            }
            tit = {'지구를 위한 작지만, 큰 행동 TAKE3'}
            item = {
                <>
                    <div className='item'>
                        <h3>TAKE1 무결한 바다를 위한 행동!</h3>
                        <p>프리다이빙을 즐기며 해양에 떠다니는 쓰레기를 수거하는 활동인 플로빙(Ploving). 다이빙도 배우고 지구 정화에 한 발짝, 뿌듯함은 우리 몫이에요. </p>
                    </div>
                    <div className='item'>
                        <h3>TAKE2 일회용품 줄이기를 위한 행동!</h3>
                        <p>{`기부 받은 텀블러로 테이크아웃을 실천 중인 <알맞은 시간>. 지구의 순환에 앞장 서는 진정한 제로웨이스트와 함께 해요. `}</p>
                    </div>
                    <div className='item'>
                        <h3>TAKE3 생태계 보전을 위한 행동!</h3>
                        <p>{`동물학자들이 운영하는 카페 <유인원>에서 동물과 인간의 공존법에 대해 오감으로 체험해 보세요. `}</p>
                    </div>
                </>
            }
        />

        <div className='inner innerFlex'>
            <ConTit text={`<난바다 프리다이브>와 해양 쓰레기 싹, 싹쓸이`} />
            <ImgCap img={`/img/img_58.jpg`} cap={`@hyemini_jeju`}/>         
            <Desc text={`플로빙(Ploving)이란 단어, 들어보았죠? ‘이삭을 줍다.’는 의미를 가진 스웨덴어 ‘플로가우프(plocka up)’와 ‘프리다이빙’(freediving)의 합성어예요. 프리다이빙을 즐기며 해양 쓰레기를 수거하는 활동을 이르죠. 플로빙 단체 ‘플로빙 코리아’에서 ‘1 DIVE 1 WASTE’를 슬로건으로 지속적인 해양 정화활동을 목적으로 처음 고안해 냈는데요. 다이버들 사이에선 다이빙을 즐기는 동시에 바다 환경까지 지키는 가치로 자리매김하면서 점점 퍼져 나가고 있어요. `} />
            <ImgCap img={`/img/img_59.jpg`} cap={`프리다이버로 활동 중인 전혜민 강사. @hyemini_jeju`} left/>
            <Desc text={`서귀포 위미항 근처에 있는 다이빙 커뮤니티 공간이자 게스트하우스 <난바다 프리다이브>에선 플로빙을 실천할 기회가 있어요. 이곳 프리다이버 강사이자 해녀인 전혜민 대표는 KBS 환경스페셜 <독도평전>, SBS 특집 다큐멘터리 <고래와 나>에도 출연하는 등 제주 바다에서만 10년 넘게 다이빙해 온 배테랑 중 배테랑인데요. 계절이나 위치에 따른 시야, 수온과 조류, 수중 지형 등 제주 바다에 대한 탄탄한 정보를 갖고 있어 좀 더 능동적인 수중 정화에 함께할 수 있어요. 다이빙에 관심만 있는 초보자라면 이 전혜민 강사에게 체계적으로 강습 받고 참여해 보세요. 별도로 이미 능숙한 다이버라면 누구나 ‘플로빙코리아’를 통해 신청 후 활동할 수도 있어요. `} />
            <ImgCap img={`/img/img_60.jpg`} cap={`지난 2023년 대평항 해안가 주변 및 수중 정화 활동에 참여. @im9354(naver blog)`} left/>

            <DetailInfo
                info={
                    <table>
                        <tr><th>WHERE</th><td>서귀포시 남원읍 위미리 2869-1</td></tr>
                        <tr><th>PLUS</th>
                            <td>
                            <a href='https://www.instagram.com/hyemini_jeju/' target='_blank'>난바다 프리다이브 게스트하우스 인스타그램</a>
                            <br/>
                            <a href='https://ploving.co.kr' target='_blank'>플로빙 코리아 홈페이지</a>
                            </td>
                        </tr>
                    </table>
                }
            />
        </div>

        <div className='inner innerFlex'>
            <ConTit text={`텀블러가 돌고 돌고, <알맞은 시간>`} />
            <ImgCap img={`/img/img_65.jpg`}/>         
            <Desc text={`‘제로웨이스트’는 말 그대로 쓰레기를 만들지 않는 생활방식이죠. 재활용 이전에 애초부터 폐기물을 차단하는(!) 방법이에요. 개인이 아닌 식음료를 판매하는 영업장에서 이를 실천하는 일이란 예상만큼 쉽지 않은 일인데요. 2019년 문을 연 이래 꾸준히 제로웨이스트를 핵심 가치로 삼은 곳이 있어요. 바로 카페 <알맞은 시간>이에요.`} />
            <ImgCap img={`/img/img_66.jpg`} cap={`오픈 당시부터 대표인 부부가 제로웨이스트를 실천 중인 카페. `} left/>
            <Desc text={`<알맞은 시간>은 감귤 창고인 옛 형태 그대로를 살린 남원읍 신흥리의 한적한 카페인데요. 이름도 곱습니다. 머무는 손님이 ‘알맞은 시간’을 누리며 행복을 느끼길 바라는 마음에서 지어졌어요. 공간 자체도 서로에게 방해되지 않도록 대화도, 음악도 잔잔하게 흐르는 분위기예요. 더욱 의미 있는 건 진정한 제로웨이스트를 위해 빨대나 디저트 박스 등 기타 일회용품도 일절 사용하고 있지 않다는 점이죠. 그렇다면 테이크아웃은 어떻게 할까요?`} />
            <ImgCap img={`/img/img_66.jpg`} cap={`기증받은 텀블러나 빈 병, 물통 등.`} left/>
            <Desc text={`개인적으로 텀블러를 갖고 있지 않을 시, <알맞은 시간>만의 특별한 방법이 눈길을 끌어요. 일회용 컵 대신 기증받은 텀블러나 물통을 활용해 보증금 3천원을 내면 테이크아웃이 가능하죠. 누구나 집에서 사용하지 않는 것을 기증할 수도 있어요. 최초 기증에 한해 커피 한 잔과도 교환할 수 있으니, 집에 쌓아 있는 텀블러로 득템의 기회를 잡아도 좋겠어요. `} />
            <ImgCap img={`/img/img_68.jpg`} cap={`중고 물품을 자유롭게 거래하는 ‘알맞은 시장’.`} left/>
            <Desc text={`<알맞은 시간>에서는 고집스럽게 일회용품 줄이기를 실천하면서, 연말에는 작은 이벤트를 열기도 해요. 작년부터 중고 물품을 거래하는 ‘알맞은 시장’이에요. 뜻을 모은 마을 지인들과 함께 옷, 그릇, 빈티지 소품 등을 팔고 사는 현장이죠. 중고 제품을 1만원 이상 구매하면 아메리카노도 무료! 지난 첫 시장이 성공적으로 열려 매년 연말 파티 겸 중고 거래 시장을 진행할 계획이에요. 꿋꿋한 지구 지키기의 신념을 응원하며 커피 한 잔, 더불어 올해 연말 방문도 기대해 봐요. `} />
            <DetailInfo
                info={
                    <table>
                        <tr><th>WHERE</th><td>서귀포시 남원읍 신흥앞동산로35번길 2-2</td></tr>
                        <tr><th>WHEN</th><td>오전 10시~오후 6시, 금요일 휴무</td></tr>
                        <tr><th>PLUS</th><td><a href='https://www.instagram.com/egg_hit_time/ ' target='_blank'>@egg_hit_time</a></td></tr>
                    </table>
                }
            />
        </div>

        <div className='inner innerFlex'>
            <ConTit text={`카페 <유인원>을 통해 동물과 안녕할 결심`} />
            <ImgCap img={`/img/img_61.jpg`} />         
            <Desc text={`참 특별하죠? 서귀포에 동물과 생태에 관심을 가진 연구자, 일반인을 두 팔 벌려 환영하는 카페가 있어요. 우리 인간도 한 종의 유인원이며, 자연의 일부로 함께 들어와 있다는 의미를 담은 <유인원>이에요. 이곳 대표는 유인원과 곤충을 연구한 동물학자로서, 연구를 위해 생태 가까이 아지트처럼 꾸몄죠. 카페는 생태예술 전시실과 연구자의 서재, 연구자의 응접실로 구성되어 있어요. `} />
            <ImgCap img={`/img/img_62.jpg`} cap={`카페 <유인원>의 공동대표는 동물인지행동학과 행동생태학을 전공한 동물학자들이다.`} left/>
            <Desc text={`<유인원>은 최근 JTBC 드라마 <웰컴투 삼달리>의 돌핀 센터의 배경이 되어 더욱 유명해진 곳인데요. 드라마의 인기도 인기지만, 동물학자인 두 대표가 진행하는 ‘도슨트 프로그램’을 듣기 위해 방문객이 줄을 잇고 있어요. 이 프로그램에선 실제 동물학자가 연구하는 방식과 필드 스테이션(야생에서 동물을 연구하는 공간)이 무엇인지 알고, 나뉜 실내 공간에 얽힌 이야기를 들을 수 있어요. <유인원>이 주변 생물들과 함께 살아가기 위해 꾸민 마당을 들러 생물 관찰 기록을 체험하고 돌아와 생명과 생태계를 연구하고 보전하는 비영리 기관들이 제작한 소품과 교구를 둘러봐요. 더불어 연구자의 취향을 엿볼 특별한 기회를 얻을 수 있죠. 이 프로그램을 통해 비건과 제로웨이스트에 굳은 결심을 다졌다는 후기가 이어지니, 그만큼 환경에 관한 영감을 주는 곳임엔 틀림없어요. `} />
            <ImgCap img={`/img/img_63.jpg`} cap={`<유인원>의 도슨트 프로그램 진행 중.`} left/>
            <ImgCap img={`/img/img_64.jpg`} cap={`카페 <유인원> 내 연구자의 취향이 묻어나는 서재.`} left/>
            <Desc text={
                <>
                    카페에선 일회용품 역시 사용하지 않아요. 다회용 빨대나 수건 등 동물과 인간의 공존에 대한 배려가 곳곳에 묻어나죠. ‘도슨트 프로그램’을 따로 신청하지 않더라도 카페 내부를 자유로이 둘러 볼 수 있고, 마당에선 곤충의 집이나 새들을 위한 목욕탕 등 자연과 교감하는 시간을 보내기 좋아요. <a href='https://bit.ly/49Qm9Zm' target='_blank'>도슨트 프로그램 예약</a>은 심지어 무료라는 자비로운 소식도 전해요. 
                </>
            } />
            <DetailInfo
                info={
                    <table>
                        <tr><th>WHERE</th><td>서귀포시 대정읍 무릉리 933-14</td></tr>
                        <tr><th>WHEN</th><td>오전 11시~오후 6시</td></tr>
                        <tr><th>PLUS</th><td><a href='https://www.instagram.com/uio.fieldstation/' target='_blank'>@uio.fieldstation</a></td>
                        </tr>
                    </table>
                }
            />
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

export default Page13;