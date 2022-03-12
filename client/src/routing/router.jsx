import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { VISITOR, ADMIN, LOGGED_IN } from './auth-types';
import RequireAdmin from './require-admin';
import RequireVisitor from './require-visitor';
import RequireLoggedIn from './require-logged-in';
import routeStructure from './route-structure';
import routePageEnum from './route-page-enum';

const addRouteProtection = {
  [VISITOR]: (Page) => <RequireVisitor><Page /></RequireVisitor>,
  [ADMIN]: (Page) => <RequireAdmin><Page /></RequireAdmin>,
  [LOGGED_IN]: (Page) => <RequireLoggedIn><Page /></RequireLoggedIn>,
};

const buildRouteRecursive = ({
  path,
  pageName,
  auth,
  children,
}) => {
  const Page = routePageEnum[pageName];
  if (children) {
    const layout = addRouteProtection[auth]
      ? addRouteProtection[auth](Page)
      : <Page />;

    return (
      <Route key={pageName} path={path} element={layout}>
        {children.map(buildRouteRecursive)}
      </Route>
    );
  }

  const page = addRouteProtection[auth]
    ? addRouteProtection[auth](Page)
    : <Page />;

  return (
    <Route
      key={pageName}
      path={path ?? undefined}
      index={path === null}
      element={page}
    />
  );
};

const Router = () => (
  <BrowserRouter>
    <Routes>
      {routeStructure.map(buildRouteRecursive)}
    </Routes>
  </BrowserRouter>
);

export default Router;
