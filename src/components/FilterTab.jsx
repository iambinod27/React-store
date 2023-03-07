const FilterTab = ({ name, item }) => {
  console.log(item);
  return (
    <div className="collapse">
      <input type="checkbox" className="peer " />
      <div className="collapse-title border-b font-semibold px-0  text-[14px]">
        {name}
      </div>
      <div className="collapse-content pt-3 px-0 text-[14px]">
        {item.map((price) => {
          return (
            <>
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="radio"
                    name="radio-10"
                    className="checkbox checked:bg-base-500 h-[1rem] w-[1rem] rounded-none"
                    checked
                  />
                  <span className="label-text text-[14px]">{price}</span>
                </label>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default FilterTab;
