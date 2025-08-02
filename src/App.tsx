import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { AboutMe } from './pages/AboutMe';
import { Education } from './pages/Education';
import { Work } from './pages/Work';
import { Volunteer } from './pages/Volunteer';
import { Animals } from './pages/Animals';
import { Charity } from './pages/Charity';
import { Music } from './pages/Music';
import { Events } from './pages/Events';
import './styles/main.css';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/music" element={<Music />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
