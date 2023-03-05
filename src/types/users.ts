export enum UsersActionType {
  FETCH_USERS_LOAD = "FETCH_USERS_LOAD",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUserActionProps {
  type: UsersActionType.FETCH_USERS_LOAD;
}

interface FetchUserSuccessActionProps {
  type: UsersActionType.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUserErrorActionProps {
  type: UsersActionType.FETCH_USERS_ERROR;
  payload: string;
}

export interface UsersStateProps {
  users: any[];
  loading: boolean;
  error: null | string;
}

export type UserAction =
  | FetchUserActionProps
  | FetchUserSuccessActionProps
  | FetchUserErrorActionProps;
