
import './App.css';
import MainBody from './Components/MainBody.js';
import Layout from './Components/Layout/Layout.js';
import Examples from './Components/Examples.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Layout />} >
          <Route index element={<MainBody />} />
          <Route path="/portfolio/projects" element={<Examples />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
