import { BUY_CHOCOLATE,OUT_OF_STOCK_CHOCOLATE } from "../shopActions";

const initialState = {
  num: 10,
  error:""
};

export const chocolateReducer = (state=initialState, action) => {
  switch (action.type) {
    case BUY_CHOCOLATE: {
      return {
        ...state,
        num:state.num-action.payload,
        error:"",
      };
    }
    case OUT_OF_STOCK_CHOCOLATE:{
        return {
            ...state,
            error:`Enter a quantity less than ${state.num}`,
          };  
      }
    default:
      return state;
  }
};