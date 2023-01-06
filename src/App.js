import logo from './logo.svg';
import './App.css';
import CalInput from './CalInput';
import {useState } from 'react';
 
const calculatorInputs = [
  {id : '0' , text:0},
  {id : '1' , text:1},
  {id : '2' , text:2},
  {id : '3' , text:3},
  {id : '4' , text:4},
  {id : '5' , text:6},
  {id : '7' , text:7},
  {id : '8' , text:8},
  {id : '9' , text:9},
  {id : 'DELETE' , text:'DEL'},
  {id : 'CLEAR' , text:'CLR'},
  {id : '=' , text:'='},
  {id : '+' , text:'+'},
  {id : '-' , text:'-'},
  {id : 'x' , text:'*'},
  {id : '/' , text:'/'}

]
function App() {

  const [result, setResult] = useState('');

  const handleDeleteEvent = () => {
    setResult(result.substring(0,result.length - 1));
  }
  const calculateResult = () => {
    console.log(result)
    try {
      setResult(eval(result));
    } catch {
      //setResult('Math Error');
    }
  }

  function handleCalClickEvent(input) {
    
    if(input.text === '=' || input.text === 'DEL' || input.text === 'CLR'){
      switch(input.text) {
        case 'DEL' : handleDeleteEvent();
        break;
        case 'CLR' : setResult('');
        break;
        case '=' : setResult(eval(result));
        break;
        default : setResult(result);
      }
    } else {
      setResult((prevInputVal) => prevInputVal += input.text);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator-container">
          
          

          <div className='calculator-keypad-container'>
            <div className="result">
              {result}
            </div>
            {
              calculatorInputs.map(input => {
                return <CalInput key={input.id} text={input.text} handleClick={()=>handleCalClickEvent(input)} />
              })
            }
              
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
