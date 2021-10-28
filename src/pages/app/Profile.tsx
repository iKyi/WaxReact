import { NavLink } from "react-router-dom"

export type ProfilePropsType = {
  children?: any
}

const ProfileComp: React.VFC<ProfilePropsType> = ({ children }) => {
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

      Profile
    </>
  )
}

export default ProfileComp