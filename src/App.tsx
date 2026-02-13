import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES_CONFIG } from './constants/routes';

import Layout from './layouts/MainLayout';
import Loading from './components/Loading';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            {ROUTES_CONFIG.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
