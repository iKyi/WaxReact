import { NavLink } from "react-router-dom"

export type BuildsPropsType = {
  children?: any
}

const BuildsComp: React.VFC<BuildsPropsType> = ({ children }) => {
  return (
    <>
      <div>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/builds">
          Builds
        </NavLink>
        <NavLink to="/profile">
          Profile
        </NavLink>
      </div>

      dashboard
    </>
  )
}

export default BuildsComp