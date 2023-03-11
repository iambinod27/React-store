import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { getUser } from "./store/actions/auth/authActions";
import { calculateTotals } from "./store/features/cart/cartSlice";
import { getHttpOnlyCookies } from "./utils/getHttpOnlyCookies";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const access_token = getHttpOnlyCookies("access_token");

  console.log(isAuthenticated);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUser());
    }
  }, [access_token]);

  return (
    <>
      <div className="font-poppins">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="detail" element={<Detail />} />
              <Route path="filter" element={<Filter />} />
              <Route path="/login" element={<Account />} />
              <Route path="/create-a-new-account" element={<Account />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ScrollToTop>
      </div>
    </>
  );
}

export default App;
