import { Routes, Route, } from 'react-router-dom';
import Home from './Home';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Page5 from './screens/Page5';
import Page6 from './screens/Page6';
import Page7 from './screens/Page7';
import Place1 from './screens/Place1';
import Place2 from './screens/Place2';
import Place3 from './screens/Place3';
import Cate1 from './screens/Cate1';
import Cate2 from './screens/Cate2';
import Cate3 from './screens/Cate3';
import Cate4 from './screens/Cate4';
import Cate5 from './screens/Cate5';
import Cate6 from './screens/Cate6';
import Cate7 from './screens/Cate7';
import Cate8 from './screens/Cate8';
import Cate9 from './screens/Cate9';
import Main from './screens/Main';
import Page8 from './screens/Page8';
import Page9 from './screens/Page9';
import Page10 from './screens/Page10';
import Page11 from './screens/Page11';
import Page12 from './screens/Page12';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} exact />
        <Route path='/Page1' Component={Page1} exact />
        <Route path='/Page2' Component={Page2} exact />
        <Route path='/Page3' Component={Page3} exact />
        <Route path='/Page4' Component={Page4} exact />
        <Route path='/Page5' Component={Page5} exact />
        <Route path='/Page6' Component={Page6} exact />
        <Route path='/Page7' Component={Page7} exact />
        <Route path='/Place1' Component={Place1} exact />
        <Route path='/Place2' Component={Place2} exact />
        <Route path='/Place3' Component={Place3} exact />
        <Route path='/Cate1' Component={Cate1} exact />
        <Route path='/Cate2' Component={Cate2} exact />
        <Route path='/Cate3' Component={Cate3} exact />
        <Route path='/Cate4' Component={Cate4} exact />
        <Route path='/Cate5' Component={Cate5} exact />
        <Route path='/Cate6' Component={Cate6} exact />
        <Route path='/Cate7' Component={Cate7} exact />
        <Route path='/Cate8' Component={Cate8} exact />
        <Route path='/Cate9' Component={Cate9} exact />
        <Route path='/Main' Component={Main} exact />
        <Route path='/Page8' Component={Page8} exact />
        <Route path='/Page9' Component={Page9} exact />
        <Route path='/Page10' Component={Page10} exact />
        <Route path='/Page11' Component={Page11} exact />
        <Route path='/Page12' Component={Page12} exact />
      </Routes>
    </div>
  );
}

export default App;
