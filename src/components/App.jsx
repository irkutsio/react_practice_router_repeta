import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import DogDetails from './pages/DogDetails';
import Layout from './Layout';
import Gallery from './Gallery/Gallery';
import Subbreeds from './Subbreeds/Subbreeds';

export const App = () => {
  return (
    <div style={{ padding: '60px', backgroundColor: 'bisque' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />}>
            <Route path="subbreeds" element={<Subbreeds/>}/>
            <Route path="gallery" element={<Gallery/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
