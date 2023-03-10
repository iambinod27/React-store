const TotalAmount = ({ total }) => {
  return (
    <>
      <h4 className="text-xl font-medium pb-5">The total amount of </h4>
      <div className="flex justify-between py-3">
        <div>Temporary amount</div>
        <div>${total.toFixed(2)}</div>
      </div>
      <div className="flex justify-between border-b py-3">
        <div>Shipping</div>
        <div>Gratis</div>
      </div>
      <h3 className="font-medium capitalize py-4">
        the total amount of (including VAT) ${total.toFixed(2)}
      </h3>
      <button className="btn uppercase rounded-none min-w-full">
        Got to checkout
      </button>
    </>
  );
};
export default TotalAmount;
