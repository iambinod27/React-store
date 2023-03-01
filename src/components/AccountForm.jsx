import { Link, useLocation } from "react-router-dom";

export const AccountForm = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <div>
        <div className="mb-3">
          {pathname === "/login" ? (
            <>
              <h2 className="text-3xl font-medium">Sign In</h2>
              <p className="font-light italic">
                De Nada! sign in to your account
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-medium">Create an Account</h2>
              <p className="font-light italic">Enhance Your Life </p>
            </>
          )}
        </div>
        <form className="form-control">
          {/* Email Address */}
          <div className="w-full max-w-xs mb-3">
            <input
              type="email"
              placeholder="Email Adress"
              className="input input-bordered rounded-none w-full max-w-xs"
            />
          </div>

          {/* first name and Last Name */}
          <div
            className={`w-full max-w-xs flex gap-3 mb-3 ${
              pathname === "/login" ? "hidden" : ""
            }`}
          >
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered rounded-none w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered rounded-none w-full max-w-xs"
            />
          </div>

          {/* Password */}
          <div className="w-full max-w-xs">
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered rounded-none w-full max-w-xs"
            />
          </div>

          {/* button */}
          <div className="w-full max-w-xs flex items-center flex-col gap-2 my-2">
            <p
              className={`text-[12px] font-light ${
                pathname === "/login" ? "hidden" : ""
              }`}
            >
              By clicking "Continue" you agree to our Terms of Service + updated
              Privacy Notice, including receipt of emails and promotions.
            </p>

            <button className="btn rounded-none min-w-full">
              {pathname === "/login" ? "Sign In" : "Create An account"}
            </button>
            {pathname === "/login" ? (
              <div className="font-light text-[15px] mt-2 capitalize">
                <Link to="/forget-password">forget password?</Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </>
  );
};
