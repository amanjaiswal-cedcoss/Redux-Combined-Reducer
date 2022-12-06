import { BUY_ICECREAM,OUT_OF_STOCK_ICECREAM } from "../shopActions";

const initialState = {
  num: 10,
  error:""
};

export const iceCreamReducer = (state=initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: {
      return {
        ...state,
        num:state.num-action.payload,
        error:"",
      };
    }
    case OUT_OF_STOCK_ICECREAM:{
        return {
            ...state,
            error:`Enter a quantity less than ${state.num}`,
          };  
      }
    default:
      return state;
  }
};