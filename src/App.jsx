import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Account from "./pages/Account";
import Detail from "./pages/Detail";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <div className="font-poppins">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="detail" element={<Detail />} />
              <Route path="filter" element={<Filter />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/login" element={<Account />} />
            <Route path="/create-a-new-account" element={<Account />} />
          </Routes>
        </ScrollToTop>
      </div>
    </>
  );
}

export default App;
