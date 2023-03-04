const FilterTab = ({ name, item }) => {
  console.log(item);
  return (
    <div className="collapse">
      <input type="checkbox" className="peer" />
      <div className="collapse-title border-b font-semibold px-0  text-[14px]">
        {name}
      </div>
      <div className="collapse-content pt-3 px-0 text-[14px]">
        <div className="form-control">{item}</div>
      </div>
    </div>
  );
};
export default FilterTab;
