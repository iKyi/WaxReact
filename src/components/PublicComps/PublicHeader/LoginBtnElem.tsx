import { useContext, useMemo } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router";
// @ts-ignore
import { UALContext } from 'ual-reactjs-renderer';
import AppRoutes from "../../../router/appRoutes";


export type LoginBtnElemPropsType = {
  children?: any
}

const LoginBtnElemComp: React.VFC<LoginBtnElemPropsType> = ({ children }) => {

  const history = useHistory();
  const UALContextElem: any = useContext(UALContext);
  const { activeUser, showModal, logout } = UALContextElem || {};

  const logInOutBtn = useMemo(() => {
    if (!activeUser) {
      return (
        <Button className="cmn-btn" onClick={() => showModal()}>
          Login
        </Button>
      )
    } else {
      return (
        <Dropdown align="end">
          <Dropdown.Toggle as={Button} className="cmn-btn">
            {activeUser.accountName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {AppRoutes.map(item => {
              return (
                <Dropdown.Item key={item.name} onClick={() => history.push(item.path)}>
                  {item.name}
                </Dropdown.Item>
              )
            })}
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        // <Button className="cmn-btn" onClick={() => logout()}>
        //   Logout
        // </Button>
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeUser, showModal, logout])


  return (
    <div>
      {logInOutBtn}
    </div>
  )
}

export default LoginBtnElemComp