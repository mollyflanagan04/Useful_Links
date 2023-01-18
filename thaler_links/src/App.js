import './App.css';
import Home from './components/Home';
import ResourceList from './components/ResourceList';
import AddResource from './components/AddResource';
import Navigation from './components/Navigation';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="resource-list" element={<ResourceList/>} />
        <Route path="add-resource" element={<AddResource/>} />    
      </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
