import { Link, useLocation } from "react-router-dom";

const AccountBanner = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      {pathname !== "/login" ? (
        <>
          <h2 className="text-3xl font-medium">Already have an account ?</h2>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-medium">Join US</h2>
          <p className="font-light">
            Create an account to start enjoying exclusive member benefits
          </p>
        </>
      )}

      <Link to={pathname === "/login" ? "/create-a-new-account" : "/login"}>
        <div className="btn btn-outline rounded-none font-light min-w-full">
          {pathname === "/login" ? "Create a new account" : "Sign In"}
        </div>
      </Link>
    </>
  );
};
export default AccountBanner;
