import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const LegacyNewYorkPage = lazy(() => import('../pages/legacy-newyork/page'));
const LegacyTokyoPage = lazy(() => import('../pages/legacy-tokyo/page'));
const WebProductionPage = lazy(() => import('../pages/web-production/page'));
const TokushohoPage = lazy(() => import('../pages/tokushoho/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/legacy-newyork',
    element: <LegacyNewYorkPage />,
  },
  {
    path: '/legacy-tokyo',
    element: <LegacyTokyoPage />,
  },
  {
    path: '/web-production',
    element: <WebProductionPage />,
  },
  {
    path: '/tokushoho',
    element: <TokushohoPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
