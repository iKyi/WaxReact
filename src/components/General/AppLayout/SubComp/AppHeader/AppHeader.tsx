import { Link } from 'react-router-dom';
import './AppHeader.scss';

export type AppHeaderPropsType = {
  children?: any
}

const AppHeaderComp: React.VFC<AppHeaderPropsType> = ({ children }) => {

  // *************** RENDER *************** //
  return (
    <header>appheader
      <Link to="/">Home</Link>

    </header>
  )
}

export default AppHeaderComp