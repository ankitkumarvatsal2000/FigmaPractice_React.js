
import './App.css';
import Asidebar from './Asidebar';
import Header from './Header ';
import Payment from './Payment';
import FBT from './FBT';

import Special from './Special';


function App() {
  return (
    <>

      <div className='App'>
        <Asidebar />
        <div className='remain-comp'>
          <Header />
          <Payment />
          <FBT />
          <Special />
        </div>
      </div>


    </>
  );
}

export default App;
