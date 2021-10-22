import logo from './logo.svg';
import './App.css';
import {useMemo} from 'react'


function expensiveFunction(number) {
  console.log('Bắt đầu');
  const start = new Date();

  //Đợi 3 giây để thực thi
  //Sư dụng vòng loop while
  while((new Date() - start) < 3000);


  console.log('Kết thúc : ', new Date() - start, 'ms' )
  
  
  
  return number * number 
}



function App() {

  const number = useMemo(()=>{
    return expensiveFunction(10);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{number}</p>
      </header>
    </div>
  );
}

export default App;
