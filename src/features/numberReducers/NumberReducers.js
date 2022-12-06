import { DIVIDE, MULTIPLY, ADD, SUBTRACT, CLEAR} from "../shopActions";

export const initialState = {
  answer: "",
};

export const divideReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIVIDE: {
      return {
        ...state,
        answer: action.payload1/action.payload2,
      };
    } case CLEAR: {
      return {
        ...state,
        answer: "",
      };
    }
    default:
      return state;
  }
};

export const multiplyReducer = (state = initialState, action) => {
  switch (action.type) {
    case MULTIPLY: {
      return {
        ...state,
        answer: action.payload1 * action.payload2,
      };
    } case CLEAR: {
      return {
        ...state,
        answer: "",
      };
    }
    default:
      return state;
  }
};
export const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        answer: action.payload1 + action.payload2,
      };
    } case CLEAR: {
      return {
        ...state,
        answer: "",
      };
    }
    default:
      return state;
  }
};
export const subtractReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBTRACT: {
      return {
        ...state,
        answer: action.payload1 - action.payload2,
      };
    } case CLEAR: {
      return {
        ...state,
        answer: "",
      };
    }
    default:
      return state;
  }
};
