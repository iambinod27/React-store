import { Formik, useFormik } from "formik";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../store/actions/auth/authActions";

export const AccountForm = () => {
  const location = useLocation();
  const { pathname } = location;

  const dispatch = useDispatch();

  const register_formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
    },

    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  const login_formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
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
        <form
          className="form-control"
          onSubmit={
            pathname === "/create-a-new-account"
              ? register_formik.handleSubmit
              : login_formik.handleSubmit
          }
        >
          {/* Email Address */}
          <div
            className={`w-full max-w-xs ${
              pathname !== "/login" ? "mb-3" : ""
            } ${pathname === "/login" ? "hidden" : ""}`}
          >
            <input
              type="email"
              placeholder="Email Adress"
              className="input input-bordered rounded-none w-full max-w-xs"
              name="email"
              id="email"
              value={register_formik.values.email}
              onChange={register_formik.handleChange}
              onBlur={register_formik.handleBlur}
            />
          </div>

          {/* username */}
          <div className="w-full max-w-xs mb-3">
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered rounded-none w-full max-w-xs "
              name="username"
              id="username"
              value={
                pathname === "/create-a-new-account"
                  ? register_formik.values.username
                  : login_formik.values.username
              }
              onChange={
                pathname === "/create-a-new-account"
                  ? register_formik.handleChange
                  : login_formik.handleChange
              }
              onBlur={
                pathname === "/create-a-new-account"
                  ? register_formik.handleBlur
                  : login_formik.handleBlur
              }
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
              name="first_name"
              id="first_name"
              value={register_formik.values.first_name}
              onChange={register_formik.handleChange}
              onBlur={register_formik.handleBlur}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered rounded-none w-full max-w-xs"
              name="last_name"
              id="last_name"
              value={register_formik.values.last_name}
              onChange={register_formik.handleChange}
              onBlur={register_formik.handleBlur}
            />
          </div>

          {/* Password */}
          <div className="w-full max-w-xs">
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered rounded-none w-full max-w-xs"
              name="password"
              id="password"
              value={
                pathname === "/create-a-new-account"
                  ? register_formik.values.password
                  : login_formik.values.password
              }
              onChange={
                pathname === "/create-a-new-account"
                  ? register_formik.handleChange
                  : login_formik.handleChange
              }
              onBlur={
                pathname === "/create-a-new-account"
                  ? register_formik.handleBlur
                  : login_formik.handleBlur
              }
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

            <button className="btn rounded-none min-w-full" type="submit">
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
