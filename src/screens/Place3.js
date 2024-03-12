import React from 'react';
import Header from '../component/Header';
import Article1 from '../component/Article1';
import Recommend from '../component/Recommend';
import Keyword from '../component/Keyword';
import RecoCard from '../component/RecoCard';
import ListGroup from '../component/ListGroup';
import ImgSlider from '../component/ImgSlider';
import Card from '../component/Card';

function Place1() {

    return <>
        <Header />
        <Article1
            keyword = {[
                <Keyword keyword={'TRAVEL'}/>,
                <Keyword keyword={'ACTIVITY'}/>,
                <Keyword keyword={'HISTORY'}/>,
                <Keyword keyword={'HOW-TO'}/>,
                <Keyword keyword={'PEOPLE'}/>,
                <Keyword keyword={'BRAND'}/>,
                <Keyword keyword={'SPACE'}/>,
            ]}
            h2 = {`105개 마을에 두 발짝`}
            p = {`너도 나도 우리가 간다, 노지 마을 도장 깨는 법 `}
            dis = {'displayNone'}
            inner = {`inner1220`}
        />

        <div className='cardView'>
            <div className="inner">
                <Card
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
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
                <Card
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
                <Card
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
                <Card
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
                <Card
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
                <Card
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
                <Card
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
                <Card
                    img={`/img/img_card01.jpg`}
                    keyword={[
                        <Keyword keyword={'TRAVEL'}/>,
                        <Keyword keyword={'ACTIVITY'}/>,
                        <Keyword keyword={'HISTORY'}/>,
                    ]}
                    h3 = {`다시 태어났어, 월별 제주어 럭키 리추얼`}
                    p = {`기억해요. 계절은 바뀌고 당신은 매일 새로운 날을 선물 받고 있음을. `}
                />
            </div>
        </div>


    </>
}

export default Place1;