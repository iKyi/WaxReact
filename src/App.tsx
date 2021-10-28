import './styles/custom.scss';
import AppRouter from './router/router';
import { Route, Switch } from 'react-router';
import PublicRoutes from './router/publicRoutes';
import React from 'react';
import PublicPageWrapperComp from './components/General/PublicPageWrapper/PublicPageWrapper';
import AppRoutes from './router/appRoutes';
import AuthwrapperComp from './components/General/AuthWrapper/Authwrapper';
function App() {
  return (
    <AppRouter>
      <Switch>
        {PublicRoutes.map((route, index) => {
          return (
            <Route key={route.path + index} exact={route.exact ?? false} path={route.path}>
              <PublicPageWrapperComp>
                <route.component />
              </PublicPageWrapperComp>
            </Route>
          )
        })}
        {AppRoutes.map((route, index) => {
          return (
            <Route key={route.path + index} exact={route.exact ?? false} path={route.path}>
              <AuthwrapperComp>
                <route.component />
              </AuthwrapperComp>
            </Route>
          )
        })}
        <Route path="*">
          <p>404 page</p>
        </Route>
      </Switch>
    </AppRouter >
  );
}
export default React.memo(App);
