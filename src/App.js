import Index from './pages/index';
import About from './pages/about';
import Gallery from './pages/gallery';

import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

function App() {
  return <Router>
    <Routes>
      <Route exact path='/' element={<Index />} />
      <Route exact path='/team' element={<About />} />
      <Route exact path='/gallery' element={<Gallery />} />
    </Routes>
  </Router>
}

export default App;
