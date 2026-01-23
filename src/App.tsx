import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [{ path: '/', element: <Home /> }];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
