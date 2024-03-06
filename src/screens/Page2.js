import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';
import Article3 from '../component/Article3';

function Page2() {
  return (
    <>
        <Header />
        <Article1
            tag = {
                <>
                    <div className='tag blue'>HISTORY</div>
                    <div className='tag green'>BRAND</div>
                    <div className='tag red'>PEOPLE</div>
                </>
            }
            h2 = {'네가 ‘찐’ 노지 브랜드를 알아?'}
            p = {
                <>
                    노지 브랜드가 뭐냐고 물으신다면. 제주 역사의 끈을 이어 자생적으로 성장해 온 브랜드라 비장하게 말합니다. 일단, 박수 백 번 시작! 
                </>
            }
            tit = {'노지 브랜드의 ‘알쓸신잡’ '}
            item = {
                <>
                    <div className='item'>
                        <h3>노지(老地) 아니고요, 노지(老智)</h3>
                        <p>노지(老智)는 ‘한적한, 옛날의’이란 의미의 노지(露智)로부터 발전한 개념이에요. 노포(老鋪)와 같은 노지(老地)가 아니라 노지(老智)! 노지 타령에 헷갈리면, ‘오랜 지혜가 살아 숨 쉰다.’는 의미로 받아들이면 돼요.</p>
                    </div>
                    <div className='item'>
                        <h3>장수하는 노지 문화를 널리 널리</h3>
                        <p>상갓집에서 대접하던 국수, 귤밭에서 사용하던 원통 바구니, 차례상에 올리던 상웨빵, 집마다 빚어 먹던 오메기술 등 제주 역사를 잇는 노지 문화를 상품화한 브랜드예요. </p>
                    </div>
                    <div className='item'>
                        <h3>할매니얼 트렌드에 자동 탑승</h3>
                        <p>오래된 것은 역시 ‘찐’이죠? 이 노지 브랜드와 함께 다른 방식으로 할매니얼 트렌드에 탑승해 봐요. 약과만 먹지 말고요. </p>
                    </div>
                </>
            }
        />

        <Article3
          em={'‘국수순이’ 위장의 팔 할'}
          tit={'&#60;동남제면공장&#62;의 ‘제주동남국수’'}
          img={'/img/img_art3_01.jpg'}
          p={<>국수의 본질은 역시나 면인데요. 제주 내 80%나 되는 유명 국수집이 이 면만 고집한다고 해요. 바로 면발 하나로 제주를 평정한 동남국수입니다. 50년째 국수외길을 걸어온 강성력 대표의 &#60;동남제면공장&#62;에선 오늘도, 길게, 탱탱한 면을 뽑아내고 있어요. <br />
          제주에는 초상집에서 국수를 대접하는 문화가 있습니다. 다른 지방에서는 결혼식 등 잔칫날에 국수를 대접하는 것과는 사뭇 다른 모습이죠? 제주동남국수는 이런 제주 문화를 기반으로 확장해 면 덕후를 위한 보양식으로 전통을 이어오고 있어요. <br />
          숨은 면 고수였던 제주동남국수가 최근 배우 조인성의 극찬으로 대중적인 본좌에 등극합니다. 자칭 면 마니아로 알려져 품절 대란이 일기도 했는데요. 소면과 소중면, 중면, 대면까지 입맛 따라 취향 따라 골라 먹어 보세요. 즐거움도 후루룩!</>} 
          location={'동남제면공장(성산읍 오조리 1038-2, 박스 구매만 가능), 제주도 내 일부 마트(하나로마트 대정ㆍ위미ㆍ성산일출봉ㆍ중문ㆍ안덕점, 제스코마트 제주점ㆍ서귀포점, 남제주할인마트 등)'}
          url={'https://smartstore.naver.com/gugsoo'}
          btn={'온라인 주문'}
        />

        <Article3
          em={'바구니를 빙자한 캠퍼의 다목적'}
          tit={'<대건상회>의 ‘밀감 바구니’'}
          img={'/img/img_art3_02.jpg'}
          p={<>
            오일장에서 40년간 터를 잡고 있는 장인(최윤용 대표)이 손으로 직접 만드는 밀감 바구니가 여기 왔어요. 원형은 노지 귤밭에서 수확할 때 어깨에 메고 다니며, 수확한 귤을 담던 바로 그 원통이에요. 튼튼한 데다가 버려지는 비료 포대와 고무관을 활용해 새롭게 변신한 친환경 업사이클링 제품입니다. <br />
            귤을 수확할 일 없(어 참으로 좋겠)는 젊은이들에게 이 바구니는 캠핑 테이블로도 활용할 수 있어요. 바구니 안에 와인이나 음식을 담거나 양은쟁반 뚜껑을 덮어 테이블로 사용하면 2 in 1 캠핑장의 ‘핵인싸’로 부상할 수 있죠.  <br />
            온라인 주문도 가능하지만, 전 제품은 제주 전통 오일장에서만 만날 수 있어요. 커피 원두 포대, 동백무늬 천을 씌운 디자인 등 다양한 종류가 있어 고르는 맛도 쏠쏠해요. 서귀포향토오일장(4ㆍ9일)과 대정오일장(1ㆍ6일), 제주시민속오일장(2ㆍ7일)에 이르기까지, 여행의 필수 코스인 오일장 구경을 하면서 득템의 기회를 누려 보아요. 
          </>} 
          location={'대정오일장(서귀포시 대정읍 하모리 1089-20), 서귀포향토오일장(서귀포시 동홍동 779-1), 제주시민속오일장(제주시 도두1동  1212)'}
          url={'https://smartstore.naver.com/jejumilgambaguni'}
          btn={'온라인 주문'}
        />

        <Article3
          em={'빵 덕후의 손이 자꾸만 가네'}
          tit={'<하례점빵>의 ‘상웨빵’ '}
          img={'/img/img_art3_03.jpg'}
          p={<>
            제주의 제사상이나 차례상에는 카스텔라나 롤케이크 같은 빵이 올라가는데요. 참으로 달콤하죠? 그 기원은 바로 상웨빵에서 찾을 수 있어요. 상웨빵은 밀가루 반죽에 쉰다리나 막걸리를 넣어 발효시킨 제주 전통 빵이에요. 누군가는 빵이라 하고, 누군가는 떡이라 부르고, 상외빵, 상애떡 등 그 이름도 너무 많고요. 빵과 떡, 그 우주적인 중간 어디쯤이라 해야 할지도 모르겠어요. <br />
            &#60;하례점빵&#62;은 하례리 마을 주민들이 의기투합한 ‘하례감귤점빵협동조합’이 운영해요. 이곳의 상웨빵은 동글동글한 찐빵 모양으로 만들어져요. 소가 아무것도 들어가지 않은 기본 맛부터 감귤맛, 한라봉맛, 쑥맛까지 까다로운 입맛마저 사로잡고 있죠. 그냥 먹어도 맛있고, 기본 빵은 반으로 갈라 샌드위치나 햄버거처럼 자체 커스터마이징해 먹어도 잘 어울려요. <br />
            마을 공동체를 생각하는 마음과 하례의 자랑 감귤, 그리고 제주의 전통이 만나 만들어진 &#60;하례점빵&#62;의 상웨빵. 이거 지속 가능한 브랜드에 늘 나오는 모범 답안 아닌가요?  
          </>} 
          location={'하례점빵(하례리 738-12)'}
          url={'https://haryeshop.kr/product'}
          btn={'온라인 주문'}
        />

        <Article3
          em={'귀한 탁주 한 사발'}
          tit={'<술 다끄는 집>의 ‘오메기술’ '}
          img={'/img/img_art3_04.jpg'}
          p={<>
            오메기떡은 들어봤어도, 오메기술이 있다고요? 그 오메기떡으로 빚어내는 제주 전통술이 바로 오메기술이에요. 좁쌀로 오메기떡을 빚어 으깨고, 누룩을 넣어 발효시키면 술이 돼요. 쌀이 귀했던 제주는 쌀을 대체하는 곡식을 활용한 음식이 많은데요(택시 기사님 왈, 제주에선 반찬은 남겨도 밥은 남기지 말라고 해요). 오메기술도 그런 음식 중 하나예요. ‘오메기’는 제주말로 ‘오목하다.’란 뜻으로, 좁쌀로 오목한 모양의 떡을 빚어 그걸로 술을 빚기 때문에 붙여진 예쁜 이름이에요.<br />
            이제 서귀포의 옛 정취를 간직한 성읍민속마을 내로 들어가 봅니다. 제주 유일의 오메기술 장인이 이끄는 작업실 겸 양조장 &#60;술 다끄는 집&#62;이 살고 있어요. ‘다끄다.’는 ‘빚다.’의 제주어로, 제주 무형문화재 3호인 강경순 명인이 이곳에서 술을 ‘다끄고’ 있죠. 완제품은 이곳을 찾는 방문자에게만 조금씩 내어주고 있답니다. <br />
            방문한 김에 직접 오메기술을 빚는 체험을 해도 좋겠어요. 걸쭉하면서 부드러운 맛의 오메기술이 완성되기까지 술 빚는 이야기와 서귀포의 찐 문화가 구수하게 퍼져 나갑니다. 탁주 한 사발에 시름 뚝, 낭만은 척!
          </>} 
          location={'술 다끄는 집(표선면 성읍리 883)'}
          url={'https://eataround.co.kr/trip-jejuCsth/?idx=28'}
          btn={'체험 신청 온라인 예약'}
        />

        <Recommend
            tit={<>이 콘텐츠를 좋아하면,<br/>이것도 좋아해요.</>}
            recoCard={[
                <RecoCard 
                    img = {'/img/img_rec_01.jpg'}
                    keyword = {[
                        <Keyword keyword={'NEWS'}/>,
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
    </>
  );
}

export default Page2;
