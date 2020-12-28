import './App.less';
import 'antd/dist/antd.less';
import 'antd/dist/antd.dark.less';
import Results from './components/Results'
import LOGO from './data/logo.png'
import SITE from './data/site.json'
import { Typography } from 'antd';
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LOGO} className="App-logo" alt="logo" />
        <p>
        <Title> {SITE.name}</Title>
        <Title level={4}>{SITE.wellcome_message}</Title> 
        </p>
        <Results/>
      </header>
    </div>
  );
}

export default App;
