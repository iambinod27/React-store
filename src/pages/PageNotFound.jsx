import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img
            src="https://media.giphy.com/media/YOeGlw8Nzn2xUleFdU/giphy.gif"
            alt="Not found"
            className="w-72 h-full"
          />
          <h1 className="font-bold text-[2rem] my-2">404 Page Not Found</h1>
          <NavLink to="/" className="btn rounded-none btn-error text-white">
            Back to Home
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default PageNotFound;
