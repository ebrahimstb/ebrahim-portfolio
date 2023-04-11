 import './App.css';
import {Banner} from './component/Banner';
 import { NavBar } from "./component/NavBar";
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './component/Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
