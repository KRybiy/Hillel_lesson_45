import { useDispatch, useSelector } from "react-redux";
import { CounterState, decrement, increment } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state: CounterState) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;