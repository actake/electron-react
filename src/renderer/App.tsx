import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { routeConfigs } from './route';

import './app.less';

export default function App() {
  return (
    <Router>
      <Routes>
        {routeConfigs.map((routeConfig, index) => {
          const { path, component: Component } = routeConfig;
          return <Route key={index} path={path} element={<Component />} />;
        })}
      </Routes>
    </Router>
  );
}
