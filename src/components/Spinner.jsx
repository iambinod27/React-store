import loading from "../assets/icons/spinner.gif";

const Spinner = () => {
  return (
    <div className="flex flex-col gap-2">
      <img src={loading} alt="spinner" />
      <h1>Loading</h1>
    </div>
  );
};
export default Spinner;
