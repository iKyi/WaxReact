import './AppFooter.scss';

export type AppFooterPropsType = {
  children?: any
}

const AppFooterComp: React.VFC<AppFooterPropsType> = ({ children }) => {

  // *************** RENDER *************** //
  return (
    <footer className="appFooter">
      appFooter
    </footer>
  )
}

export default AppFooterComp