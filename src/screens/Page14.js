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

function Page14() {

    const person1 = <><b className='red'>부경철 </b></>
    const person2 = <><b className='blue'>서미정 </b></>

    return <div>
        <Header />
        <Article1
            keyword = {[
                <Keyword keyword={'ACTIVITY'}/>,
                <Keyword keyword={'HISTORY'}/>,
                <Keyword keyword={'PEOPLE'}/>,
                <Keyword keyword={'BRAND'}/>,
                <Keyword keyword={'SPACE'}/>,
            ]}
            h2 = {'대정에서 온 남자, 성산에서 온 여자 part1. 서귀포에 취한 젊음의 기록'}
            p = {
                <>
                    한라산을 가로질러 70.5km 거리, 서쪽 끝 대정에서 온 남자와 동쪽 끝 성산에서 온 여자가 만났을 때.
                </>
            }
            dis = {'displayNone'}
        />


        <div className='flexColumn80'>
            <div className='inner'>
                <div class="profileCardWrap">
                    <div class="profileCard red">
                        <em>대정에서 온 남자</em>
                        <h4>{`<이시보> 부경철 대표`}</h4>
                        <img src='/img/img_profile_01.png' alt='img'/>
                        <ul>
                            <li>{`대정읍 신도리 <이시보>에서 직접 농사지은 쌀로 술을 빚으며 청춘을 갈고 닦는 중`}</li>
                            <li>{`서울에서 실용음악과 졸업 후 음악을 하다가 고향인 제주로 돌아온 열정의 사나이`}</li>
                            <li>{`술을 빚고 판매하는 것뿐만 아니라 양조장과 마을을 둘러보는 투어까지 진행하느라 몸이 두 개라도 모자랄 지경`}</li>
                        </ul>
                    </div>
                    <div class="profileCard blue">
                        <em>성산에서 온 여자</em>
                        <h4>{`<언타이틀보틀샵> 서미정 대표`}</h4>
                        <img src='/img/img_profile_02.png' alt='img'/>
                        <ul>
                            <li>{`성산읍 오조리 <언타이틀보틀샵>에서 취향의 술을 소개하고 판매하는 즐거움에 푹 빠져있는 중`}</li>
                            <li>{`서울에서 광고 기획자로 일하다가 제주로 내려와 잡화점 오픈, 잡화점 리모델링 후 보틀샵으로 변경한 멋진 언니`}</li>
                            <li>{`반려동물과 집사의 이야기를 담는 팟캐스트 <니나귀> 편집자로서 부캐 능력도 탄탄`}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='inner innerFlex'>
                <ImgCap img={`/img/img_69.jpg`} cap={`대정과 성산의 중간점, 한라산 근방 상효동에서의 만남. 소개팅 아니고 인터뷰 현장이에요.`} left/>
                <div className='flexColumn36'>
                    <div className='flexColumn8'>
                        <ConTit text='부경철 대표는 음악을 하다가 술을 만들고, 서미정 대표는 현 보틀샵을 운영하기 전에 광고 기획자로 일했어요. 두 분 모두 기존과 전혀 다른 일을 하고 있는데요. 결정적인 계기가 있었는지요?' />
                        <Desc name={person1} text={`전 20대 중반까지 하던 음악을 통해 직접적으로 영감을 주고 싶었어요. 돈벌이가 영 안되어서, 도무지 버틸 수 없어 제주도로 내려왔죠. 제 인생 목표는 ‘영감을 주는 사람’이에요. 음악으로 안된다면, 다른 방식은 없을까 고민했죠. 그런 와중에 반 고흐나 헤밍웨이, 에이미 와인하우스 등 아티스트가 술을 대체로 좋아하더라고요. 자기 브랜드의 양조장을 갖는 게 워너비인 사람도 많고요. 내가 음악으론 못했지만, 아티스트에게 영감을 주는 술은 만들 수 있지 않을까? 그게 첫 시작이었어요. `}/>
                    </div>
                    <div className='flexColumn8'>
                        <ConTit text='처음엔 어떤 식으로 술을 만드셨나요?' />
                        <Desc name={person1} text={`일단 인터넷으로 술 만드는 방법을 찾아보면서 직접 만들어봤어요. 집에서 술을 만드니, 되게 신기하더라고요. 이게 술이 된다고? 밥을 지어서 거기에 누룩만 넣었을 뿐인데, 술이 돼요. 심지어 맛있어! 점점 호기심이 커졌고, 본격적으로 지원 사업에 참여하거나 교육도 많이 받으면서 차차 나아갔어요. `}/>
                        <Desc name={person2} text={`집에서 할머니가 술을 빚지 않으셨어요?`}/>
                        <Desc name={person1} text={`네, 맞아요. 우리 증조할머니도 직접 술을 만드셨어요. `}/>
                    </div>
                    <div className='flexColumn8'>
                        <ConTit text='사진 없나요? 되게 궁금하네요, 역사일 텐데.'/>
                        <Desc name={person1} text={`영정 사진만….(일동 숙연) 그때가 제주4.3 즈음이어서 현재 남은 사진은 없고요. 대신 할아버지 구전을 통해 배웠어요. 안 그래도 내년까지 증조할머니 술을 복원하는 걸 목표로 삼고 있어요. 오메기술부터 출시하고, 증류소를 건설한 뒤에 고소리술까지 만드는 걸 생각하고 있어요. `}/>
                    </div>
                </div>
            </div>
            <div className='inner innerFlex'>
                <ImgCap img={`/img/img_70.jpg`} />
                <div className='flexColumn36'>
                    <div className='flexColumn8'>
                        <ConTit text='서미정 대표는 제주도에 내려와 잡화점을 운영하다가 보틀샵으로 변경했는데, 원래 술을 좋아했던 건가요?' />
                        <Desc name={person2} text={`서울에서 웹 디자인, 광고 기획 일을 할 때도 술을 원래 좋아한 편이었어요. 친구끼리 제철에 맞는 과일로 술을 담기도 했고요. 그런데 막상 제주도에 오니, 그때처럼 술을 같이 즐길 사람이 없더라고요. 새로운 술을 마시다가 소개하고 싶은 마음이 커져 친구들이 올 때마다 하나 둘 설명하는데 흥미를 붙였죠. 상대도 만족하는 모습을 보니, 보틀샵을 운영해 봐도 좋겠다 싶었어요. 8년 전부터 제주에 흔하지 않은 잡화점을 운영 중이었는데, 체인점도 늘고 희귀성이 사라지면서 오히려 업종을 바꿀 기회가 되었어요. 현재 보틀샵에선 술에 집중해 위스키와 와인, 그리고 제주 전통주를 취급하고 있어요. 주변에서 요즘 제 얼굴이 좋아졌다는 걸 보니….(웃음) 만족하고 있어요. `}/>
                    </div>
                    <div className='flexColumn8'>
                        <ConTit text='원하는 것이 있으면 일단 시도해 보는 스타일인 가봐요.'/>
                        <Desc name={person2} text={`남이 보기엔 원하대로 하는 편이라 생각할 수 있겠지만, 사실 시작하기 전까지 자료 조사를 통해 가능 여부를 고민하고 점검해요. 무작정 저지르는 편은 아닌 거죠. 측근으로부터는 오히려 준비를 너무 많이 한다는 이야기를 들을 정도니까요. 제 기준에서 할 수 있다는 확신이 서야 시작하는 편이에요.  `}/>
                    </div>
                </div>
            </div>
            <div className='inner innerFlex'>
                <ImgCap img={`/img/img_71.jpg`} />
                <div className='gap12'>
                    <a className='blueLink' href='https://www.instagram.com/shootingsta_r/ ' target='_blank'>{`동쪽 [언타이틀보틀샵 구경가기]`}</a>
                    <a className='blueLink' href='https://www.instagram.com/isibo_brewery/' target='_blank'>{`서쪽 [이시보 구경가기]`}</a>
                </div>
                <div className='flexColumn36'>
                    <div className='flexColumn8'>
                        <ConTit text='서귀포란 지리적 위치에서 새로운 일에 부딪히면서 겪는 장단점이 있겠죠? ' />
                        <Desc name={person2} text={`아무래도 물류가 비행기나 배를 통해 오기 때문에, 서울은 물론 육지보다 가격적인 장점은 떨어지는 편이에요. 유통 자체가 어려운 술도 있고요. 그래도 지금 거래하는 업체 대표 대부분 술에 진심이어서인지, 새로운 술에 대한 정보나 프로모션, 시음회 같은 것을 주기적으로 권해주고 있어요.  `}/>
                        <Desc name={person1} text={`저는 브랜드 홍보에 유리한 듯해요. 증조할머니의 역사가 있고, 지역적 특색을 설명할 수 있거든요. 이시보 양조장이 있는 대정읍은 제주도에서 제일 넓은 평야지역인데, 직접 벼를 키우는 밭에서 수확한 쌀로 이시보 막걸리를 만들어요. 양조장에 방문하면 엄청나게 쌓아둔 쌀 포대를 볼 수 있죠. 1년 치를 수확해 볍씨로 보관하다가 필요할 때마다 도정해서 쓰는 스토리 라인을 설명해 줘요. 반면, 단점은 양조장에서 사적으로 바비큐 파티를 한 후겠죠. 제주에 산다면 누구나 느끼는 불편이겠지만, 다른 마을 친구들이 집으로 돌아가기가 어려워요. 여건만 된다면 양조장에 숙소를 지어도 좋겠다 싶을 정도죠. `}/>
                    </div>
                </div>
            </div>
            <div className='inner innerFlex'>
                <ImgCap img={`/img/img_72.jpg`} cap={`안주 먹을 시간도 없게 하는 이시보 막걸리. @서담채`} left/>
                <div className='flexColumn36'>
                    <div className='flexColumn8'>
                        <ConTit text='사는 곳도 일터에서 가깝죠? 직접 운영하다 보니, 일과 여가의 분리가 쉽지 않을 듯해요. 워라밸이란 개념이 통하고 있는지요? ' />
                        <Desc name={person1} text={`완전 통합식이죠. 술 마시면서 술 빚고, 놀다가도 일 있으면 하고, 일하다가도 친구가 부르면 나가는 식이에요. 이 스타일이 제게 맞는지, 막 힘들다는 느낌은 없어요. 원하는 대로 스케줄을 조종할 수 있어 좋죠. 오늘도 인터뷰 끝나고 들어가서 병입해야 되는데…(웃음)`}/>
                    </div>
                    <div className='flexColumn8'>
                        <ConTit text='아, 직원 없이 손수 모든 작업을 하는 건가요?' />
                        <Desc name={person1} text={`술 생산은 100% 제 손을 다 거쳐요. 가족들은 농사만 도와주고요. 말하자면 1차 산업은 가족과 함께, 2, 3차 산업은 저 혼자 하는 셈입니다. `}/>
                    </div>
                    <div className='flexColumn8'>
                        <ConTit text='미정 대표는 출퇴근의 개념이 확실한 편인지요? ' />
                        <Desc name={person2} text={`샵 운영 시간이 있으니까 그런 편이죠. 새롭거나 재밌는 술은 조금씩 시음을 권하면서 근무 시간을 지켜요. 퇴근 후엔… 퇴근했으니까 마셔야 하잖아요(웃음). 집 자체를 친구들과 어우러지게끔 응접실처럼 꾸며놓았어요. 제가 좋아하는 커피를 내려주기도 하죠. 주로 가게에서나 쓰는 ‘피처 린서(컵을 빠르게 씻을 수 있는 세척기)’도 있답니다. 최근에는 나라에서 하는 ‘주조기능사’ 자격증에 도전하고 있어요. 필기는 통과했고, 실기를 준비하고 있죠. 저는요, 나라에서 인정한 ‘술말러’가 될 거예요(웃음). 추후 카페와 바의 개념이 잘 결합된 공간을 만드는 게 꿈 중 하나이기도 해요.`}/>
                    </div>
                </div>
            </div>
            <div className='inner innerFlex'>
                <div>
                    <ImgCap img={`/img/img_73.jpg`}/>
                    <ImgCap img={`/img/img_74.jpg`} cap={`<언타이틀보틀샵>은 ‘재미있게 마시자!’를 모토로 운영한다. @서미정`} left/>
                </div>
                <div className='flexColumn36'>
                    <div className='flexColumn8'>
                        <ConTit text='서미정 대표는 ‘니나귀(니 새끼 나도 귀엽다)’의 팟캐스트 편집자라는 부캐로도 활동 중인데, 어떻게 시작한 건지요?' />
                        <Desc name={person2} text={`팟캐스트는 함께 사는 한카피 님이 시작한 거예요. 우리는 고양이 한 마리, 개 두 마리의 집사이기도 해요. 2020년 5월부터 했으니, 햇수로 4년 차가 되었네요. 전 2주에 한 번씩 방송 편집만 맡고 있어요. ‘니나귀’는 제주도에 사는 동물 친구와 집사들을 만나 인터뷰 형식으로 진행하는, 내 새끼 자랑 프로그램이에요. 출연 조건이 좀 독특한데, 주인이나 동물 친구들이 유명하면 안돼요. 자기 나름의 마음가짐과 노하우를 전하는, 그 작은 목소리를 들으려고요. 다양하고 성숙한 반려동물 문화를 만들어가면 좋겠어요. `}/>
                    </div>
                    <div className='flexColumn8'>
                        <ConTit text='서귀포가 반려동물 키우기에 괜찮은 환경이라고 생각하나요? ' />
                        <Desc name={person2} text={`아직 유기견도, 1미터 목줄 개도 많은 편이에요. 강아지와 사는 입장에서는 보기 힘들죠. 자연에서 강아지와 산책하긴 좋지만, 여전히 반려동물이란 인식이 부족한 편이라 생각해요. 강아지를 산책할 때마다 동네 어르신이 여전히 화를 내거든요. 자기 밭을 파헤쳤다는 등 무조건 피해를 준다는 생각은 여전한 듯해요. `}/>
                    </div>
                </div>
            </div>

            <div className='inner innerFlex'>
                <ImgCap img={`/img/img_75.jpg`} cap={`천혜의 자연에서 반려동물과 산책 중. @서미정`} left />
                <ImgCap img={`/img/img_76.jpg`} cap={`술은 요리 보고 조리 봐도 사랑스럽다. @서담채`} left/>
                <div className='flexColumn36'>
                    <div className='flexColumn8'>
                        <ConTit text='부캐로 말하자면, 부경철 대표의 이시보 양조장 투어도 빠질 수 없을 텐데요. 보통 어떤 식으로 진행하고 있나요? ' />
                        <Desc name={person1} text={`국내 양조장 견학을 하면 보통 내부만 둘러보고 시음한 뒤 끝나는 경우가 많아요. 혹은 술빚기 체험 정도인데, 좀 아쉽더라고요. 저는 해외 와이너리처럼 투어를 진행하고 싶었어요. 일단, 양조장의 뒷산에 올라갑니다. 전망대에서 논을 내려다보면서 평야 지역인 주변 환경을 소개해요. 내려오면서 진지동굴에 들러 제 어린 시절 이야기도 들려주고요. 이후 양조장에서 술 빚는 이론을 알려드리고 술 빚기 체험과 시음을 이어가요. 3~4시간 정도 소요되죠. 지역과 술 이야기가 함께 묶이는 투어예요. `}/>
                    </div>
                    <div className='flexColumn8'>
                        <ConTit text='여건이 된다면 좀 더 추가로 진행하고 싶은 게 있는지요? ' />
                        <Desc name={person1} text={`밭의 흙 냄새도 맡고, 쌀과 지게미(술을 거르고 남은 찌꺼기)까지 직접 본다면 좋겠죠. 술의 전 과정을 직접 눈으로 보고 향도 맡으면서 여러 감각이 만족하는 투어가 되면 좋겠어요. 아이디어가 좀 더 확고해져 진행한다면, 현 양조장 근처에서 콤플렉스 형태로 할 계획이에요. 마을을 벗어나면 그 장점이 사라지니까요. `}/>
                    </div>
                </div>
                <div className='gap12'>
                    <a className='blueLink' href='https://podbbang.page.link/yb1yF6Q7ZDrSqTBJA' target='_blank'>{`팟캐스트 니나귀 들어보기`}</a>
                    <a className='blueLink' href='https://eataround.co.kr/trip-jeju/?idx=81' target='_blank'>{`이시보 양조장과 마을 투어하기`}</a>
                </div>
            </div>

            <div className='inner flexColumn20 pushContents'>
                <p>
                    두 청년의 밀도 높은 이야기는 대정에서 온 남자, 성산에서 온 여자 part2.<br/>
                    우리 마을로 들어와, ‘드루와’!로 이어집니다. 
                </p>
                <Link className='yellowLink' to='/Page15'>2편 보러가기</Link>
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

export default Page14;