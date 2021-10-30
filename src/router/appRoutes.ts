import ArenaWrapperComp from "../components/General/ArenaWrapper/ArenaWrapper";
import BuildsComp from "../pages/app/Builds"
import ProfileComp from "../pages/app/Profile";

export interface ILocalAppRoute {
  name: string,
  component: React.VFC<any>,
  path: string,
  exact?: boolean
  children?: ILocalAppRoute[]
}

const AppRoutes: ILocalAppRoute[] = [
  {
    name: 'Arena',
    component: ArenaWrapperComp,
    path: '/arena/',
    children: [
      {
        name: 'Builds',
        component: BuildsComp,
        path: '',
        exact: true,
      },
      {
        name: 'Profile',
        component: ProfileComp,
        path: 'profile',
        exact: false,
      }
    ]
  },

]

export default AppRoutes;