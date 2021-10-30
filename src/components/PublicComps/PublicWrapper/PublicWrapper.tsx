import { Route, Switch } from "react-router"
import { ILocalAppRoute } from "../../../router/appRoutes"
import PublicPageWrapperComp from "../PublicPageWrapper/PublicPageWrapper"

export type PublicWrapperPropsType = {
  children?: any,
  routeChildren?: ILocalAppRoute[]
}

const PublicWrapperComp: React.VFC<PublicWrapperPropsType> = ({ children, routeChildren }) => {

  // *************** RENDER *************** //
  return (
    <PublicPageWrapperComp>
      <Switch>
        {routeChildren && routeChildren.map(childRoute => {
          return (
            <Route path={`${childRoute.path}`} key={childRoute.name} exact={childRoute.exact}>
              <childRoute.component routeChildren={childRoute.children} />
            </Route>
          )
        })}
      </Switch>
    </PublicPageWrapperComp>
  )
}

export default PublicWrapperComp