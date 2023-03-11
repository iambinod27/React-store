import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartList from "../components/CartList";
import EmptyCart from "../components/EmptyCart";
import PromoCode from "../components/PromoCode";
import TotalAmount from "../components/TotalAmount";
import { clearCart } from "../store/features/cart/cartSlice";
import Spinner from "../components/Spinner";
import { getCartItems } from "../store/actions/cart/cartActions";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems, total, amount, isLoading } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    // dispatch(getCartItems());
  }, []);

  return (
    <div className="my-8">
      {/* breadcrumb */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {/* breadcrumb */}

      {isLoading ? (
        <div className="h-72 w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : amount < 1 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="flex justify-center font-semibold uppercase text-3xl pb-5">
            <h2>My Cart</h2>
          </div>
          <div className="grid grid-cols-9 my-5 gap-5">
            <div className="col-span-6 min-h-[30rem] ">
              {cartItems.map((item) => {
                return <CartList key={item.id} {...item} />;
              })}
            </div>
            <div className="col-span-3 ">
              <div className="shadow-xl p-5">
                <TotalAmount total={total} />
              </div>

              <div className="shadow-xl p-5 my-5 ">
                <PromoCode />
              </div>

              <div className=" my-3 cursor-pointer flex items-center gap-1 capitalize  ">
                {/* The button to open modal */}
                <label
                  htmlFor="my-modal"
                  className="text-[14px] btn btn-ghost rounded-none"
                >
                  clear cart
                </label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal ">
                  <div className="modal-box rounded-none">
                    <h3 className="font-bold text-lg">
                      Are You sure? You want to Clear All Cart
                    </h3>

                    <div className="modal-action">
                      <label
                        htmlFor="my-modal"
                        className="btn rounded-none"
                        onClick={() => dispatch(clearCart())}
                      >
                        confirm
                      </label>
                      <label
                        htmlFor="my-modal"
                        className="btn btn-ghost rounded-none"
                      >
                        cancel
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
