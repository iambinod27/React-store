import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";

const Filter = () => {
  return (
    <>
      <div className="py-8">
        {/* breadcrumbs */}
        <Breadcrumb />
        {/* breadcrumbs */}

        {/* Filter head */}
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="text-[2.5rem] font-semibold">Tuxedo Suits</h3>
            <div className="font-light text-[12px]">78 items</div>
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
        {/* Filter head */}

        <div className="grid grid-cols-8 gap-4 py-5">
          <div className="col-span-2">01</div>
          <div className="col-span-6 ">
            <div className="grid grid-cols-3 gap-10">
              {new Array(6).fill(0).map((index) => {
                return <Card />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
