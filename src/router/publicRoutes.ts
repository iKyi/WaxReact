import React from "react";
import AboutComp from "../pages/public/About/About";
import CollectionsComp from "../pages/public/Collections/Collections";
import ContactPageComp from "../pages/public/Contact/ContactPage";
import HomeComp from "../pages/public/Home/Home";
import LeaderBoardsComp from "../pages/public/LeaderBoards/LeaderBoards";
import NewsComp from "../pages/public/News/News";

export interface ILocalPublicRoute {
  name: string,
  component: React.VFC,
  path: string,
  exact?: boolean
}

const PublicRoutes: ILocalPublicRoute[] = [
  {
    name: 'Home',
    component: HomeComp,
    path: '/',
    exact: true,
  },
  {
    name: 'Leaderboards',
    component: LeaderBoardsComp,
    path: '/leaderboards',
  },
  {
    name: 'News',
    component: NewsComp,
    path: '/news'
  },
  {
    name: 'Collections',
    component: CollectionsComp,
    path: '/collections'
  },
  {
    name: 'About',
    component: AboutComp,
    path: '/about'
  },
  {
    name: 'Contact',
    component: ContactPageComp,
    path: '/contact'
  },
];

export default PublicRoutes;