import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Contents4 from '../component/Contents4';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';
import ImgSlider from '../component/ImgSlider';

function Page10() {
    return <div>
        <Header />
        <Article1
            keyword = {[
                <Keyword keyword={'TRAVEL'}/>,
                <Keyword keyword={'HISTORY'}/>,
                <Keyword keyword={'HOW-TO'}/>,
                <Keyword keyword={'PEOPLE'}/>,
                <Keyword keyword={'SPACE'}/>,
            ]}
            h2 = {'힙하게 변했어요, 공간의 재탄생'}
            p = {
                <>
                    이곳이 이렇게? 과거에 묻힐 뻔한 공간이 현대적인 미감을 덧입고 오늘의 이야기를 만들어 가고 있어요. 이토록 힙한 재생이라니. 
                </>
            }
            tit = {'제주 스타일 재생 공간을 대하는 자세'}
            item = {
                <>
                    <div className='item'>
                        <h3>살아 있는 역사 학습터로</h3>
                        <p>서귀포의 장대한 옛 역사를 상상해 보세요. 과거 번성했던 산업 이야기와 지난 생활상을 떠올리면 지금 머무는 공간의 가치가 두 배로! </p>
                    </div>
                    <div className='item'>
                        <h3>단 하나뿐인 이색 건축을 찰칵</h3>
                        <p>과거와 현재의 매력적인 공존으로, 세상에 단 하나뿐인 공간이에요. 셔터를 누를 때마다 안게 되는 유일무이한 감동에 빠져 보세요. </p>
                    </div>
                    <div className='item'>
                        <h3>시그니처 메뉴로 부탁해요</h3>
                        <p>카페의 경우 제주를 안고 탄생한 만큼 시그니처 메뉴가 있어요. 늘 ‘아아’ 스타일이라도 여기에서만큼은 다른 미식을 즐겨 봐요. </p>
                    </div>
                </>
            }
        />

        <Contents4
            tit = {`‘서귀포돌집 1호’가 빛난다, <감저카페>`} 
            imgSlide1 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_09.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_10.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_11.jpg' alt='slideImg'/></div>
                        ]}
                    />
                </div>
            }
            desc = {`1964년 고구마 전분 공장이었던 이곳은 2018년 서귀포시가 지정한 ‘서귀포돌집 1호’예요. 모슬포에서 서귀포 방향으로 가는 길목, 산방산의 웅장한 경치를 감상하기 딱 좋은 지점의 규모 있는 돌 창고죠. 감저는 고구마의 제주어로, 논농사가 전무하다시피 했던 제주에서 고구마는 사람들의 주식이었어요. 고구마 전분을 생산하던 감저 공장은 섬 전역에 수십 곳이 있었지만, 1980년대 이후 도약한 관광 산업과 감귤 농사의 보급화로 주요 소득원이 바뀌며 차츰 사라졌죠. 현재 공장의 건조장과 창고는 각각 카페와 갤러리로 나뉘는데, 공간 곳곳 과거를 추억하게 해요. 공간 중심에 놓인 전분 만들던 기계는 흡사 설치 작품을 방불케 하고, 김재우 대표가 꺼내 놓는 사진 역시 감저 공장의 번성했던 지난날을 불러옵니다. ‘장애 예술가와 멘토의 전시’ 같은 고심의 흔적이 역력한 프로그램은 물론 건물 외관의 야성미 넘치는 담쟁이넝쿨, 제주산으로 만든 메뉴 등 복합 문화 공간다운 요소를 잘 들여다보고, 충분히 즐기세요.`}
            info = {
                <table>
                    <tr><th>WHERE</th><td>서귀포시 대정읍 대한로 22</td></tr>
                    <tr><th>WHEN</th><td>오전 10시 30분~오후 6시 30분, 월요일 휴무 </td></tr>
                    <tr><th>PRICE</th><td>감저 시그니처 커피 6천5백원, 고구마 라테 5천원</td></tr>
                    <tr><th>PLUS</th><td><a href="https://www.instagram.com/rkawjcafe/ " target='_blank'>@rkawjcafe</a></td></tr>
                </table>
            }
            imgSlide2 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_09.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_09.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
            imgSlide3 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_12.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_12.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
        />

        <Contents4
            tit = {`입맛을 쩝쩝 다시게 하는 <라바르>`} 
            imgSlide1 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_13.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_14.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_15.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
            desc = {<>
                멀찌감치서 알아볼 수밖에 없는 붉은 굴뚝은 다시금 서귀포시 중앙동의 랜드마크가 될 듯한데요.<br />
                굴뚝 밖으로 김이 모락모락 피어오르는 풍경이 연상되는 이곳은 1971년 서귀포에 처음 문 연 ‘온천탕’이 뿌리입니다. 할머니가 운영하던 온천탕을 손주가 이어받아 현대적인 복합 문화 공간으로 재탄생시켰죠. 1~3층 규모의 실내는 각각 카페, 아트숍, 와인바 등으로 이어집니다. 파도를 모티브 삼은 벽면의 디자인이 인상적인데, 온천탕의 시작과 끝, 순환의 의미를 담아 표현한 거예요. 카페의 핵심은 역시 온천탕의 정체성을 간직한 욕탕입니다. 귤이 떠오르는 노란 타일 바닥과 바다를 닮은 푸른 욕탕의 타일은 묘하게 입맛을 다시게 하죠. 그도 그럴 것이 이미 단골 사이에선 브런치 메뉴 맛집으로 소문이 자자해요. 아트숍은 부정기 전시 프로그램으로 운영되는데, 구체적인 정보는 인스타그램에서 확인하는 게 좋습니다. 3층 테라스에 연결된 4층 루프톱에선 한라산과 바다, 서귀포시 중앙동 일대를 감상할 수 있을 뿐 아니라 사각 프레임 중앙에 ‘온천’이 새겨진 굴뚝을 놓고 촬영할 포인트가 있으니 놓치지 마세요. 
            </>}
            info = {
                <table>
                    <tr><th>WHERE</th><td>서귀포시 중앙로 13</td></tr>
                    <tr><th>WHEN</th><td>오전 9시~오후 10시, 연중무휴 </td></tr>
                    <tr><th>PRICE</th><td>바질 잠봉 샌드위치 1만1천원, 롱블랙 커피 6천원</td></tr>
                    <tr><th>PLUS</th><td><a href="https://www.instagram.com/lavarr.jeju/" target='_blank'>@lavarr.jeju</a></td></tr>
                </table>
            }
            imgSlide2 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_13.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_13.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
            imgSlide3 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_16.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_16.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
        />

        <Contents4
            tit = {`섬에 관한 충실한 기록, <자연사랑미술관>`} 
            imgSlide1 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_17.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_18.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_19.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
            desc = {<>
                자연사랑미술관의 전신 ‘가시초등학교’는 1946년 12월 5일 가시공립초등학교로 개교, 2001년 2월 26일 제40회 졸업식을 끝으로 폐교했어요. 학교가 다시 문을 연 시기는 2003년, 사진가 서재철에 의해 사진 전문 갤러리로 돌아온 까닭입니다. 1960년대부터 섬 풍경과 사람들, 생활 모습 등을 지속적으로 사진에 담아온 서재철 관장은 한라산의 망가진 생태를 고발한 사진으로 1993년 한국기자상 기획보도부문상을 받기도 했어요. ‘자연 사랑’이라는 공간 이름대로 실내가 충실합니다. 학교의 옛 모습을 보존하기 위해 교실 나무 바닥을 살렸고, 복도에는 풍금과 책걸상이 마치 작품 혹은 오브제처럼 놓여 있어 발길을 세워요. 다녀간 관람객 사이에 가장 많이 회자하는 것은 역시나 서재철 사진가의 옛 포구, 해녀, 원도심 변화를 기록한 사진 작품인데요. 매일 사진을 찍는 그의 성실함 덕분에 섬의 사라져가는 것들이 고스란히 담겼을 뿐 아니라 독보적인 미술관으로 만날 수 있게 됐어요.
            </>}
            info = {
                <table>
                    <tr><th>WHERE</th><td>서귀포시 표선면 가시로613번길 46지도</td></tr>
                    <tr><th>WHEN</th><td>오전 10시~오후 5시 </td></tr>
                    <tr><th>PRICE</th><td>성인 3천원, 도민 2천원, 초·중·고생 1천원</td></tr>
                    <tr><th>PLUS</th><td><a href="http://hallaphoto.com" target='_blank'>http://hallaphoto.com</a></td></tr>
                </table>
            }
            imgSlide2 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_17.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_17.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
            imgSlide3 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_20.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_20.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
        />

        <Contents4
            tit = {`심장 박동수처럼 뛰는 예술, <빛의 벙커>`} 
            imgSlide1 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_21.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_22.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_23.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
            desc = {`2018년 서귀포 성산엔 그야말로 ‘빅이슈’가 있었습니다. 바로 국내 최초의 몰입형 복합 문화 예술 공간이 개관한 소식이었는데요. 클림트, 고흐, 모네 등 독창적인 스타일을 가진 아티스트의 작품을 빛과 음악, 첨단 디지털 기술을 접목한 미디어 아트 전시로 만나는 기회였죠. 개관 당시부터 제주 작가와의 기획 전시를 예고했던 <빛의 벙커>에서는 얼마 전 이왈종 화백을 첫 번째 국내 작가로 선정해 또 한 번의 큰 놀라움을 안겼어요. 이 벙커는 해저 광케이블 통신망 운영을 위해 조성됐고, 규모는 약 900평에 달하는 축구장 절반 정도예요. 오랜 시간 공개되지 않았던 벙커에 ‘빛 시리즈’가 내리쬐니, 연간 100만 명의 관람객이 찾는 명소로 자리매김했죠. 이 몰입형 미디어아트 컨셉은 제주에 오기 전 파리, 뉴욕, 암스테르담 등 세계 8개 도시의 공장과 창고, 폐교 등 옛 산업 시설이나 역사적 유휴 공간에서 진행된 고유한 콘텐츠라 더욱 가치 있게 다가와요. 봄기운 실려 오는 3월 22일, <빛의 벙커>의 다섯 번째 ‘샤갈, 파리에서 뉴욕까지(Chagall, Paris-New York)’가 개막해요. 얼리버드 티켓 예매는 벌써 시작되었어요. `}
            info = {
                <table>
                    <tr><th>WHERE</th><td>서귀포시 성산읍 서성일로1168번길 89-17</td></tr>
                    <tr><th>WHEN</th><td>{`오전 10시~오후 6시 20분(*입장 마감 오후 5시 30분)`}</td></tr>
                    <tr><th>PRICE</th><td>{`성인 1만8천원, 도민 1만2천6백원, 유아(36개월 미만) 무료`}</td></tr>
                    <tr><th>PLUS</th><td>
                        <a href="https://www.deslumieres.co.kr/bunker" target='_blank'>https://www.deslumieres.co.kr/bunker</a>
                        <a href="https://www.instagram.com/bunkerdelumieres/" target='_blank'>@bunkerdelumieres</a>
                    </td></tr>
                </table>
            }
            imgSlide2 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_21.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_21.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
            imgSlide3 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_24.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_24.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
        />

        <Contents4
            tit = {`제주의 오늘이 생중계, <인스밀>`} 
            imgSlide1 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_25.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_26.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_27.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
            desc = {`서귀포 대정읍 일과리, 무릉리는 보리, 마늘, 양배추 등 작물을 골고루 재배해 온 이른바 서귀포의 곡창 지대예요. 서귀포에서 모슬포 방향으로, 대정읍에 진입하는 길목에서 강렬한 첫인상을 전하는 마늘 표식이 이를 뒷받침하는데요. 일과리의 마을길에 굽이 들어가면 오래된 곡물 창고를 개조한 <인스밀>이 나와요. 옛 보리 방앗간의 푸근한 감성을 근간에 둔 이곳은 마당을 비롯해 곳곳에 조형물처럼 드리운 야자수의 이국적인 풍경이 여행의 들뜬 설렘을 배가시키죠. 전신인 창고의 높은 층고를 비롯해 과감하게 낸 기다란 유리창, 농원을 방불케 하는 야자수 군락, 바닥에 깔린 화산송이, 손때 묻은 구덕(바구니), 절구 등의 오브제까지, 눈 닿는 곳마다 제주다운 미감이 넘실대요. 실내에서도 제주의 오늘이 스타일리시하게 생중계되어 셔터 누르기에 바쁜 이들로 연신 북적이죠. 이곳의 대표 메뉴는 ‘보리개역’으로, 제주 사람들의 여름 음료이자 보리를 갈아 만든 일종의 미숫가루예요. 곡물 창고였던 공간에 맴도는 정겨움을 따라 입가에 남는 그 구수한 맛과 멋에 흠뻑 빠져 보세요. `}
            info = {
                <table>
                    <tr><th>WHERE</th><td>서귀포시 대정읍 일과대수로27번길 22</td></tr>
                    <tr><th>WHEN</th><td>오전 10시~오후 8시</td></tr>
                    <tr><th>PRICE</th><td>보리개역 7천원, 바닐라빈 라테 7천원</td></tr>
                    <tr><th>PLUS</th><td><a href="https://www.instagram.com/ins_mill/" target='_blank'>@ins_mill</a></td></tr>
                </table>
            }
            imgSlide2 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_25.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_25.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
            }
            imgSlide3 = {
                <div className='reactSlick'>
                    <ImgSlider
                        obj = {[
                            <div><img src='/img/slide_28.jpg' alt='slideImg'/></div>,
                            <div><img src='/img/slide_28.jpg' alt='slideImg'/></div>,
                        ]}
                    />
                </div>
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

export default Page10;