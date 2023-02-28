import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
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
          </Routes>
        </ScrollToTop>
      </div>
    </>
  );
}

export default App;
