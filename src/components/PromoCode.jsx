const PromoCode = () => {
  return (
    <>
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
    </>
  );
}
export default PromoCode