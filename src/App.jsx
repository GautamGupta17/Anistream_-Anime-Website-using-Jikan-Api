import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContextProvider } from './context/Global';

// Lazy load components
const HomePage = lazy(() => import('./components/HomePage'));
const AnimeItem = lazy(() => import('./components/AnimeItem'));
const Gallery = lazy(() => import('./components/Gallery'));

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/anime/:id" element={<AnimeItem />} />
            <Route path="/character/:id" element={<Gallery />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;