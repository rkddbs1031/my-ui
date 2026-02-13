import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layouts/MainLayout';
import { routes } from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
