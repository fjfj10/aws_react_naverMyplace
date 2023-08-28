import { Reset } from 'styled-reset';
import { Global } from '@emotion/react';
import { GSCommon } from './styles/Common';
import Mainlayout from './components/MainLayout/Mainlayout';
import { Route, Routes } from 'react-router-dom';
import Feed from './pages/Feed/Feed';
import Review from './pages/Review/Review'
import Visit from './pages/Visit/Visit'

function App() {
  return (
    <>
      <Reset />
      <Global styles={GSCommon}/>
      <Mainlayout>
        <Routes>
          <Route path='/' element={ <Visit /> }/>
          <Route path='/feed' element={ <Feed /> }/>
          <Route path='/review' element={ <Review /> } />
          <Route path='/visit' element={ <Visit /> } />
        </Routes>
      </Mainlayout>
    </>
  );
}

export default App;
