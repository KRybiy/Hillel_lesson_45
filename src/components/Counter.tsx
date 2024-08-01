import { useSelector } from "react-redux";
import { decrementAsync, incrementAsync } from "../redux/counterSlice";
import { RootState, useAppDispatch } from "../redux/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(incrementAsync())}>+</button>
      <button onClick={() => dispatch(decrementAsync())}>-</button>
    </div>
  );
};

export default Counter;