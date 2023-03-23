import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/Index";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const increamentHandler = () => {
    // dispatch({type:'increment'});
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({type:'decerement'});
    dispatch(counterActions.decrement());
  };

  // const incrementBy5Handler = ()=>{
  //   dispatch({type:'INCREMENTBY5', amount:5});
  // }

  // const decrementBy5Handler = ()=>{
  //   dispatch({type:'DECREMENTBY5'});
  // }

  const increaseHandler = () => {
    // dispatch({type:'increase', amount:10});
    dispatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'});
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>increment by 10</button>
        {/* <button onClick={incrementBy5Handler}>IncrementBy5</button> */}
        {/* <button onClick={decrementBy5Handler}>DecremenentBy5</button> */}
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
