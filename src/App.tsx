import { Route, Routes } from "react-router-dom";
// import "./App.css";
import "./App.scss";
import WithNav from "./components/nav/WithNav";
import WithoutNav from "./components/nav/WithoutNav";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Product from "./pages/Product";
import ProductSubPage from "./pages/ProductSubPage";
import Service from "./pages/Service";
import ServiceSubPage from "./pages/ServiceSubPage";
import SignIn from "./pages/SignIn";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <div className="App">
      <div className="">
        <Routes>
          {/* with this logic , the navbar wont be rendered on singin page */}
          <Route element={<WithoutNav />}>
            <Route path="/sign-in" element={<SignIn />} />
          </Route>

          <Route element={<WithNav />}>
            <Route path="/" element={<Home />} />
            <Route index path="/service" element={<Service />} />
            <Route
              index
              path="/service-subpage-1"
              element={<ServiceSubPage />}
            />
            <Route index path="/product" element={<Product />} />
            <Route
              index
              path="/product-subpage-1"
              element={<ProductSubPage />}
            />
            <Route index path="/testimonial" element={<Testimonial />} />
            <Route path="/*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
