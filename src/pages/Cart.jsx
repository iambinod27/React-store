import CartList from "../components/CartList";
import PromoCode from "../components/PromoCode";
import TotalAmount from "../components/TotalAmount";

const Cart = () => {
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
      <div className="flex justify-center font-semibold uppercase text-3xl">
        <h2>My Cart</h2>
      </div>
      <div className="grid grid-cols-9 my-5 gap-5">
        <div className="col-span-6 ">
          <CartList />
          <CartList />
        </div>
        <div className="col-span-3 ">
          <div className="shadow-xl p-5">
            <TotalAmount />
          </div>

          <div className="shadow-xl p-5 my-5 ">
            <PromoCode />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
