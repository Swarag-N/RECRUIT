import './App.less';
import 'antd/dist/antd.less';
import 'antd/dist/antd.dark.less';
import Results from './components/Results'
import LOGO from './data/logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LOGO} className="App-logo" alt="logo" />
        <p>
        VIT <code> Linux User's Group Recruitment Drive</code> 🐧
        </p>
        <Results/>
      </header>
    </div>
  );
}

export default App;
