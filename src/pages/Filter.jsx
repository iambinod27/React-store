import Breadcrumb from "../components/Breadcrumb";

const Filter = () => {
  return (
    <>
      <div className="py-8">
        {/* breadcrumbs */}
        <Breadcrumb />
        {/* breadcrumbs */}

        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="text-[2.5rem] font-semibold">Tuxedo Suits</h3>
            <div className="font-medium text-[12px]">78 items</div>
          </div>
          <select className="select  w-full max-w-[14.5rem] rounded-none border-base-300 ">
            <option disabled selected>
              Sort
            </option>
            <option>Now Trending</option>
            <option>Best Sellers</option>
            <option>Top Rated</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default Filter;
