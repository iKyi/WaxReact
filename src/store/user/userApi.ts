import { APIURL } from "../../api/ApiUrl";
import AxiosInstace from "../../api/AxiosInstance";
import { AppThunk } from "../../app/store";
import { IArenaUser, IUALUser } from "./interfaces";
import { setArenaUser, setUALUser } from "./userSlice";

export const BindInitialUserData = (UalUser: IUALUser): AppThunk<Promise<boolean>> => async (
  dispatch,
  getState
) => {
  return await AxiosInstace.get(`${APIURL()}GetUser/${UalUser.accountName}`).then(resp => {
    const { data } = resp;
    dispatch(setUALUser(UalUser));
    dispatch(setArenaUser(data as IArenaUser));
    return true;
  })
}
  ;