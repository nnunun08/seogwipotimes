import React from "react";
import Header from "../component/Header";
import Tab from "../component/Tab";
import Keyword from "../component/Keyword";

function Main() {

    return(
        <div className="mainBg">
            <Header />
            <div className="visual">
                <div className="keyVisualWrap">
                    <div className="keyVisual">
                        <div className="imgWrap">
                            <img src='/img/img_mainTimes.png' alt='img'/>
                        </div>
                        <div className="mainObj mainObj1"><img src='/img/img_mainObj1.png' alt='img'/></div>
                        <div className="mainObj mainObj2"><img src='/img/img_mainObj2.png' alt='img'/></div>
                        <div className="mainObj mainObj3"><img src='/img/img_mainObj3.png' alt='img'/></div>
                        <div className="mainObj mainObj4"><img src='/img/img_mainObj4.png' alt='img'/></div>
                        <div className="mainObj mainObj5"><img src='/img/img_mainObj5.png' alt='img'/></div>
                        <div className="mainObj mainObj6"><img src='/img/img_mainObj6.png' alt='img'/></div>
                        <p>진짜 제주다운 ‘제주의 얼굴’을 함께 나눠요. <br />105개 마을에서 노지 스타일을 즐기면서 발견하는, 리미티드 에디션형 스토리.</p>
                        <b>지금 시작합니다.</b>
                    </div>
                </div>
            </div>

            <div className="linkMap">
                <div className="inner innerFull">
                    <div className="tray">
                        <div className="tit">어떤 이야기가 궁금한가요?</div>
                        <Tab
                            keyword={[
                                <Keyword keyword={'ACTIVITY'} ac={``}/>,
                                <Keyword keyword={'HOW-TO'} ac={``}/>,
                                <Keyword keyword={'PEOPLE'} ac={``}/>,
                                <Keyword keyword={'BRAND'} ac={``}/>,
                                <Keyword keyword={'HISTORY'} ac={``}/>,
                                <Keyword keyword={'NEWS'} ac={``}/>,
                                <Keyword keyword={'MAP'} ac={``}/>,
                                <Keyword keyword={'SPACE'} ac={``}/>,
                                <Keyword keyword={'TRAVEL'} ac={``}/>,
                            ]}
                        />
                    </div>
                </div>
            </div>

            <div className="mainContents">
                <div className="inner innerFull">
                    <div className="item">
                        <div className="big">
                            <div className="keyword">
                                <Keyword keyword={'ACTIVITY'}/>
                                <Keyword keyword={'HOW-TO'}/>
                                <Keyword keyword={'PEOPLE'}/>
                            </div>
                            <div className="tit">서귀포의 숨은 소식과</div>
                            <p className="desc">서귀포 문화도시의 지식 충전하고 광명찾기</p>
                            <div className="imgWrap"><img src='/img/img_mainBig01.jpg' alt='img'/></div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="small">
                            <div className="textWrap">
                                <div className="keyword">
                                    <Keyword keyword={'NEWS'}/>
                                    <Keyword keyword={'HOW-TO'}/>
                                    <Keyword keyword={'PEOPLE'}/>
                                </div>
                                <div className="tit">신비와 활기 사이, 신효ㆍ하효마을</div>
                                <div className="desc">효돈동이란 지붕 아래 내륙과 바다를 넘나들며 흐드러진 귤꽃의 향연. 달고 싱그럽고, 또 신비로워요.</div>
                            </div>
                            <div className="imgWrap"><img src='/img/img_mainSmall01.jpg' alt='img'/></div>
                        </div>
                        <div className="small">
                            <div className="textWrap">
                                <div className="keyword">
                                    <Keyword keyword={'BRAND'}/>
                                    <Keyword keyword={'ACTIVITY'}/>
                                </div>
                                <div className="tit">신비와 활기 사이, 신효ㆍ하효마을</div>
                                <div className="desc">효돈동이란 지붕 아래 내륙과 바다를 넘나들며 흐드러진 귤꽃의 향연. 달고 싱그럽고, 또 신비로워요.</div>
                            </div>
                            <div className="imgWrap"><img src='/img/img_mainSmall02.jpg' alt='img'/></div>
                        </div>
                        <div className="small">
                            <div className="textWrap">
                                <div className="keyword">
                                    <Keyword keyword={'NEWS'}/>
                                    <Keyword keyword={'HISTORY'}/>
                                    <Keyword keyword={'NEWS'}/>
                                </div>
                                <div className="tit">신비와 활기 사이, 신효ㆍ하효마을</div>
                                <div className="desc">효돈동이란 지붕 아래 내륙과 바다를 넘나들며 흐드러진 귤꽃의 향연. 달고 싱그럽고, 또 신비로워요.</div>
                            </div>
                            <div className="imgWrap"><img src='/img/img_mainSmall03.jpg' alt='img'/></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainContents reverse">
                <div className="inner innerFull">
                    <div className="item">
                        <div className="big">
                            <div className="keyword">
                                <Keyword keyword={'ACTIVITY'}/>
                                <Keyword keyword={'HOW-TO'}/>
                                <Keyword keyword={'PEOPLE'}/>
                            </div>
                            <div className="tit">서귀포의 숨은 소식과</div>
                            <p className="desc">서귀포 문화도시의 지식 충전하고 광명찾기</p>
                            <div className="imgWrap"><img src='/img/img_mainBig02.jpg' alt='img'/></div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="small">
                            <div className="textWrap">
                                <div className="keyword">
                                    <Keyword keyword={'NEWS'}/>
                                    <Keyword keyword={'HOW-TO'}/>
                                    <Keyword keyword={'PEOPLE'}/>
                                </div>
                                <div className="tit">신비와 활기 사이, 신효ㆍ하효마을</div>
                                <div className="desc">효돈동이란 지붕 아래 내륙과 바다를 넘나들며 흐드러진 귤꽃의 향연. 달고 싱그럽고, 또 신비로워요.</div>
                            </div>
                            <div className="imgWrap"><img src='/img/img_mainSmall01.jpg' alt='img'/></div>
                        </div>
                        <div className="small">
                            <div className="textWrap">
                                <div className="keyword">
                                    <Keyword keyword={'BRAND'}/>
                                    <Keyword keyword={'ACTIVITY'}/>
                                </div>
                                <div className="tit">신비와 활기 사이, 신효ㆍ하효마을</div>
                                <div className="desc">효돈동이란 지붕 아래 내륙과 바다를 넘나들며 흐드러진 귤꽃의 향연. 달고 싱그럽고, 또 신비로워요.</div>
                            </div>
                            <div className="imgWrap"><img src='/img/img_mainSmall02.jpg' alt='img'/></div>
                        </div>
                        <div className="small">
                            <div className="textWrap">
                                <div className="keyword">
                                    <Keyword keyword={'NEWS'}/>
                                    <Keyword keyword={'HISTORY'}/>
                                    <Keyword keyword={'NEWS'}/>
                                </div>
                                <div className="tit">신비와 활기 사이, 신효ㆍ하효마을</div>
                                <div className="desc">효돈동이란 지붕 아래 내륙과 바다를 넘나들며 흐드러진 귤꽃의 향연. 달고 싱그럽고, 또 신비로워요.</div>
                            </div>
                            <div className="imgWrap"><img src='/img/img_mainSmall03.jpg' alt='img'/></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainContents">
                <div className="inner innerFull">
                    <div className="item">
                        <div className="big">
                            <div className="keyword">
                                <Keyword keyword={'ACTIVITY'}/>
                                <Keyword keyword={'HOW-TO'}/>
                                <Keyword keyword={'PEOPLE'}/>
                            </div>
                            <div className="tit">서귀포의 숨은 소식과</div>
                            <p className="desc">서귀포 문화도시의 지식 충전하고 광명찾기</p>
                            <div className="imgWrap"><img src='/img/img_mainBig03.jpg' alt='img'/></div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="small">
                            <div className="textWrap">
                                <div className="keyword">
                                    <Keyword keyword={'NEWS'}/>
                                    <Keyword keyword={'HOW-TO'}/>
                                    <Keyword keyword={'PEOPLE'}/>
                                </div>
                                <div className="tit">신비와 활기 사이, 신효ㆍ하효마을</div>
                                <div className="desc">효돈동이란 지붕 아래 내륙과 바다를 넘나들며 흐드러진 귤꽃의 향연. 달고 싱그럽고, 또 신비로워요.</div>
                            </div>
                            <div className="imgWrap"><img src='/img/img_mainSmall01.jpg' alt='img'/></div>
                        </div>
                        <div className="small">
                            <div className="textWrap">
                                <div className="keyword">
                                    <Keyword keyword={'BRAND'}/>
                                    <Keyword keyword={'ACTIVITY'}/>
                                </div>
                                <div className="tit">신비와 활기 사이, 신효ㆍ하효마을</div>
                                <div className="desc">효돈동이란 지붕 아래 내륙과 바다를 넘나들며 흐드러진 귤꽃의 향연. 달고 싱그럽고, 또 신비로워요.</div>
                            </div>
                            <div className="imgWrap"><img src='/img/img_mainSmall02.jpg' alt='img'/></div>
                        </div>
                        <div className="small">
                            <div className="textWrap">
                                <div className="keyword">
                                    <Keyword keyword={'NEWS'}/>
                                    <Keyword keyword={'HISTORY'}/>
                                    <Keyword keyword={'NEWS'}/>
                                </div>
                                <div className="tit">신비와 활기 사이, 신효ㆍ하효마을</div>
                                <div className="desc">효돈동이란 지붕 아래 내륙과 바다를 넘나들며 흐드러진 귤꽃의 향연. 달고 싱그럽고, 또 신비로워요.</div>
                            </div>
                            <div className="imgWrap"><img src='/img/img_mainSmall03.jpg' alt='img'/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;