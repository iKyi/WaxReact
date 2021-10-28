/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "react-bootstrap";
import { useContext, useEffect } from "react";
// @ts-ignore
import { UALContext } from 'ual-reactjs-renderer';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { BindInitialUserData } from "../../../store/user/userApi";
import { LOADING_STATES } from "../../../store/participants/participantsSlice";
import { AnimatePresence } from "framer-motion";
import PublicAbsoluteLoaderComp from "../../PublicComps/PublicAbsoluteLoader/PublicAbsoluteLoader";
export type AuthwrapperPropsType = {
  children?: any
}
const AuthwrapperComp: React.VFC<AuthwrapperPropsType> = ({ children }) => {

  // **************** STATIC PROPS **************** //
  const dispatch = useAppDispatch();

  // **************** DYNAMIC PROPS STATE **************** //
  const userLoaded = useAppSelector(state => state.user.ArenaUser);
  const ParticipantsLoading = useAppSelector(state => state.participants.loading);
  const UALContextElem: any = useContext(UALContext);
  const { activeUser } = UALContextElem || {};

  // **************** LOCAL EVENTS **************** //
  useEffect(() => {
    if (!userLoaded && activeUser) {
      dispatch(BindInitialUserData(activeUser));
    }
  }, [activeUser, userLoaded])

  // **************** RENDER **************** //
  if (!activeUser) {
    return <Button variant="primary" onClick={UALContextElem.showModal}>Login</Button>
  }
  return (<>
    <AnimatePresence>
      {(!userLoaded || ParticipantsLoading !== LOADING_STATES.LOADED) && <PublicAbsoluteLoaderComp />}
    </AnimatePresence>
    {children}
  </>
  );
}
export default AuthwrapperComp