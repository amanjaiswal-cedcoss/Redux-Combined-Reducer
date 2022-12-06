export const BUY_CAKE="BUY_CAKE";
export const BUY_ICECREAM="BUY_ICECREAM";
export const BUY_CHOCOLATE="BUY_CHOCOLATE";
export const OUT_OF_STOCK_CAKE="OUT_OF_STOCK_CAKE"
export const OUT_OF_STOCK_ICECREAM="OUT_OF_STOCK_ICECREAM"
export const OUT_OF_STOCK_CHOCOLATE="OUT_OF_STOCK_CHOCOLATE"
export const MULTIPLY="MULTIPLY";
export const DIVIDE="DIVIDE";
export const ADD="ADD";
export const SUBTRACT="SUBTRACT";
export const CLEAR="CLEAR";

export const buyCake=(payload)=>{
    return{
        type:BUY_CAKE,
        info:"Action to buy a cake",
        payload:payload,
    }
}
export const buyIceCream=(payload)=>{
    return{
        type:BUY_ICECREAM,
        info:"Action to buy a ice cream",
        payload:payload,
    }
}
export const buyChocolate=(payload)=>{
    return{
        type:BUY_CHOCOLATE,
        info:"Action to buy a chocolate",
        payload:payload,
    }
}
export const outOfStockCake=()=>{
    return{
        type:OUT_OF_STOCK_CAKE,
        info:"Action to display error",
    }
}
export const outOfStockIceCream=()=>{
    return{
        type:OUT_OF_STOCK_ICECREAM,
        info:"Action to display error",
    }
}
export const outOfStockChocolate=()=>{
    return{
        type:OUT_OF_STOCK_CHOCOLATE,
        info:"Action to display error",
    }
}
export const multiply=(payload1,payload2)=>{
    return{
        type:MULTIPLY,
        info:"Action to multiply two numbers",
        payload1:payload1,
        payload2:payload2,
    }
}
export const divide=(payload1,payload2)=>{
    return{
        type:DIVIDE,
        info:"Action to perform division on two numbers",
        payload1:payload1,
        payload2:payload2,
    }
}
export const add=(payload1,payload2)=>{
    return{
        type:ADD,
        info:"Action to add two numbers",
        payload1:payload1,
        payload2:payload2,
    }
}
export const subtract=(payload1,payload2)=>{
    return{
        type:SUBTRACT,
        info:"Action to calculate difference between two numbers",
        payload1:payload1,
        payload2:payload2,
    }
}
export const clear=()=>{
    return{
        type:CLEAR,
        info:"Action to reset answer",
    }
}