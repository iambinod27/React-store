import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  decrease,
  increase,
  removeItem,
} from "../store/features/cart/cartSlice";

const QtyCounter = ({ amount, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex">
        <div
          className="btn px-3  h-[2.3rem] min-h-[2rem] rounded-none"
          onClick={() => {
            if (amount <= 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          -
        </div>
        <div className="flex items-center justify-center px-3 w-[2rem] h-[2.3rem] min-h-[2rem]">
          {amount}
        </div>
        <div
          className="btn px-3 h-[2.3rem] min-h-[2rem] rounded-none"
          onClick={() => dispatch(increase(id))}
        >
          +
        </div>
      </div>
    </>
  );
};
export default QtyCounter;
