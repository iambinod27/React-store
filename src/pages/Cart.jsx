const Cart = () => {
  return (
    <div className="my-8">
      <div className="flex justify-center font-semibold uppercase text-3xl">
        <h2>My Cart</h2>
      </div>
      <div className="grid grid-cols-9 my-5">
        <div className="col-span-6 border">01</div>
        <div className="col-span-3 ">
          <div className="shadow-xl p-5">
            <h4 className="text-xl font-medium pb-5">The total amount of </h4>
            <div className="flex justify-between py-3">
              <div>Temporary amount</div>
              <div>$53,98</div>
            </div>
            <div className="flex justify-between border-b py-3">
              <div>Shipping</div>
              <div>Gratis</div>
            </div>
            <h3 className="font-medium capitalize py-4">
              the total amount of (including VAT) $53,98
            </h3>
            <button className="btn uppercase rounded-none min-w-full">
              Got to checkout
            </button>
          </div>

          <div className="shadow-2xl p-5 my-5 ">
            <h3 className="mb-4">Apply promo code</h3>
            <form className="grid grid-cols-4 gap-2">
              <input
                type="text"
                className="input input-bordered rounded-none col-span-3"
                placeholder="Promo code"
              />
              <button className="btn max-w-full col-span-1 rounded-none">
                apply
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
