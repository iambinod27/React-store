import { useDispatch } from "react-redux";
import { removeItem } from "../store/features/cart/cartSlice";
import QtyCounter from "./QtyCounter";

const CartList = ({ title, price, img, amount, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="mb-4  p-4 shadow-2xl">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <img src={img} alt={title} className="w-full h-52 object-cover" />
        </div>
        <div className="col-span-3">
          <div className="border-b pb-3">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-medium capitalize">{title}</h2>
              <div onClick={() => dispatch(removeItem(id))}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-x w-[2rem] h-[2rem] cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
            </div>
            <p className="font-light text-[14px] ">Ref: {id}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center py-4">
              <p>Qty:</p>
              <div className="px-3">
                <QtyCounter amount={amount} id={id} />
              </div>
            </div>
            <div className="text-lg text-[#494949] font-normal">${price}</div>
          </div>
          <div className="flex items-center justify-end text-xl">
            ${(price * amount).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartList;
