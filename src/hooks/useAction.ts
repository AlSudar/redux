import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreators from "../store/action-creators/user";
import * as TodoActionCreators from "../store/action-creators/todo";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    Object.assign({}, TodoActionCreators, UserActionCreators),
    dispatch
  );
};
