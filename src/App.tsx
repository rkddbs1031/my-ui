import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Toast from './pages/Toast';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [
  { path: '/', element: <Home /> },
  { path: '/toast', element: <Toast /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
