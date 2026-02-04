import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ToastDemo from './pages/ToastDemo';
import Layout from './layouts/MainLayout';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [
  { path: '/', element: <Home /> },
  { path: '/toast', element: <ToastDemo /> },
];

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
