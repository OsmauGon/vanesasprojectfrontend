
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/mainStyles.css'
import Sidebar from './components/Sidebar';
import Home from './pages/Home'; // Assumiendo que tienes una página de inicio
import { Veterinarias3 } from './pages/Veterinarias';
import { Profesionales2 } from './pages/Profesionales';
import Calendario from './pages/Calendario';
//import Noticias from './pages/Noticias';
//import EditPage from './pages/EditPage';
//import Logreg from './pages/Logreg';
import BlogPagee from './pages/BlogPage';
import MissingPostsPage from './pages/Extraviados';
import { usePublicidads } from './hooks/usePublicidadData';
import ServicePage from './pages/ServicePage';

function App() {
  const {data} = usePublicidads()
  return (
    <Router>
      <div className="d-flex">
        {/* Sidebar / Header Lateral */}
        <Sidebar />

        {/* Contenido Principal */}
        <div className="contenido flex-grow-1">
          <Routes>
            <Route path="/" element={<Home publis={data}/>} />
            <Route path="/veterinarias" element={<Veterinarias3 publis={data}/>} />
            <Route path="/profesionales" element={<Profesionales2 publis={data}/>} />
            <Route path="/calendario" element={<Calendario publis={data}/>} />
            {/* <Route path="/noticias" element={<Noticias publis={data}/>} /> */}
            <Route path="/blogs" element={<BlogPagee publis={data}/>} />
            {/* <Route path="/edit" element={<EditPage publis={data}/>} /> */}
            {/* <Route path="/logreg" element={<Logreg publis={data}/>} /> */}
            <Route path="/extraviados" element={<MissingPostsPage publis={data}/>} />
            <Route path="/servicios" element={<ServicePage publis={data}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;