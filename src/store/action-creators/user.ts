import axios from "axios";
import { Dispatch } from "redux";
import { UserAction, UsersActionType } from "../../types/users";

export const fetchUsers: any = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UsersActionType.FETCH_USERS_LOAD });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: UsersActionType.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UsersActionType.FETCH_USERS_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};
