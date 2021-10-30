import React from "react";
import PublicWrapperComp from "../components/PublicComps/PublicWrapper/PublicWrapper";
import AboutComp from "../pages/public/About/About";
import CollectionsComp from "../pages/public/Collections/Collections";
import ContactPageComp from "../pages/public/Contact/ContactPage";
import HomeComp from "../pages/public/Home/Home";
import LeaderBoardsComp from "../pages/public/LeaderBoards/LeaderBoards";
import NewsComp from "../pages/public/News/News";

export interface ILocalPublicRoute {
  name: string,
  component: React.VFC<any>,
  path: string,
  exact?: boolean,
  children?: ILocalPublicRoute[]
}

const PublicRoutes: ILocalPublicRoute[] = [
  {
    name: 'Main',
    component: PublicWrapperComp,
    path: '/',
    children: [
      {
        name: 'Home',
        component: HomeComp,
        path: '/',
        exact: true,
      },
      {
        exact: true,
        name: 'Leaderboards',
        component: LeaderBoardsComp,
        path: '/leaderboards',
      },
      {
        exact: true,
        name: 'News',
        component: NewsComp,
        path: '/news'
      },
      {
        exact: true,
        name: 'Collections',
        component: CollectionsComp,
        path: '/collections'
      },
      {
        exact: true,
        name: 'About',
        component: AboutComp,
        path: '/about'
      },
      {
        exact: true,
        name: 'Contact',
        component: ContactPageComp,
        path: '/contact'
      }
    ]
  }
];

export default PublicRoutes;