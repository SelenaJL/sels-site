import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { AboutMe } from './pages/AboutMe';
import { WorkExperience } from './pages/WorkExperience';
import { VolunteerExperience } from './pages/VolunteerExperience';
import { AnimalRescue } from './pages/AnimalRescue';
import { Music } from './pages/Music';
import { EventPlanning } from './pages/EventPlanning';
import './styles/main.css';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/volunteer-experience" element={<VolunteerExperience />} />
        <Route path="/animal-rescue" element={<AnimalRescue />} />
        <Route path="/music" element={<Music />} />
        <Route path="/event-planning" element={<EventPlanning />} />
      </Routes>
    </Router>
  );
}

export default App;
