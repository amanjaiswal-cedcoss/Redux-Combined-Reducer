import React, { useRef} from "react";
import style from './Shop.module.css'
import { useDispatch, useSelector } from "react-redux";
import { buyCake, buyChocolate, buyIceCream, outOfStockCake, outOfStockChocolate, outOfStockIceCream , multiply , divide , add , subtract , clear,} from "./shopActions";

const Shop = () => {
  const refCake = useRef();
  const refIceCream = useRef();
  const refChocolate = useRef();
  const refNum1=useRef();
  const refNum2=useRef();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const buy = () => {
    if (refCake.current.value !== "" && refCake.current.value > 0) {
      if (state.cakeReducer.num >= refCake.current.value) {
        dispatch(buyCake(refCake.current.value));
        refCake.current.value = "";
      } else {
        dispatch(outOfStockCake());
      }
    }
    if (refIceCream.current.value !== "" && refIceCream.current.value > 0) {
      if (state.iceCreamReducer.num >= refIceCream.current.value) {
        dispatch(buyIceCream(refIceCream.current.value));
        refIceCream.current.value = "";
      } else {
        dispatch(outOfStockIceCream());
      }
    }
    if (refChocolate.current.value !== "" && refChocolate.current.value > 0) {
      if (state.chocolateReducer.num >= refChocolate.current.value) {
        dispatch(buyChocolate(refChocolate.current.value));
        refChocolate.current.value = "";
      } else {
        dispatch(outOfStockChocolate());
      }
    }
  };
  console.log(state)

  return (
    <>
      <div className={style.container}>
        <h2>Number of Cakes : {state.cakeReducer.num}</h2>
      </div>
      <div className={style.container}>
        <h2>Number of Ice-Creams : {state.iceCreamReducer.num}</h2>
      </div>
      <div className={style.container}>
        <h2>Number of Chocolates : {state.chocolateReducer.num}</h2>
      </div>
      <div className={style.container}>
      <h2 className={style.header}>Place your order</h2>
      <div className={style.container__Inner}>
        <input className={style.inp} type="number" ref={refCake} placeholder="Enter number of Cakes"/>
        <p className={style.error}>{state.cakeReducer.error}</p>
      </div>
      <div className={style.container__Inner}>
        <input className={style.inp} type="number" ref={refIceCream} placeholder="Enter number of Ice-Creams"/>
        <p className={style.error}>{state.iceCreamReducer.error}</p>
      </div>
      <div className={style.container__Inner}>
        <input className={style.inp} type="number" ref={refChocolate} placeholder="Enter number of Chocolates"/>
        <p className={style.error}>{state.chocolateReducer.error}</p>
      </div>
      <button className={style.btn} onClick={buy}>Buy</button>
      </div>
      <div className={style.container}>
      <h2 className={style.header}>Subtask</h2>
        <div className={style.container__Inner}>
          <input className={style.inp} type="number" ref={refNum1} placeholder="Enter a number"/>
          <input className={style.inp} type="number" ref={refNum2} placeholder="Enter a number"/>
        </div>
        <div className={style.container__Inner}>
          {(state.multiplyReducer.answer!=="")?<p className={style.paraAnswer}>Multiply answer = {state.multiplyReducer.answer}</p>:""}{(state.divideReducer.answer!=="")?<p className={style.paraAnswer}>Division answer = {state.divideReducer.answer}</p>:""}{(state.addReducer.answer!=="")?<p className={style.paraAnswer}>Addition answer = {state.addReducer.answer}</p>:""}{(state.subtractReducer.answer!=="")?<p className={style.paraAnswer}>Subtraction answer = {state.subtractReducer.answer}</p>:""}
        </div>
        <div className={style.container}>
            <button className={`${style.btn} ${style.btnblack}`} onClick={()=>{dispatch(multiply(parseInt(refNum1.current.value),parseInt(refNum2.current.value)))}}>Multiply</button>
            <button className={`${style.btn} ${style.btnblack}`} onClick={()=>{dispatch(divide(parseInt(refNum1.current.value),parseInt(refNum2.current.value)))}}>Divide</button>
            <button className={`${style.btn} ${style.btnblack}`} onClick={()=>{dispatch(add(parseInt(refNum1.current.value),parseInt(refNum2.current.value)))}}>Add</button>
            <button className={`${style.btn} ${style.btnblack}`} onClick={()=>{dispatch(subtract(parseInt(refNum1.current.value),parseInt(refNum2.current.value)))}}>Subtract</button>
            <button className={`${style.btn} ${style.btnblack}`} onClick={()=>{dispatch(clear())}}>Clear</button>
        </div>
      </div>
    </>
  );
};

export default Shop;
