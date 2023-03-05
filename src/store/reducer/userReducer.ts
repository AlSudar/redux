import {
  UserAction,
  UsersActionType,
  UsersStateProps,
} from "../../types/users";

const initialState: UsersStateProps = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UsersStateProps => {
  switch (action.type) {
    case UsersActionType.FETCH_USERS_LOAD:
      return { loading: true, error: null, users: [] };

    case UsersActionType.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };

    case UsersActionType.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };

    default:
      return state;
  }
};
