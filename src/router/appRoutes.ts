import BuildsComp from "../pages/app/Builds"
import ProfileComp from "../pages/app/Profile";

export interface ILocalAppRoute {
  name: string,
  component: React.VFC,
  path: string,
  exact?: boolean
}

const AppRoutes: ILocalAppRoute[] = [
  {
    name: 'Builds',
    component: BuildsComp,
    path: '/builds',
    exact: true,
  },
  {
    name: 'Profile',
    component: ProfileComp,
    path: '/profile',
    exact: true,
  },
]

export default AppRoutes;