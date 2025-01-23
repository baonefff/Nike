import Nav from "./components/Nav";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Nike001, Nike01, Nike10, Nike100 } from "./Page";

const App = () => {
  return (
    <Router>
      <Nav />
      <main className="relative" id="home">
        <Routes>
          {/* Redirect from root to home */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Home Page */}
          <Route
            path="/home"
            element={
              <>
                <section className="xl-pading-l wide::pading-r padding-b">
                  <Hero />
                </section>
                <section className="padding">
                  <PopularProducts />
                </section>
                <section className="padding">
                  <SuperQuality />
                </section>
                <section className="padding-x py-10">
                  <Services />
                </section>
                <section className="padding">
                  <SpecialOffer />
                </section>
                <section className="bg-pale-blue padding">
                  <CustomerReviews />
                </section>
                <section className="padding-x sm:py-32 py-16 w-full">
                  <Subscribe />
                </section>
              </>
            }
          />

          {/* Product Pages */}
          <Route path="/Nike001" element={<Nike001 />} />
          <Route path="/Nike01" element={<Nike01 />} />
          <Route path="/Nike10" element={<Nike10 />} />
          <Route path="/Nike100" element={<Nike100 />} />

          {/* Fallback for Undefined Routes */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
      <section className="bg-black padding-x padding-t pb-8">
      <Footer />
      </section>
    </Router>
  );
};

export default App;
