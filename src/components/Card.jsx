const Card = () => {
  return (
    <>
      <div className="card card-compact w-80 bg-base-100 rounded-none shadow-xl">
        <figure>
          <img
            src="https://i.ebayimg.com/images/g/HTgAAOSw~nFf2Uv4/s-l500.jpg"
            alt="Suits"
            className="h-96 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Men Navy Blue Formal</h2>
          <p>A wear for wedding, work, class for men to look sexy</p>
          <div className="card-actions justify-end">
            <button className="btn bg-green-600 hover:bg-green-500 border-none text-white rounded-none">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
