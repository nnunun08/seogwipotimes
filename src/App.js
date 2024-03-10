import { Routes, Route, } from 'react-router-dom';
import Home from './Home';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Page5 from './screens/Page5';

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
      </Routes>
    </div>
  );
}

export default App;
