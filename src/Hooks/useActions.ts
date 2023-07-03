import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreator from "../Store/Actions/actionCreator";
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreator, dispatch);
};
