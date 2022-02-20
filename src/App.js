import react from 'react';
import './App.css';
import { data } from './data';
import News from './News';
import Stuff from './Stuff';
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';


function App() {
  return (<Router>
      <nav>
        <Link to = "/news" className="link">Новости</Link>
        <Link to = '/stuff' className="link">Сотрудники</Link>
        <Link to = "/about" className="link">О компании</Link>

        <Routes>
          <Route path="/news" element={<News/>}/>
            <Route path="stuff" element={<Stuff/>}/>
            <Route path="about" element={<About/>}/>
        </Routes>
      </nav>
      </Router>
  );
}

export default App;