
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Blogs from './Blogs';
import Layout from './Layout';  
import Service from './Service';
import Projects from './Projects';


function App() {
  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>

      
      
    </>
  );
}

export default App;
