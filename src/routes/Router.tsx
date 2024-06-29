import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { routes } from './routes';
import { Suspense } from 'react';

export default function Router(): JSX.Element {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <h1>App</h1>
            <ul>
              {routes.map(({ to, name }) => (
                <li key={name}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component, to }) => (
              <Route key={to} path={path} element={<Component />} />
            ))}
            <Route
              path='*'
              element={<Navigate to={routes[0].to} replace={true} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}
