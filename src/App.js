import { Routes, Route, } from 'react-router-dom';
import Home from './Home';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} exact />
        <Route path='/Page1' Component={Page1} exact />
        <Route path='/Page2' Component={Page2} exact />
      </Routes>
    </div>
  );
}

export default App;
