import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';
import ListGroup from '../component/ListGroup';
import ImgSlider from '../component/ImgSlider';
import Contents3 from '../component/Contents3';
import ConTit from '../component/ConTit';
import Desc from '../component/Desc';
import { Link } from 'react-router-dom';

function Page17() {

    const style1 = {
        marginTop : `36px`,
    }

    return <div>
        <Header />
        <Article1
            keyword = {[
                <Keyword keyword={'HISTORY'}/>,
                <Keyword keyword={'NEWS'}/>,
            ]}
            h2 = {`우리 이렇게 잘했어요, 숫자로 보는 2023 문화도시 서귀포`}
            p = {
                <>
                    숨은 곳곳에 문화로 등불을 밝힌 문화도시 서귀포의 활약상, 자랑 좀 하고 갈게요.
                </>
            }
            tit = {`문화도시 서귀포의 2023년 사업, 그 후`}
            item = {
                <>
                    <div className='item'>
                        <h3>모두에게 구석구석</h3>
                        <p>76개의 문화공간을 서귀포 방방곡곡에서 만날 수 있죠. 일상 속에서 문화예술을 즐길 기회가 많아져 시민들도 흡족했어요.</p>
                    </div>
                    <div className='item'>
                        <h3>미래 세대를 위한 노지문화 오래오래</h3>
                        <p>{`함께 어울리며 싱글벙글 웃음꽃이 터지는 이벤트가 지속되었어요. 문화 마켓 [놀멍장]과 한반도에서 가장 이른 봄을 맞이하는 마을 축제 [봄꽃하영이서], 기후 위기에 대한 새로운 접근법 [서귀포 기후예술프로젝트]까지 노지문화 성장은 현재 진행형이에요.`}</p>
                    </div>
                    <div className='item'>
                        <h3>시민의 목소리가 들려</h3>
                        <p>{`마을 주민의 목소리가 직접 반영돼요. [창의문화캠퍼스]와 [미래문화자산], 그리고 [문화원탁]에 이르기까지 시민이 직접 리더가 되어 프로젝트를 이끌어 갔죠. 사는 맛은 이런 거죠! `}</p>
                    </div>
                </>
            }
        />

        <div className='flexColumn80'>
            <div className='inner innerFlex greenBaseWrap'>
                <div className='flexColumn8'>
                    <ConTit text={`모두에게 구석구석`}/>
                    <p>소외되는 지역이 없도록 문화공간을 골고루 운영했어요. 문화 접근성이 높아지니, 서귀포 시민의 지역 만족도도 쭉쭉 올라갔죠.</p>
                </div>
                <div className='greenBase'>
                    <div className='flexColumn8'>
                        <p>우리 마을 가까이에서 즐기는 일상형 문화예술</p>
                        <h3>{`[마을라운지]`}</h3>
                    </div>
                    <div className='infoImg'>
                        <img src='/img/img_info_01.jpg' alt='infoImg' />
                        <img src='/img/img_info_02.jpg' alt='infoImg' />
                        <img src='/img/img_info_03.jpg' alt='infoImg' />
                    </div>
                    <div className='linkWrap' style={style1}>
                        <Link className='whiteLink' to='/Page11'>마을라운지 더보기</Link>
                    </div>
                </div>
            </div>

            <div className='inner innerFlex greenBaseWrap'>
                <div className='flexColumn8'>
                    <ConTit text={`미래 세대를 위한 노지문화 오래오래 `}/>
                    <p>문화도시 대표 로컬 브랜드를 구축하는데 힘썼어요. 마을과 시민이 주인공이 되어 지속 가능한 노지문화를 만들어가고 있어요.</p>
                </div>
                <div className='greenBase'>
                    <div className='flexColumn80'>
                        <div>
                            <div className='flexColumn8'>
                                <p>문화 소비자가 생산자가 되고,<br/>지역 경제가 활성화되는 선순환 로컬 문화 마켓</p>
                                <h3>{`[놀멍장]`}</h3>
                            </div>
                            <div className='infoImg'>
                                <img src='/img/img_info_04.jpg' alt='infoImg' />
                            </div>
                            <div className='linkWrap'>
                                <Link className='whiteLink' to='/Page11'>놀멍장 더보기</Link>
                            </div>
                        </div>
                        <div>
                            <div className='flexColumn8'>
                                <p>주민이 주도하는 마을 축제의 장.<br/>마을 방문객도 늘어나 거리가 들썩들썩.</p>
                                <h3>{`[봄꽃하영이서]`}</h3>
                            </div>
                            <div className='infoImg'>
                                <img src='/img/img_info_05.jpg' alt='infoImg' />
                            </div>
                            <div className='linkWrap'>
                                <Link className='whiteLink' to='/Page11'>봄꽃하영이서 더보기</Link>
                            </div>
                        </div>
                        <div>
                            <div className='flexColumn8'>
                                <p>기후예술 전시 및 컨퍼런스 등을 통해 기후 위기에 대응하는</p>
                                <h3>{`[서귀포 기후예술프로젝트]`}</h3>
                            </div>
                            <div className='infoImg'>
                                <img src='/img/img_info_06.jpg' alt='infoImg' />
                            </div>
                            <div className='linkWrap'>
                                <Link className='whiteLink' to='/Page11'>서귀포 기후예술프로젝트 더보기</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='inner innerFlex greenBaseWrap'>
                <div className='flexColumn8'>
                    <ConTit text={`미래 세대를 위한 노지문화 오래오래 `}/>
                    <p>문화도시 대표 로컬 브랜드를 구축하는데 힘썼어요. 마을과 시민이 주인공이 되어 지속 가능한 노지문화를 만들어가고 있어요.</p>
                </div>
                <div className='greenBase'>
                    <div className='flexColumn80'>
                        <div>
                            <div className='flexColumn8'>
                                <p>점점 늘어나는 지역 문화 기획자가 만들어 갈 문화도시의 빛나는 모습</p>
                                <h3>{`[창의문화캠퍼스]`}</h3>
                            </div>
                            <div className='infoImg'>
                                <img src='/img/img_info_07.jpg' alt='infoImg' />
                            </div>
                            <div className='linkWrap'>
                                <Link className='whiteLink' to='/Page11'>창의문화캠퍼스 더보기</Link>
                            </div>
                        </div>
                        <div>
                            <div className='flexColumn8'>
                                <p>지역친화상품을 기획하고 제작하는 노지문화실험가의 탄생</p>
                                <h3>{`[청년문화디자이너 프로젝트]`}</h3>
                            </div>
                            <div className='infoImg'>
                                <img src='/img/img_info_08.jpg' alt='infoImg' />
                            </div>
                        </div>
                        <div>
                            <div className='flexColumn8'>
                                <p>시민이 직접 발굴하는 서귀포 고유의 유・무형 문화자원</p>
                                <h3>{`[미래문화자산]`}</h3>
                            </div>
                            <div className='infoImg'>
                                <img src='/img/img_info_09.jpg' alt='infoImg' />
                            </div>
                            <div className='linkWrap'>
                                <Link className='whiteLink' to='/Page11'>미래문화자산 더보기</Link>
                            </div>
                        </div>
                        <div>
                            <div className='flexColumn8'>
                                <p>다양한 세대와 계층의 참여로,<br/>도시 의제를 발굴하고 문제 해결 방안을 제시하는</p>
                                <h3>{`[문화원탁]`}</h3>
                            </div>
                            <div className='infoImg'>
                                <img src='/img/img_info_10.jpg' alt='infoImg' />
                            </div>
                        </div>
                    </div>
                </div>
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

export default Page17;