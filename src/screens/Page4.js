import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Contents2 from '../component/Contents2';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';

function Page4() {
    return <div>
        <Header />
        <Article1
            keyword = {[
                <Keyword keyword={'ACTIVITY'}/>,
                <Keyword keyword={'TRAVEL'}/>,
                <Keyword keyword={'PEOPLE'}/>,
            ]}
            h2 = {`체험은 역시 ‘현장빨’`}
            p = {`블루라이트 압박의 비대면 수업보다 오감을 자극하는 현장 체험이 자양강장제. 서귀포에서 아니면 만나기 어려움. `}
            img = {
                <>
                    <div className='keyImg'><img src='/img/img_art4_01.jpg' alt="img" /></div>
                </>
            }
            tit = {`서귀포 체험 끝판왕 사용법`}
            item = {
                <>
                    <div className='item'>
                        <h3>제주살이의 속성 편으로</h3>
                        <p>바다를 보며 다리 찢기, 제철 재료로 도시락 만들기 등 체험을 통해 로컬의 제주살이를 속성으로 경험할 수 있어요. 로컬과 주옥같은 수다를 떨어봐요. </p>
                    </div>
                    <div className='item'>
                        <h3>시간은 엄수, 예약은 필수</h3>
                        <p>이참에 계획형 인간이 되어 보아요. 예약 시각을 지키는 에티켓은 기본이죠? 당일 예약도 가능한 체험이 있으니, 예약하기 버튼 꾸욱.</p>
                    </div>
                    <div className='item'>
                        <h3>반려 취미로 삼을 기회</h3>
                        <p>체험은 처음이라고요? 오히려 환영이에요. 자기 취향이 아니라고요? 시도해 보세요! 한 번의 좋은 체험이 평생의 취미로 이어질 기회를 놓치지 말아요. </p>
                    </div>
                </>
            }
        />
        
        <Contents2 
            cate = {<div className='cate YOGA'>YOGA</div>}
            contTit = {`익숙함과 새로움 사이, <오피스제주 사계점>`}
            // dog = {false}
            // kiz = {false}
            obs = {false}
            img1 = {`/img/img_15.jpg`}
            caption1 = {'@서담채'}
            desc1= {`혹시 영화 <비포 선셋>, <비포 선라이즈>를 본 적 있나요? 서귀포의 드넓은 바다 앞에서 하늘을 향해 몸을 쭈욱, 쭉! 섶섬을 바라보는 자구리 공원에선 영화보다 더욱 영화 같은 야외 요가 클래스가 열려요. 일출과 일몰 무렵 시시각각 변하는 하늘이 더욱 특별한 시간을 만들어주죠. 자연의 태동과 함께 평소 의식하지 못한 몸 구석구석의 감각이 살아나는 기분입니다. 실력에 상관 없이 남녀노소 모두 참여할 수 있어요. 참여자의 수준에 맞게 동작을 지도해주는 맞춤형 클래스인 까닭이죠. `}
            img2 = {`/img/img_16.jpg`}
            caption2 = {`@https://blog.naver.com/tnwls4041`}
            desc2= {`요가 매트는 자체 준비되고, 몸을 움직이기 편한 복장만 잘 갖추면 준비 완료입니다. 본격적인 요가는 1시간가량 진행되지만, 그 전후로 시간 여유를 두길 권해요. 요가 전 차 한 잔, 요가 후 사진 촬영이란 별책부록이 있거든요. 마무리가 오늘 배운 동작들로 남겨보는 인생샷이에요. 바다와 야자수, 그리고 그 안에 멋진 내 모습이라니, 아- 순간은 영원할 수 있어요. `}
            info = {
                <table>
                    <tr><th>WHERE</th><td>모든 객실은 2인 이상, 혼자 이용 시 더욱 호사스러운 추억이 됨.</td></tr>
                    <tr><th>WHEN</th><td>선라이즈 요가 오전 7~8시, 선셋 요가 오후 5~6시, 1시간여 진행 </td></tr>
                    <tr><th>HOW</th><td><a href="#" target="_blank">https://naver.me/5Flb85ef</a></td></tr>
                    <tr><th>TIPS</th><td>당일 예약 가능, 우천 시나 야외 요가가 불가능한 상황 시 실내 진행 </td></tr>
                    <tr><th>PLUS</th><td><a href="#" target='_blank'>@jagurimoon</a></td></tr>
                </table>
            }
            etc
        />

        <Contents2 
            cate = {<div className='cate FOOD'>FOOD</div>}
            contTit = {`줄 서는 대신 요리 밀담, <제주일상식탁> 쿠킹 클래스`}
            // dog = {false}
            kiz = {false}
            // obs = {false}
            img1 = {`/img/img_17.jpg`}
            caption1 = {'@서담채'}
            desc1= {`유명 맛집 앞에서 줄 서는 수고를 요리 클래스에 쏟아 봅니다. 제주 식재료로 다양한 요리를 창조해 내는 제주음식연구가의 손맛을 배울 기회예요. 쿠킹 스튜디오 <제주일상식탁>에서는 매월 네 번째 목요일에 두 가지 클래스가 번갈아 가면서 열려요. 제주 식재료를 재해석해 현대적인 음식을 만드는 ‘색다른 제주 테이블’ 클래스와 제주 향토 음식을 배우는 ‘차롱도시락’ 클래스가 그 주인공이죠.`}
            img2 = {`/img/img_18.jpg`}
            caption2 = {`@이더라운드`}
            desc2= {<>
                ‘색다른 제주 테이블’ 클래스는 제주산 제철 식재료를 활용해 한식부터 중식, 일식, 양식 등 경계를 넘나들어요. 계절마다 가장 맛있는 해산물과 고기, 채소를 활용해 메뉴는 매번 달라지죠. 컨셉은 말만 들어도 기분 좋은, ‘수고스럽지 않으면서 근사한 요리’예요. 좋은 식재료를 고르는 법부터 구매하기 좋은 곳, 재료 손질법까지 프로의 꿀팁이 쏟아진답니다. 반면, ‘차롱도시락’ 클래스는 소풍 기분을 한껏 내보는 기회가 주어져요. ‘차롱’은 본래 대나무를 엮어 만든 제주 전통 바구니로, 음식을 담아 도시락으로 활용하기도 했죠. 전복 주먹밥, 뿔소라꼬지 등 10종류의 메뉴가 오밀조밀하게 담긴 도시락은 각자 챙겨갈 수 있어요. 둘이 나눠 먹어도 모자라지 않은 푸짐한 양에서 서귀포 인심을 다시 한번 느끼게 돼요. <br />
                모든 클래스는 직접 실습하는 것이 아니라 선생님의 시연을 통해 설명을 듣고, 묻고 답하는 시간으로 이뤄져요. 그리고 귀하게 만들어진 음식을 감사히 먹습니다. 집으로 돌아가 제공되는 레시피로 직접 요리에 도전해 보세요. 혼자 먹기에 아까워 모임 만들 핑계를 찾을지도 모를 일이에요. (그리고 제주도 그리워해 주기!)
            </>}
            info = {
                <table>
                    <tr><th>WHERE</th><td>서귀포시 남원읍 위미리 49-14</td></tr>
                    <tr><th>WHEN</th><td>매월 네 번째 목요일 오전 11시~오후 1시30분, 2시간 30분여 진행</td></tr>
                    <tr><th>HOW</th><td><a href="https://linktr.ee/jejuilsangsiktak" target="_blank">https://linktr.ee/jejuilsangsiktak</a></td></tr>
                    <tr><th>TIPS</th><td>3일 전까지 예약 가능 </td></tr>
                    <tr><th>PLUS</th><td><a href="#" target='_blank'>@jeju.ilsangsiktak</a></td></tr>
                </table>
            }
            etc
        />

        <Contents2 
            cate = {<div className='cate TEA'>TEA</div>}
            contTit = {`차와 꽃, 그리고 큰 위로, <알레올레 할머니의 차방>에서 티타임`}
            // dog = {false}
            // kiz = {false}
            obs = {false}
            img1 = {`/img/img_19.jpg`}
            caption1 = {'@서담채'}
            desc1= {`꽃은 계절을 가장 먼저 알리는 전령이 되곤 해요. 알록달록 꽃잎을 보는 것만으로도 좋은데, 차방지기 할머니와 좋은 차를 함께 마신다면 더 천국이겠죠. <알레올레 할머니의 차방>에서는 할머니가 직접 키우고 말린 꽃으로 만든 꽃차와 함께 나긋나긋한 대화를 나누는 시간이 마련돼요. 차방은 80세 넘은 할머니 집의 거실, 정원이 보이는 창가에 마련된 테이블에 초대받는데요. 계절마다 다른 꽃차 3종류를 시음할 수 있어요. 카페인이 없어 부담 없이 즐길 수 있죠.`}
            img2 = {`/img/img_20.jpg`}
            caption2 = {`@제주일상식탁`}
            desc2= {`꽃차 소믈리에 자격증을 딴 할머니의 차 설명에 감동, 차와 어울리는 구절판 다식에 흐뭇함. 벚꽃, 수국, 동백 등 1년 내내 꽃을 만나는 창밖 할머니의 정원과 삶의 여유를 찾은 할머니의 지혜가 어우러지면서 입은 내내 영락없는 반달 모양이 돼요. 크나큰 위로를 받았다는 후기 역시 지속할 예정입니다. 참, 대화가 불편하지 않으려는 배려 차원에서 시간당 한 팀만 예약을 받고 있어요. 나를 오롯이 꺼내보는 지극히 사적인 대화, 지금 우리에게 필요한 게 아닐지요?`}
            info = {
                <table>
                    <tr><th>WHERE</th><td>서귀포시 상효동 1408-6</td></tr>
                    <tr><th>WHEN</th><td>매일 오전 8시, 오전 10시 30분, 오후 1시 30분, 일요일은 오후만, 1시간 30분여 진행</td></tr>
                    <tr><th>HOW</th><td><a href="https://eataround.co.kr/trip-jeju/?idx=49" target="_blank">https://eataround.co.kr/trip-jeju/?idx=49</a></td></tr>
                    <tr><th>TIPS</th><td>1일 전까지 예약 가능 </td></tr>
                    <tr><th>PLUS</th><td><a href="#" target='_blank'>@allezolle</a></td></tr>
                </table>
            }
            etc
        />

        <Contents2 
            cate = {<div className='cate DRAWING'>DRAWING</div>}
            contTit = {`어라, 내가 그림에 재능이 있네? <주주스튜디오> 아트 클래스`}
            // dog = {false}
            // kiz = {false}
            obs = {false}
            img1 = {`/img/img_21.jpg`}
            caption1 = {'@주주스튜디오'}
            desc1= {`<주주스튜디오>는 그래픽 디자이너이자 일러스트레이터인 전현주 작가의 쇼룸이자 작업실이에요. 들어서자마자 없던 영감까지 샘솟게 하는 이곳에선 꾸덕꾸덕한 질감의 오일파스텔로 그림을 그리는 시간이 주어져요. 작가가 옆에서 꼼꼼히 지도하니, 똥손이라 해도 걱정 붙들어 매세요. 재료의 특성과 기본 사용법을 담은 클래스 안내 책자는 물론 색을 스스로 조합해 보는 컬러 팔레트 종이 모두 제공되니까요. 내게 이런 재능이 있었나 싶을 정도로, 조금만 따라 해도 금세 멋들어진 결과물을 낼 수 있답니다. `}
            img2 = {`/img/img_22.jpg`}
            caption2 = {`@주주스튜디오`}
            desc2= {`내 마음을 편하게 해주는 것은 무엇일까요? 그림의 소재는 마음이 편안해지는 일상과 자연의 순간이에요. 2시간이 어느 새 쏜살같이 지났다는 걸 깨달을 거예요. 스스로 그린 원화 작품을 소유하는 것은 물론 추후 디지털 파일로도 받을 수 있어요. 미다스의 손인 선생님이 보정까지 해서 깔끔하게 보내줍니다.`}
            info = {
                <table>
                    <tr><th>WHERE</th><td>서귀포시 대정읍 하모리 1415-1, 1층</td></tr>
                    <tr><th>WHEN</th><td>매주 화, 금 오전 11시~오후 1시</td></tr>
                    <tr><th>HOW</th><td><a href="https://www.joojoostudio.com/oneday" target="_blank">https://www.joojoostudio.com/oneday</a></td></tr>
                    <tr><th>TIPS</th><td>당일 예약 불가, 지정된 시간 외 별도 조정 가능, 키즈 클래스 별도 문의</td></tr>
                    <tr><th>PLUS</th><td><a href="#" target='_blank'>@illustrator.joojoo</a></td></tr>
                </table>
            }
            etc
        />

        <Contents2 
            cate = {<div className='cate CRAFT'>CRAFT</div>}
            contTit = {`블링블링 내 집 안의 오색 빛깔, <글라스무브먼트 스튜디오> 스테인드글라스 클래스`}
            // dog = {false}
            // kiz = {false}
            // obs = {false}
            img1 = {`/img/img_23.jpg`}
            caption1 = {'@글라스무브먼트스튜디오'}
            desc1= {`반짝반짝, 색유리를 통과하는 빛의 영롱함을 누려볼까요? 인테리어 소품으로 기막힌 스테인드글라스 체험이에요. <글라스무브먼트 스튜디오>는 핀란드 유리공예와 순수 회화를 전공한 두 작가가 운영하는 스테인드글라스 스튜디오예요. 원데이 클래스에선 키링이나 모빌, 액세서리 트레이 등 원하는 소품을 만들 체험이 기다리고 있어요. 소재가 다양하고, 아이도 함께할 기회도 주어지죠.`}
            img2 = {`/img/img_24.jpg`}
            caption2 = {`@@글라스무브먼트스튜디오`}
            desc2= {`도안부터 완성까지 전 과정은 작가의 지도에 의해 스스로 실전에 투입돼요. 무엇을 만들지, 어떤 느낌으로 만들지 컨셉을 정하고, 미리 도안을 구상하죠. 직접 고른 색유리 조각을 자르고, 그라인딩해서 다듬은 후 납땜하는 작업을 통해 완성합니다. 체험 전 스스로 담고 싶은 이야기와 감성이 무엇인지 미리 구상해 보는 것도 좋겠어요. 세상에서 단 하나뿐인 서귀포산 기념품. 선물이라면 더더욱 의미 있겠죠?`}
            info = {
                <table>
                    <tr><th>WHERE</th><td>서귀포시 중문동 1457-6</td></tr>
                    <tr><th>WHEN</th><td>매일 오전 10시~오후 6시, 작품 종류와 개인차에 따라 1~3시간 여 소요</td></tr>
                    <tr><th>HOW</th><td><a href="https://naver.me/G3hEi1hd" target="_blank">https://naver.me/G3hEi1hd</a></td></tr>
                    <tr><th>TIPS</th><td>당일 예약 가능</td></tr>
                    <tr><th>PLUS</th><td><a href="#" target='_blank'>@glassmovement_studio</a></td></tr>
                </table>
            }
            etc
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

export default Page4;