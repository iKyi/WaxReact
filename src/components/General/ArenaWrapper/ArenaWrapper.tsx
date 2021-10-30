import { Route, Switch, useRouteMatch } from 'react-router';
import { ILocalAppRoute } from '../../../router/appRoutes';
import AppLayoutComp from '../AppLayout/AppLayout';
import './ArenaWrapper.scss';

export type ArenaWrapperPropsType = {
  children?: any,
  routeChildren?: ILocalAppRoute[]
}

const ArenaWrapperComp: React.VFC<ArenaWrapperPropsType> = ({ children, routeChildren }) => {

  // *************** HOOKS *************** //
  const { path } = useRouteMatch();
  
  // *************** RENDER *************** //
  return (
    <AppLayoutComp>
      <Switch>
        {routeChildren && routeChildren.map(childRoute => {
          return (
            <Route path={`${path}${childRoute.path}`} key={childRoute.name} exact={childRoute.exact}>
              <childRoute.component routeChildren={childRoute.children} />
            </Route>
          )
        })}
      </Switch>
    </AppLayoutComp>
  )
}

export default ArenaWrapperComp