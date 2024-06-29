import { lazy } from "react";
import { Route } from "./routes";

const Section1 = lazy(() => import('../lazy-load/views/LazySection1'))
const Section2 = lazy(() => import('../lazy-load/views/LazySection2'))
const Section3 = lazy(() => import('../lazy-load/views/LazySection3'))

export const routes: Route[] = [
  {
    to: 'section-1',
    path: 'section-1',
    Component: Section1,
    name: 'Lazy section 1'
  },
  {
    to: 'section-2',
    path: 'section-2',
    Component: Section2,
    name: 'Lazy section 2'
  },
  {
    to: 'section-3',
    path: 'section-3',
    Component: Section3,
    name: 'Lazy section 3'
  },
]