import logo from './logo.svg';
import './App.less';
import { Button } from 'antd';
import 'antd/dist/antd.less';
import Results from './components/Results'
// import 'antd/dist/antd.dark.less';

function App() {
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
        <Button type="primary">Button</Button>
        <Results/>
      </header>
    </div>
  );
}

export default App;
