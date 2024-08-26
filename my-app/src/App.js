
import './css/App.css';
import {useState} from 'react';
import Counters from './components/counter';
import Listkey from './components/listkey';
import Myform from './components/Myform';
import Useref from './components/useref';
// import RenderCounter from './useref2';
import PreviousStateExample from './components/Previousstate';
import Useeffect from './components/useeffect';
import Formval from './components/Formval';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import RenderCounter from './components/useref2';
import Todo from './components/Todu';
import Allinone from './components/Allinone';

function App() {

  let [scount, setscount] = useState(0);
  function S_counters(){
    setscount(scount+1)
  }

  let [pcount, setpcount] = useState(0);
  function P_counters(){
    setpcount(pcount+1)
  }

  let numbers=[1,2,3,4,5]

  return (
    <div className='App'>

      <div className='state br'>
        <h1>Counter using useState()</h1>
        <Button className='hrjbtn' onClick={S_counters}>Adich keri vaa</Button>
        <h1>count : {scount}</h1>
      </div>

      <div className='props br'>
        <h1>Counter using Props</h1>
        <Button className='hrjbtn' onClick={P_counters}>Adich keri vaa</Button>
        <Counters pcount={pcount}/>
      </div>

      <div className="listkey br">
        <h1>List & keys</h1>
        <Listkey numbers={numbers}/>
      </div>
      <div className="form inp br">
        <Myform/>
      </div>
      <div className="useRef inp br">
        <h1>useRef()-focus</h1>
        <Useref />
      </div>
      <div className="useRef2 br">
        <RenderCounter/>
      </div>
      <div className="useEffect br">
        <Useeffect/>
      </div>
      <div className="formval inp br">
        <Formval/>
      </div>
      <div className="prestate inp br">
      <PreviousStateExample/>
      </div>
      <div className='br'>

      </div>
      <div className='todo br'> 
          <Todo/>
      </div>
      {/* <div className='todopop'>
        <div className='pop'>

        </div>
      </div> */}
      <div className='All br'>
        <Allinone/>
      </div>
    </div>
  );
}

export default App;
