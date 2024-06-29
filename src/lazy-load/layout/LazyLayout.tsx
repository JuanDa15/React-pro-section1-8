import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../../routes/nested.routes";

export default function LazyLayout (): JSX.Element {
  return (
    <div>
      <h1>Hello LazyLayout</h1>

      <ul>
        <li>
          <NavLink to="section-1" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Lazy section 1
          </NavLink>
        </li>
        <li>
          <NavLink to="section-2" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Lazy section 2
          </NavLink>
        </li>
        <li>
          <NavLink to="section-3" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Lazy section 3
          </NavLink>
        </li>
      </ul>

      <Routes>
        {routes.map(({ path, Component, to }) => (
          <Route key={to} path={path} element={<Component />} />
        ))}
        <Route
          path='*'
          element={<Navigate to={routes[0].to} replace={true} relative="path" />}
        />  
      </Routes>
    </div>
  )
}
