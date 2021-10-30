import './AppTopNav.scss';

export type AppTopNavPropsType = {
  children?: any
}

const AppTopNavComp: React.VFC<AppTopNavPropsType> = ({ children }) => {

  // *************** RENDER *************** //
  return (
    <nav>topnav</nav>
  )
}

export default AppTopNavComp