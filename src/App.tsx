
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/mainStyles.css'
import Sidebar from './components/Sidebar';
import Home from './pages/Home'; // Assumiendo que tienes una página de inicio
import Veterinarias from './pages/Veterinarias';
import Profesionales from './pages/Profesionales';
import Calendario from './pages/Calendario';
import Noticias from './pages/Noticias';
import EditPage from './pages/EditPage';
import Logreg from './pages/Logreg';
import BlogPagee from './pages/BlogPage';

function App() {
  return (
    <Router>
      <div className="d-flex">
        {/* Sidebar / Header Lateral */}
        <Sidebar />

        {/* Contenido Principal */}
        <div className="contenido flex-grow-1" style={{ marginLeft: '250px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veterinarias" element={<Veterinarias />} />
            <Route path="/profesionales" element={<Profesionales />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/blogs" element={<BlogPagee />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/logreg" element={<Logreg />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;