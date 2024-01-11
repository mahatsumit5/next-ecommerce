import { ReducerDispatch } from "@/types";
import { ACTIONS } from "../constants";

interface InitialState {
  category: string;
  size: string[];
  limit: string;
  range: string;
  query: string;
  sort: string;
}

export const reducerInitialState: InitialState = {
  category: "",
  size: [],
  limit: "",
  range: "",
  query: "",
  sort: "",
};
export function reducerHandler(
  state: InitialState,
  action: ReducerDispatch
): InitialState {
  switch (action.type) {
    case ACTIONS.CATEGORY: {
      return { ...state, category: action.payload as string };
    }

    case ACTIONS.QUERY: {
      return { ...state, query: action.payload as string };
    }
    case ACTIONS.LIMIT: {
      return { ...state, limit: action.payload as string };
    }
    case ACTIONS.SIZE: {
      return { ...state, size: action.payload as string[] };
    }
    case ACTIONS.RANGE: {
      return { ...state, range: action.payload as string };
    }
    case ACTIONS.SORT: {
      return { ...state, sort: action.payload as string };
    }
    case ACTIONS.RESET: {
      return reducerInitialState;
    }
    default:
      return reducerInitialState;
  }
}
