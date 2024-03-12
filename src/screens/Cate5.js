import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Keyword from '../component/Keyword';
import Card from '../component/Card';
import Tab from '../component/Tab';

function Cate5() {

    return <>
        <Header />
        <Tab
            inner={`inner1220`}
            keyword={[
                <Keyword keyword={'ACTIVITY'} ac={``}/>,
                <Keyword keyword={'HOW-TO'} ac={``}/>,
                <Keyword keyword={'PEOPLE'} ac={``}/>,
                <Keyword keyword={'BRAND'} ac={``}/>,
                <Keyword keyword={'HISTORY'} ac={`ac`}/>,
                <Keyword keyword={'NEWS'} ac={``}/>,
                <Keyword keyword={'MAP'} ac={``}/>,
                <Keyword keyword={'SPACE'} ac={``}/>,
                <Keyword keyword={'TRAVEL'} ac={``}/>,
            ]}
        />
        <div className='cateTit'>
            <div className="inner1220">
                <h2>HISTORY</h2>
                <h3>서귀포 문화도시 지식 충전하고 광명 찾자.</h3>
            </div>
        </div>

        <div className='cardView'>
            <div className="inner">
                <Card
                    card={`card card2`}
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                        <Keyword keyword={'HOW-TO'}/>,
                        <Keyword keyword={'PEOPLE'}/>,
                        <Keyword keyword={'BRAND'}/>,
                        <Keyword keyword={'SPACE'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
                <Card
                    card={`card card2`}
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                        <Keyword keyword={'HOW-TO'}/>,
                        <Keyword keyword={'PEOPLE'}/>,
                        <Keyword keyword={'BRAND'}/>,
                        <Keyword keyword={'SPACE'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
                <Card
                    card={`card card2`}
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                        <Keyword keyword={'HOW-TO'}/>,
                        <Keyword keyword={'PEOPLE'}/>,
                        <Keyword keyword={'BRAND'}/>,
                        <Keyword keyword={'SPACE'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
                <Card
                    card={`card card2`}
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                        <Keyword keyword={'HOW-TO'}/>,
                        <Keyword keyword={'PEOPLE'}/>,
                        <Keyword keyword={'BRAND'}/>,
                        <Keyword keyword={'SPACE'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
                <Card
                    card={`card card2`}
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                        <Keyword keyword={'HOW-TO'}/>,
                        <Keyword keyword={'PEOPLE'}/>,
                        <Keyword keyword={'BRAND'}/>,
                        <Keyword keyword={'SPACE'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
            </div>
        </div>


    </>
}

export default Cate5;