import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Membership from './pages/Membership';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="activities" element={<Activities />} />
          <Route path="resources" element={<Resources />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="membership" element={<Membership />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
