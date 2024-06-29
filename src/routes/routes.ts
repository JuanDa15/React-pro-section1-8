import { LazyExoticComponent, lazy } from "react";

type JSXComponent = () => JSX.Element;

export interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Layout = lazy(() => import(/* webpackChunkName: "Layout" */ '../lazy-load/layout/LazyLayout'))
const ShoppingPage = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../lazy-load/pages/ShoppingPage'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../lazy-load/pages/Lazy2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../lazy-load/pages/Lazy3'))

export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: Layout,
    name: 'Lazy - Layout'
  },
  {
    to: '/shopping-page',
    path: 'shopping-page',
    Component: ShoppingPage,
    name: 'Shopping page'
  },
  {
    to: '/lazy-2',
    path: 'lazy-2',
    Component: Lazy2,
    name: 'Lazy Page 2'
  },
  {
    to: '/lazy-3',
    path: 'lazy-3',
    Component: Lazy3,
    name: 'Lazy Page 3'
  },
]