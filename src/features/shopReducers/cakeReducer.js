import { BUY_CAKE, OUT_OF_STOCK_CAKE } from "../shopActions";

const initialState = {
  num: 10,
  error:""
};

export const cakeReducer = (state=initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...state,
        num:state.num-action.payload,
        error:"",
      };
    }
    case OUT_OF_STOCK_CAKE:{
      return {
          ...state,
          error:`Enter a quantity less than ${state.num}`,
        };  
    }
    default:
      return state;
  }
};
