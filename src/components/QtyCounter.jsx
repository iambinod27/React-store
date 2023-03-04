import { useState } from "react";

const QtyCounter = () => {
  const [counter, setCounter] = useState(2);

  const increaseCounter = () => {
    if (counter < 1) {
      return counter;
    } else {
      setCounter(counter + 1);
    }
  };

  const decreaseCounter = () => {
    if (counter <= 1) {
      return counter;
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div className="flex">
        <div
          className="btn px-3  h-[2.3rem] min-h-[2rem] rounded-none"
          onClick={decreaseCounter}
        >
          -
        </div>
        <div className="flex items-center justify-center px-3 w-[2rem] h-[2.3rem] min-h-[2rem]">
          {counter}
        </div>
        <div
          className="btn px-3 h-[2.3rem] min-h-[2rem] rounded-none"
          onClick={increaseCounter}
        >
          +
        </div>
      </div>
    </>
  );
};
export default QtyCounter;
